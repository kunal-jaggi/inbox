const assert = require('assert');
const ganache = require('ganache-cli');

//import Structure
const Web3 = require('web3');

//instance of the Structure is used to connect to an Ether network, setup a provider
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

//setup
beforeEach(async () => {
  //Get a list of all accounts, returns a promise
  accounts = await web3.eth.getAccounts();

  //Use one of those accounts to deploy the contract
  //Step 1 - grab the bytecode
  //Step 2 -
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi there']
    })
    .send({ from: accounts[0], gas: '1000000' });
});
//const { interface, bytecode } = require('../compile');

describe('Inbox', () => {
  it('deploys a contract', () => {
    //console.log(inbox);
  })
});
