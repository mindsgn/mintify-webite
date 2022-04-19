require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/jB0WfX78agp3KZ5RJt-Pt9jmCneex3pa",
      accounts: [privteKey]
    },
    mainnent: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/kpg6egfRaqyL4FlN2t9cD7XEs9jRdOWV",
      accounts: [privteKey]
    }
  },
  solidity: "0.8.4",
};
