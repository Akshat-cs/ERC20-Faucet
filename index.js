const { ethers } = require("ethers");

require("dotenv").config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const TOKEN_CONTRACT_ADDRESS = process.env.TOKEN_CONTRACT_ADDRESS;

const { abi } = require("./artifacts/contracts/MetaToken.sol/MetaToken.json");

const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, abi, signer);

const decimals = 18;
// Example usage of contract functions

async function initialize() {
  console.log("initializing...");
  const initializeTx = await contract.initialize("MetaToken", "MTK", decimals);
  await initializeTx.wait();
  console.log("Contract Initialized");

  const totalSupply = await contract.totalSupply();
  console.log("Total supply:", ethers.utils.formatUnits(totalSupply, decimals));

  const balanceOfcontract = await contract.balanceOf(
    "PASTE IN THE ADDRESS OF THE DEPLOYED TOKEN CONTRACT"
  );
  console.log(
    "Balance of PASTE IN THE ADDRESS OF THE DEPLOYED TOKEN CONTRACT:",
    ethers.utils.formatUnits(balanceOfcontract, decimals)
  );
}
initialize().catch((err) => console.error(err));
