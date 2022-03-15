import hre from 'hardhat';
import assert from 'assert';
import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { TASK_BUILD } from 'hardhat-cannon/dist/src/task-names';
import { TASK_CANNON } from 'hardhat-cannon/dist/src/task-names';
import waitForServer from './helpers/server';
import { JsonRpcServer } from 'hardhat/types';

describe('Hardhat Runtime Environment', function () {
  let server: JsonRpcServer;
  let deployment: { abi: any[]; address: string };

  before('load cannon node', async function () {
    this.timeout(30000);

    await hre.run(TASK_BUILD, { file: 'cannonfile.erc20.toml' });

    hre.run(TASK_CANNON, {
      label: 'erc20:1.0.0',
    });

    server = await waitForServer();
  });

  before('load deployment', async function () {
    const content = await readFile(resolve(hre.config.paths.deployments, hre.network.name, 'ERC20.json'));
    deployment = JSON.parse(content.toString());
  });

  after(async function () {
    await server.close();
  });

  it('should have a config field', function () {
    console.log(deployment);
    assert.notEqual(hre.config, undefined);
  });
});
