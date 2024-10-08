require("@nomicfoundation/hardhat-toolbox");

require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    gasPrice: 21,
    noColors: true,
    // outputFile: 'gas-report.txt',
    showTimeSpent: true,
    // onlyCalledMethods: false,  // 这将包括未被调用的方法
    // coinmarketcap: 'YOUR-COINMARKETCAP-API-KEY',
    // outputFile: 'gas-report.txt'
  },
  networks: {
    hardhat: {
      gas: "auto",
      // gasLimit: 100000000,  // 增加到 100 million
      gasPrice: "auto",
      // blockGasLimit: 100000000,  // 增加到 100 million
    },
  },
  plugins: ["solidity-coverage"]
};
