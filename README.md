# VeTetu Analysis
*Credit to https://github.com/0xV4L3NT1N3/interacting-smart-contracts/blob/main/ for the smart contract interaction template.

Full article guide on [Etherscan API docs.](https://docs.etherscan.io/tutorials/read-write-contract-using-abis)

This script iterates through each NFT in the VeTetu contract, saves the unlock date (unix timestamp) and LockDerivedAmount (TETU-USDC value times 10^18 decimal places). Once you get the text file outputs, you can use the .ipynb notebook in the repository to do some basic timestamp conversions and get a chart of unlock amounts and times. 

### Prerequisites 

* [Node.js](https://nodejs.org/en/) installed 
* A valid Polygonscan API key 
* A Polygon node such as [Infura](infura.io/) or [Alchemy](https://www.alchemy.com/) 

### Getting Started 

1. In a terminal, run `npm install` to install the required dependencies

2. In `script.js`, replace the `node URL` and `private key` variables with your own. 

You can create a free Infura/Alchemy account for node access, and generate a private key from [Metamask](https://metamask.io/)

> Remember, private keys and node API keys are sensitive information, do not commit them to version control. Better yet use an [environment variable.](https://www.npmjs.com/package/dotenv) 

3. Run this code using the command `node script.js`
