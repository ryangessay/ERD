//Initializes Web3 and connection to the smart contract on Ganache
//Loads contract, listens for Submit button to be hit
//Sends info to register function of the smart contract

//HTML connection with Web3
const Web3 = window.Web3;
const web3 = new Web3(window.ethereum);

// Store contract instance after it is fetched
let contract;

//Store the connected MetaMask account
let connectedAccount;


// Load your contract ABI and address
fetch('./build/contracts/EventRegistration.json')
  .then(response => response.json())
  .then(contractData => {
    const contractABI = contractData.abi;
    const contractAddress = contractData.networks['5777'].address; // '5777' is the network ID for Ganache
    contract = new web3.eth.Contract(contractABI, contractAddress);

    setupEventListeners();
  })
  .catch(error => console.error('Could not fetch contract data:', error));


//MetaMask connection
if (typeof window.ethereum !== 'undefined') {
  const connectWalletButton = document.getElementById('connect-wallet');

  connectWalletButton.addEventListener('click', async () => {
    try {
      // Request access to Ethereum accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Once connected, you can access the user's accounts
      const accounts = await web3.eth.getAccounts();
      connectedAccount = accounts[0];
      console.log(`Connected with address: ${connectedAccount}`);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  });
} else {
  console.error('MetaMask is not installed.');
}



function setupEventListeners() {


// Add event listeners to your HTML elements to trigger interactions with the contract
document.getElementById('submit-button').addEventListener('click', () => {
  
  //Check that MetaMask account is connected
  if(!connectedAccount) {
    console.error('Please connect your MetaMask account!');
    return;
  }

  // Get user input from HTML form
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const ticketType = parseInt(document.querySelector('input[name="ticketType"]:checked').value, 10);

  //Send form data to the contract's 'register' function
  contract.methods
    .register(firstName, lastName, email, ticketType)
    .send({ from: connectedAccount }) // Replace with your Ganache account address
    .on('transactionHash', (hash) => {
      // Transaction sent
      console.log('Transaction Hash:', hash);
    })
    .on('receipt', (receipt) => {
      // Transaction confirmed
      console.log('Transaction Receipt:', receipt);
    })
    .on('error', (error) => {
      // Transaction failed
      console.error('Transaction Error:', error);
    });
});



//Retrieve registration information for the connected wallet
document.getElementById('get-info-button').addEventListener('click', async () => {
  
  if (!connectedAccount) {
    console.error('Please connect your MetaMask account!');
    return;
  }

  try {
    const attendeeInfo = await contract.methods.getAttendeeInfo().call({ from: connectedAccount});
    // Now display this information on your webpage:

    const displayInfo = `First Name: ${attendeeInfo.firstName}\n` +
    `Last Name: ${attendeeInfo.lastName}\n` +
    `Email Address: ${attendeeInfo.email}\n` +
    `Ticket Type: ${attendeeInfo.ticketType}`;

    document.getElementById('attendee-info').innerText = displayInfo;
    console.log(displayInfo);
  } catch (error) {
    console.error('Error fetching attendee info:', error);
  }
});
}


