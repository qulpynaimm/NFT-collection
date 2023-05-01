require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const GANACHE_HTTP_URL = "http://localhost:7545";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ganache: {
      url: GANACHE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
