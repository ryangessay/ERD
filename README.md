# Event-Registration-Database

A decentralized web application that allows users to sign up for events using their MetaMask wallet. Registration information is processed through a Solidity contract and recorded on the blockchain, enabling retrieval of user information at a later time.

### Getting Started

These instructions will get the project up and running on your local machine.

### Prerequisites

- **Ganache:** A local Ethereum blockchain for hosting Solidity contracts and MetaMask accounts.<br>
    [Download Ganache](https://trufflesuite.com/ganache/)

- **NodeJS:** An asynchronous event-driven JavaScript runtime necessary for handling blockchain transactions.<br>
    [Download NodeJS](https://nodejs.org/en)

- **Web3JS:** A library for interacting with Ethereum nodes and deployed contracts using HTTP.<br>
    [Web3JS CDN](https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min.js)

- **Truffle:** A development environment for deploying and testing dApps on the blockchain.<br>
    [Truffle Installation Guide](https://trufflesuite.com/docs/truffle/how-to/install/)

- **MetaMask:** A browser extension for connecting accounts with the blockchain.<br>
    [Download MetaMask](https://metamask.io/download/)

### Installation

1. Download and Install Ganache, NodeJS and MetaMask

    - Note: Web3.js is included via the above URL, no local installation required

2. Clone the Repository

    - 'git clone https://github.com/ryangessay/ERD.git'

3. Navigate to the Project Directory 

    - 'cd path/to/the/ERD/project'

3. Install and Initialize Truffle

    - 'npm install -g truffle' (global install)
    - 'truffle init'

4. Compile the Contract

    - 'truffle compile'

5. Deploy the Contract to Ganache

    - 'truffle migrate --network development'

6. Install and Launch the HTTP-Server

    - 'npm install -g http-server' (global install)
    - 'http-server' (starts the server)

7. Access the Website

    - Open 'http://localhost:8080' in your browser

8. Import Ganache Accounts into MetaMask

    - Select 'http-server' as your network in MetaMask
    - Add account or hardware wallet
    - Import account
    - Use the private key from Ganache to import the account
    - Connect Account to the website

9. Use the DApp

    - You can now interact with the decentralized application

### Configuration

Modify files as needed for your environment:

1. Truffle Configuration: Update 'truffle-config.js' with your Ganache Server details.
 
    - host: "127.0.0.1",
    - port: 7545,

2. HTML Configuration: Update 'index.html' with the local path to your jquery.min.js file.

    - <script src="./node_modules/jquery/dist/jquery.min.js">

3. JavaScript Configuration: Update 'app.js' with the correct path for 'EventRegistration.json'

    - fetch('./build/contracts/EventRegistration.json')

### Usage

These instructions guide you through the key steps to use the Event Registration DApp. The application is designed to be straightforward and secure using your MetaMask wallet.

1. **Load the Website**
   - Open your web browser and navigate to `http://localhost:8080`. This will take you to the homepage of the Event Registration DApp.

2. **Connect Your MetaMask Account**
   - Click on the 'Connect Wallet' button and follow the prompts in the MetaMask extension to establish a connection.
   - This is essential for registering for an event as your registration details will be linked to your MetaMask wallet address.

3. **Fill in the Registration Form**
   - Enter your details in the name and email fields and select the type of event ticket you wish to purchase.
   - Ensure that all the information is correct. This information will be stored on the blockchain and associated with your wallet address.

4. **Submit Your Registration Information**
   - Click the 'Submit' button to register. 
   - Your information will be processed and securely stored on the Ethereum blockchain.

5. **View Your Registration Information**
   - To view or verify your registration details, click on the 'My Registration Information' button. 
   - This will retrieve your registration details from the blockchain and display them on the screen.

### Technologies Used

- Solidity, HTML, CSS
- JavaScript, NodeJS, Web3JS
- Truffle, Ganache, MetaMask

### Contact Information

- ryangessay99@gmail.com