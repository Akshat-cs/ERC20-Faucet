const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("MetaToken");
  console.log("Deploying token contract...");
  const lock = await Lock.deploy();

  await lock.waitForDeployment();

  console.log(`Contract Address: ${lock.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
