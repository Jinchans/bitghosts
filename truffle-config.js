require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {
  networks: {
    ganache_gui: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    ganache_cli: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://kovan.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 42,
      skipDryRun: true,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 4,
      skipDryRun: true,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 3,
      skipDryRun: true,
    },
    main: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://main.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 1,
    },
    ftm: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://rpcapi.fantom.network` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 470000000000, // 5 gwei
      network_id: 250,
    },
  },
  contracts_directory: "./src/backEnd/contracts/",
  contracts_build_directory: "./src/backEnd/abis/",
  migrations_directory: "./src/backEnd/migrations/",
  test_directory: "./src/backEnd/test/",
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
