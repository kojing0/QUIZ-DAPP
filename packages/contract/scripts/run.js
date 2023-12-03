const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory('Reward');
  const waveContract = await waveContractFactory.deploy();
  // const wavePortal = await waveContract.deployed();

  console.log('WavePortal address: ', waveContract.address);
  console.log('Contract deployed by:', owner.address);


  let printMessage;
  printMessage = await waveContract.printMessage()

  printMessage = await waveContract.connect(randomPerson).getOwnerAddress()
  await printMessage.wait();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();