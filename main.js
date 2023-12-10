let contractAddress = "PASTE IN YOUR OWN DEPLOYED FAUCET CONTRACT ADDRESS";

let contractAbi = [PASTE IN YOUR OWN FAUCET ABI];

const GOERLI_RPC_URL =
  "PASTE IN YOUR GOERLI RPC URL";
const PRIVATE_KEY =
  "PASTE IN YOUR PRIVATE KEY";

const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(contractAddress, contractAbi, signer);

async function drip() {
  var address = document.getElementById("address");
  var cand = document.getElementById("status");
  const status = await contract.dripCheck(address.value);
  if (status == true) {
    cand.innerHTML = "Please wait, tranferring Tokens";
    const tx = await contract.drip(address.value);
    await tx.wait();
    cand.innerHTML = "Tokens transferred";
  } else {
    cand.innerHTML = "You already got tokens in last 5 minutes, please wait...";
  }
}
