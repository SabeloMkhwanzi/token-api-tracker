const express = require("express");
const {
  getTotalSupply,
  getCirculatingSupply,
  getMarketCap,
  getFDV,
  getTokenPrice,
  getYourTokenData,
} = require("./controllers/tokenController");

const router = express.Router();

// Define routes for each endpoint
router.get("/totalSupply", getTotalSupply);
router.get("/circulatingSupply", getCirculatingSupply);
router.get("/marketCap", getMarketCap);
router.get("/fdv", getFDV);
router.get("/tokenPrice", getTokenPrice);
router.get("/yourTokenData", getYourTokenData); // Endpoint for combined data

module.exports = router;
