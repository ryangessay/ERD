# Event-Registration-Database

A web application that allows users to sign up for events using their MetaMask wallet. Registration information is processed through a Solidity contract and recorded on the blockchain, enabling retrieval of user information at a later time.

## Getting Started

These instructions will get the project up and running on your local machine.

## Prerequisites

Ganache: Local Ethereum blockchain used to host the Solidity contract and MetaMask accounts.

https://trufflesuite.com/ganache/

NodeJS: Asynchronous event-driven JavaScript runtime (needed to wait for blockchain transactions).

https://nodejs.org/en

Web3JS: Interact with an Ethereum node and the deployed contract using HTTP.

https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min.js

Truffle: Platform for building dApps on the blockchain. Deploy and test smart contracts. Hosts the HTTP server.

https://trufflesuite.com/docs/truffle/how-to/install/

MetaMask: Connects Ganache accounts into MetaMask and then over to the website.

https://metamask.io/download/

## Installation

1. Download and Install

Ganache, NodeJS & MetaMask
*Web3.js is brought in via the above URL, no local installation is needed*

2. Clone the Repository

git clone https://github.com/ryangessay/ERD.git

3. Navigate to the Directory 

cd path/to/the/ERD/project

3. Install and Initialize Truffle

npm install -g truffle (global install)
truffle init

4. Compile the Contract

truffle compile

5. Deploy the Contract to Ganache

truffle migrate --network development

6. Install the HTTP-Server

npm install -g http-server (global install)
http-server (activates the server)

7. Access the Website

In your browser, type: http://localhost:8080

8. Import Ganache Accounts into MetaMask

In MetaMask, select the http-server as your network
Select an account
Add account or hardware wallet
Import account
Grab the private key in Ganache (key symbol)
Enter your private key
Connect Account to the website

9. You should now be able to use the DApp

## Configuration

Potential modification to certain files

1. Modify truffle-config.js with your Ganache Server information
 
    *host: "127.0.0.1",*
    *port: 7545,*

2. Modify index.html (local path might need to be updated)

    Edit the src location to your local jquery.min.js file

    *<!-- Node.js -->*
    *<script src="./node_modules/jquery/dist/jquery.min.js">*

3. Modify app.js

    Edit the location for EventRegistration.json

    *// Fetch contract ABI and address, and initialize the contract*
    *fetch('./build/contracts/EventRegistration.json')*

## Usage

How to use the application or navigate through it.

## Technologies Used

- List of technologies, languages, and frameworks.

## Contributing

Instructions for how others can contribute to your project.

## License

State the license under which your project is released.

## Contact Information

Your contact information for support or queries.