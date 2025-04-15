const { createPublicClient, http } = require("viem");
const YourToken = require("../abis/YourTokenABI.json"); // ND‼️update here to your token YourTokenABI name

// if using base
const CHAIN_NODE_URL =
  "https://api.developer.coinbase.com/rpc/v1/base/-{Your-developer-key}"; // add your chain RPC
const TOKEN_ADDRESS = "0x000000000000000000000000000000000000000000"; // ND‼️ update here to your token contract
const client = createPublicClient({ transport: http(CHAIN_NODE_URL) });
const TOKEN_ABI = YourToken;

module.exports = {
  CHAIN_NODE_URL,
  TOKEN_ADDRESS,
  client,
  TOKEN_ABI,
};
