import _ from 'lodash';
import Debug from 'debug';
import { JTDDataType } from 'ajv/dist/core';

import { ethers } from 'ethers';

import { ChainBuilderContext, ChainBuilderRuntime, ChainArtifacts } from '../types';

const debug = Debug('cannon:builder:contract');

const config = {
  properties: {
    artifact: { type: 'string' },
  },
  optionalProperties: {
    abi: { type: 'string' },
    args: { elements: {} },
    libraries: { values: { type: 'string' } },

    // used to force new copy of a contract (not actually used)
    salt: { type: 'string' },

    depends: { elements: { type: 'string' } },
  },
} as const;

export type Config = JTDDataType<typeof config>;

export interface ContractOutputs {
  abi: string;
  address: string;
  deployTxnHash: string;
}

// ensure the specified contract is already deployed
// if not deployed, deploy the specified hardhat contract with specfied options, export address, abi, etc.
// if already deployed, reexport deployment options for usage downstream and exit with no changes
export default {
  validate: config,

  async getState(runtime: ChainBuilderRuntime, ctx: ChainBuilderContext, config: Config) {
    const parsedConfig = this.configInject(ctx, config);

    return {
      bytecode: (await runtime.getArtifact(parsedConfig.artifact)).bytecode,
      config: parsedConfig,
    };
  },

  configInject(ctx: ChainBuilderContext, config: Config) {
    config = _.cloneDeep(config);

    config.artifact = _.template(config.artifact)(ctx);

    config.abi = _.template(config.abi)(ctx);

    if (config.args) {
      config.args = config.args.map((a) => {
        return typeof a == 'string' ? _.template(a)(ctx) : a;
      });
    }

    if (config.libraries) {
      config.libraries = _.mapValues(config.libraries, (a) => {
        return _.template(a)(ctx);
      });
    }

    if (config.salt) {
      config.salt = _.template(config.salt)(ctx);
    }

    return config;
  },

  async exec(runtime: ChainBuilderRuntime, ctx: ChainBuilderContext, config: Config): Promise<ChainArtifacts> {
    debug('exec', config);

    const artifactData = await runtime.getArtifact(config.artifact);

    let injectedBytecode = artifactData.bytecode;
    for (const file in artifactData.linkReferences) {
      for (const lib in artifactData.linkReferences[file]) {
        // get the lib from the config
        const libraryAddress = _.get(config, `libraries.${lib}`);

        if (!libraryAddress) {
          throw new Error(`library for contract ${config.artifact} not defined: ${lib}`);
        }

        debug('lib ref', lib, libraryAddress);

        // afterwards, inject link references
        const linkReferences = artifactData.linkReferences[file][lib];

        for (const ref of linkReferences) {
          injectedBytecode =
            injectedBytecode.substr(0, 2 + ref.start * 2) +
            libraryAddress.substr(2) +
            injectedBytecode.substr(2 + (ref.start + ref.length) * 2);
        }
      }
    }

    // finally, deploy
    const factory = new ethers.ContractFactory(artifactData.abi, injectedBytecode);

    const txn = factory.getDeployTransaction(...(config.args || []));

    const signer = await runtime.getDefaultSigner(txn, config.salt);

    const txnData = await signer.sendTransaction(txn);

    const receipt = await txnData.wait();

    let abi = JSON.parse(factory.interface.format(ethers.utils.FormatTypes.json) as string);

    // override abi?
    if (config.abi) {
      abi = (await runtime.getArtifact(config.abi)).abi;
    }

    return {
      contracts: {
        [runtime.currentLabel?.split('.')[1] || '']: {
          address: receipt.contractAddress,
          abi,
          constructorArgs: config.args || [],
          deployTxnHash: receipt.transactionHash,
        },
      },
    };
  },
};
