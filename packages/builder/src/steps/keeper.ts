import _ from 'lodash';
import { JTDDataType } from 'ajv/dist/core';

import { ChainBuilderContext, ChainBuilderRuntime } from '../types';
import { ChainDefinitionScriptSchema } from '../util';

export type Config = JTDDataType<typeof ChainDefinitionScriptSchema>;

export interface Outputs {
  [key: string]: string;
}

// ensure the specified contract is already deployed
// if not deployed, deploy the specified hardhat contract with specfied options, export address, abi, etc.
// if already deployed, reexport deployment options for usage downstream and exit with no changes
export default {
  validate: ChainDefinitionScriptSchema,

  async getState(_runtime: ChainBuilderRuntime, ctx: ChainBuilderContext, config: Config) {
    return this.configInject(ctx, config);
  },

  configInject(ctx: ChainBuilderContext, config: Config) {
    config = _.cloneDeep(config);

    config.exec = _.template(config.exec)(ctx);

    if (config.args) {
      config.args = _.map(config.args, (v) => {
        return _.template(v)(ctx);
      });
    }

    if (config.env) {
      config.env = _.map(config.env, (v) => {
        return _.template(v)(ctx);
      });
    }

    return config;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async exec(_runtime: ChainBuilderRuntime, _ctx: ChainBuilderContext, _config: Config): Promise<Outputs> {
    return {};
  },
};
