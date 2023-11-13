// Web3 Initialization and Smart Contract Interaction
// Load Solidity contract
// Connect MetaMask Wallet
// Event Listener for Submit button & My Registration button
// Return Registration Info of the smart contract


// Initialize Web3 and connect to the Ethereum network
const Web3 = window.Web3;
const web3 = new Web3(window.ethereum);

// Store contract instance after it is fetched
let contract;

// Store the connected MetaMask account
let connectedAccount;


// Fetch contract ABI and address, and initialize the contract
fetch('./build/contracts/EventRegistration.json')
  .then(response => response.json())
  .then(contractData => {
    const contractABI = contractData.abi;
    const contractAddress = contractData.networks['5777'].address; // '5777' is the network ID for Ganache
    contract = new web3.eth.Contract(contractABI, contractAddress);

    setupEventListeners();
  })
  .catch(error => console.error('Could not fetch contract data:', error));


// MetaMask Connection
// Check if MetaMask connection is available
if (typeof window.ethereum !== 'undefined') {
  const connectWalletButton = document.getElementById('connect-wallet');

  // Event Listener for Connect Wallet button
  connectWalletButton.addEventListener('click', async () => {
    try {
      // Request access to the user's Ethereum account
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Retrieve and store the user's account
      const accounts = await web3.eth.getAccounts();
      connectedAccount = accounts[0];
      console.log(`Connected with address: ${connectedAccount}`);

      // Update attendee-info to reflect wallet connection
    document.getElementById('attendee-info').innerText = "Wallet connected!";
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  });
} else {
  console.error('MetaMask is not installed.');
}


// Set up event listeners for various interaction
function setupEventListeners() {

//Event listener for Submit button
document.getElementById('submit-button').addEventListener('click', async () => {
  
  //Check for MetaMask account connection
  if(!connectedAccount) {
    alert('Please connect your MetaMask wallet!')
    return;
  }

  try {
    // Check if user account is already registered
    const attendeeInfo = await contract.methods.getAttendeeInfo().call({ from: connectedAccount});

    if (attendeeInfo && attendeeInfo.firstName !== '') {
      // User is already registered; display their info
      alert('You have already registered!');

      document.getElementById('attendee-info').innerHTML = 
      `First Name: ${attendeeInfo.firstName}<br>` +
      `Last Name: ${attendeeInfo.lastName}<br>` +
      `Email: ${attendeeInfo.email}<br>` +
      `Ticket Type: ${attendeeInfo.ticketType}`;
    } else {
      // User has not registered; proceed

      // Fetch user input from HTML form
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const ticketType = parseInt(document.querySelector('input[name="ticketType"]:checked').value, 10);

      // Send HTML form data to the solidity contract's 'register' function
      contract.methods
        .register(firstName, lastName, email, ticketType)
        .send({ from: connectedAccount }) 
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
    }
  } catch (error) {
      console.error('Error fetching attendee info:', error);
  }
});


// Fetch registration information for the connected wallet
document.getElementById('get-info-button').addEventListener('click', async () => {
  
  // Check for MetaMask account connection
  if (!connectedAccount) {
    console.error('Please connect your MetaMask account!');
    return;
  }

  try {
    // Fetch registration information
    const attendeeInfo = await contract.methods.getAttendeeInfo().call({ from: connectedAccount});

    const displayInfo = `First Name: ${attendeeInfo.firstName}\n` +
    `Last Name: ${attendeeInfo.lastName}\n` +
    `Email: ${attendeeInfo.email}\n` +
    `Ticket Type: ${attendeeInfo.ticketType}`;

    document.getElementById('attendee-info').innerText = displayInfo;
    
    console.log(displayInfo);
  } catch (error) {
    console.error('Error fetching attendee info:', error);
  }
});
}


