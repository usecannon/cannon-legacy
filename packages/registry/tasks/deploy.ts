import { task } from 'hardhat/config';

task('deploy')
  .setAction(async (_, hre) => {
    const Contract = await hre.ethers.getContractFactory('CannonRegistry');
    const contract = await Contract.deploy();

    await contract.deployed();

    console.log('Contract deployed to:', contract.address);

    await hre.run('verify:verify', {
      address: contract.address,
    });

    console.log(`Contract verified: https://${hre.network.name}.etherscan.io/address/${contract.address}`);
  });
