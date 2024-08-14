# LearnChain - Blockchain Based E-Learning Platform

Tech Stack:

- Node.js
- React
- Bootstrap
- Express
- MongoDB
- Solidity
- Web3.js
- Truffle
- Ganache
- Metamask


## How to Run

First, ensure you have the necessary tools installed: Metamask Chrome extension, Truffle CLI, and Ganache GUI.

Open Ganache and create a new workspace.

Access Truffle CLI and navigate to the specified client directory.

If the Migrations folder already exists in this repository, execute "truffle migrate --reset"; otherwise, use "truffle compile".

Confirm the deployment of contracts on host 127.0.0.1, port 8545 (default) either by checking the Contracts tab or running "truffle networks" in the CLI.

Launch the Chrome browser, activate the Metamask extension, and add a new RPC network in the settings. Import your ten accounts using the 48 phrase mnemonic code from Ganache.

Start the MongoDB and Express Server:

Open a new terminal and run "mongod" to initiate the daemon. >>>>>mongod --dbpath "D:\MTU Sem 3\Code\July17\Databasefiles"

In another terminal, navigate to the server directory and run "npm start". You should see confirmation messages like "Server up and running on port: {port}" and "Mongoose Connected Woohoo".
Launch the React App:

Open a new terminal, navigate to the client directory, and run "npm start".
You should now see the homepage displayed.
