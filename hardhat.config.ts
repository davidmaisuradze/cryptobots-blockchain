import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   // Infura
    //   // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [privateKey]
    // },
    // matic: {
    //   // Infura
    //   // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
    //   url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [privateKey]
    // }
    goerli: {
      url: "https://goerli.infura.io/v3/78dfe734697046818bd832da3312ee34" || "",
      accounts: [
        "1bc6b8bebe044ca265cdd421214dfe60e9b262c7e430db6586bd515376220310",
      ],
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
