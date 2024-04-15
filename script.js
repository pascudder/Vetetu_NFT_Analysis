const ethers = require("ethers");
//Fill in 'YourApiKeyToken','YOUR_NODE_URL','YOUR_PRIVATE_KEY'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

    // make an API call to the ABIs endpoint 
    const response = await fetch('https://api.polygonscan.com/api?module=contract&action=getabi&address=0xB45590E48a592bfFa077A6937B630f6B251bfE00&apikey=YourApiKeyToken');
    const data = await response.json();

    let abi = data.result;
    console.log(abi);

    // Requiring fs module in which
    // writeFile function is defined.
    const fs = require('fs')

    // creating a new Provider, and passing in our node URL
    const node = "YOUR_NODE_URL";
    const provider = new ethers.providers.JsonRpcProvider(node);

    // initiating a new Wallet, passing in our private key to sign transactions
    let privatekey = "YOUR_PRIVATE_KEY";
    let wallet = new ethers.Wallet(privatekey, provider);
   
    // print the wallet address
    console.log("Using wallet address " + wallet.address);

    // specifying the deployed contract address on Ropsten
    let contractaddress = "0x6FB29DD17fa6E27BD112Bc3A2D0b8dae597AeDA4";

    // initiating a new Contract
    let contract = new ethers.Contract(contractaddress, abi, wallet);

	//i should be greater than the number of VeTetu in existence
    for (let i = 0; i <= 1200; i++) {
        //wait for rate limit
        await sleep(500)

        // calling the "retrieve" function to read the stored value
        let lockedEnd = await contract.lockedEnd(i);
        let lockedDerivedAmount = await contract.lockedDerivedAmount(i);

        let lockedEndText = lockedEnd.toString()
        let lockedDerivedAmountText = lockedDerivedAmount.toString()

        console.log("Value stored in contract.lockedEnd is " + lockedEndText);
        console.log("Value stored in contract.lockedDerivedAmount is " + lockedDerivedAmountText);

        fs.appendFile('lockedEndList', lockedEndText + '\n', (err) => {
            // In case of a error throw err.
            if (err) throw err;
        })

        fs.appendFile('lockedDerivedAmountList', lockedDerivedAmountText + '\n', (err) => {
            // In case of a error throw err.
            if (err) throw err;
        })
    }

}

main();