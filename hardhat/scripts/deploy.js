const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://YOUR-METADATA-CID";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const it2004Contract = await ethers.getContractFactory("it2004");

  // deploy the contract
  const deployedit2004Contract = await it2004Contract.deploy(metadataURL);

  await deployedit2004Contract.deployed();

  // print the address of the deployed contract
  console.log("it2004 Contract Address:", deployedit2004Contract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });