const {
  fetchTotalSupply,
  fetchCirculatingSupply,
  fetchMarketCap,
  fetchFDV,
  fetchTokenPrice,
} = require("../services/tokenService");

// Controller to handle fetching total supply
const getTotalSupply = async (req, res) => {
  try {
    const totalSupply = await fetchTotalSupply();
    res.json({ totalSupply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching circulating supply
const getCirculatingSupply = async (req, res) => {
  try {
    const circulatingSupply = await fetchCirculatingSupply();
    res.json({ circulatingSupply });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching market cap
const getMarketCap = async (req, res) => {
  try {
    const marketCap = await fetchMarketCap();
    res.json({ marketCap });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching FDV (Fully Diluted Valuation)
const getFDV = async (req, res) => {
  try {
    const fdv = await fetchFDV();
    res.json({ fdv });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching token price
const getTokenPrice = async (req, res) => {
  try {
    const tokenPrice = await fetchTokenPrice();
    res.json({ tokenPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching all token data
const getYourTokenData = async (req, res) => {
  try {
    const totalSupply = await fetchTotalSupply();
    const circulatingSupply = await fetchCirculatingSupply();
    const marketCap = await fetchMarketCap();
    const fdv = await fetchFDV();
    const tokenPrice = await fetchTokenPrice();
    res.json({ totalSupply, circulatingSupply, marketCap, fdv, tokenPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTotalSupply,
  getCirculatingSupply,
  getMarketCap,
  getFDV,
  getTokenPrice,
  getYourTokenData,
};
