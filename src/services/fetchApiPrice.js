const axios = require("axios");
const { TOKEN_ADDRESS } = require("../config");

// API endpoint and constants
const GECKO_API_URL = `https://api.geckoterminal.com/api/v2/simple/networks/ethereum/token_price/${TOKEN_ADDRESS}`; // update here to your token network

// Fetch token price from API
const fetchTokenPriceFromApi = async () => {
  try {
    const response = await axios.get(GECKO_API_URL);
    const price = response.data.data.attributes.token_prices[TOKEN_ADDRESS];
    return parseFloat(price);
  } catch (error) {
    console.error("Error fetching token price from API:", error);
    return 0;
  }
};

module.exports = fetchTokenPriceFromApi;
