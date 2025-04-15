const { client, TOKEN_ADDRESS, TOKEN_ABI } = require("../config");
const { formatUnits } = require("viem/utils");
const fetchApiPrice = require("./fetchApiPrice");

// Fetch total supply from the blockchain
const fetchTotalSupply = async () => {
  try {
    const totalSupply = await client.readContract({
      address: TOKEN_ADDRESS,
      abi: TOKEN_ABI,
      functionName: "totalSupply",
    });
    const totalSupplyInEther = formatUnits(totalSupply, 18);
    return parseFloat(totalSupplyInEther);
  } catch (error) {
    console.error("Error fetching total supply:", error);
    throw error;
  }
};

//  Fetch circulating supply by subtracting locked amounts from total supply - ND‼️ Please update as locked amounts change for your token
const fetchCirculatingSupply = async () => {
  try {
    const totalSupply = await fetchTotalSupply();
    const lockedAmounts = {
      Community: 1000000, // ND‼️ change here as your token supply
      Treasury: 1000000, // ND‼️ change here as your token supply
      Team: 1000000, // ND‼️change here as your token supply
    };
    const totalLockedSupply = Object.values(lockedAmounts).reduce(
      (acc, value) => acc + value,
      0
    );
    const circulatingSupply = totalSupply - totalLockedSupply;
    return circulatingSupply;
  } catch (error) {
    console.error("Error fetching circulating supply:", error);
    throw error;
  }
};

// Fetch market cap by multiplying circulating supply by token price
const fetchMarketCap = async () => {
  try {
    const circulatingSupply = await fetchCirculatingSupply();
    const tokenPrice = await fetchApiPrice();
    const marketCap = circulatingSupply * tokenPrice;
    return marketCap;
  } catch (error) {
    console.error("Error fetching market cap:", error);
    throw error;
  }
};

// Fetch FDV (Fully Diluted Valuation) by multiplying total supply by token price
const fetchFDV = async () => {
  try {
    const totalSupply = await fetchTotalSupply();
    const tokenPrice = await fetchApiPrice();
    const fdv = totalSupply * tokenPrice;
    return fdv;
  } catch (error) {
    console.error("Error fetching FDV:", error);
    throw error;
  }
};

// Fetch token price from API
const fetchTokenPrice = async () => {
  try {
    return await fetchApiPrice();
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
};

module.exports = {
  fetchTotalSupply,
  fetchCirculatingSupply,
  fetchMarketCap,
  fetchFDV,
  fetchTokenPrice,
};
