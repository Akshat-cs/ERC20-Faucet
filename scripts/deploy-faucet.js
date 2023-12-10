const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Faucet");
  console.log("Deploying faucet contract...");
  const lock = await Lock.deploy(
    "PUT IN THE ADDRESS OF THE DEPLOYED TOKEN CONTRACT ",
    1
  );

  await lock.waitForDeployment();

  console.log(`Contract Address: ${lock.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
