const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  // const accountBalance = await deployer.getBalance();
  const waveContractFactory = await hre.ethers.getContractFactory('Reward');
  const waveContract = await waveContractFactory.deploy();
  // const wavePortal = await waveContract.deployed();

  console.log('Deploying contracts with account: ', deployer.address);
  // console.log('Account balance: ', accountBalance.toString());
  // console.log('Contract deployed to: ', waveContract.address);
  console.log('Contract deployed by: ', deployer.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();