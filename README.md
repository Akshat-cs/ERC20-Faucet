## Local Deployment Steps for a Decentralized Application (dApp)

### Setting up Local Environment

1. **Clone the Repository:**
    ```
    git clone https://github.com/Akshat-cs/ERC20-Faucet
    ```

2. **Set Environment Variables:**
    - Set `GOERLI_RPC_URL` and `PRIVATE_KEY` in the `.env` file.

3. **Install Dependencies:**
    ```
    yarn
    ```

4. **Deploy MetaToken Contract:**
    - Execute:
    ```
    yarn hardhat run --network goerli ./scripts/deploy.js
    ```
    - Set the deployed token contract address in the `deploy-faucet.js` file and also set `TOKEN_CONTRACT_ADDRESS` in the `.env` file.

5. **Update Faucet Contract Address:**
    - Set the deployed token contract address in the `deploy-faucet.js` file and after deploying faucet contract using:
    ```
    yarn hardhat run --network goerli ./scripts/deploy-faucet.js
    ```
    - Set the deployed faucet contract address as `CONTRACT_ADDRESS_FAUCET` in the `.env` file.

### Running the Application

1. **Start the Application:**
    - Paste the token contract address in `index.js` and set `contractAddress`, `contractAbi`, `GOERLI_RPC_URL`, and `PRIVATE_KEY`.

2. **Set Up and Run dApp:**
    ```
    node index.js
    node app.js
    ```

3. **Access the Faucet in Browser:**
    - Open a browser and navigate to `localhost:3000` to access the faucet.

4. **View Tokens in Wallet:**
    - To view requested MTK tokens in your wallet, import tokens into your wallet.

### Conclusion

In summary, the MetaToken contract provides ERC-20 functionalities, and the Faucet contract utilizes these features to distribute tokens periodically. Follow the provided steps to deploy and operate the dApp on your local environment.

