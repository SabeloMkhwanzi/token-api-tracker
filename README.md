### COINMARKETCAP or COINGECKO Token API metrics made simple with express deployed on vercel

To list your token on CoinMarketCap and CoinGecko, you need an API endpoint that provides the total supply and circulating supply. This ensures accurate tracking of your token’s metrics while boosting its visibility in the crypto market. Here’s a simple solution.

what you need to utilize this API:

1. Deployed token contract
2. Token ABI
3. Chain RPC eg Infura
4. Token address
5. Geckoterminal URL with your token address and chain eg. (https://api.geckoterminal.com/api/v2/simple/networks/ethereum/token_price/ 0x000000000000000000000000000000000000000000)
6. Than deploy this API on vercel

### Token API Documentation

### Overview

API provides endpoints to retrieve various data points about the token, such as total supply, circulating supply, market cap, fully diluted valuation (FDV), and token price. This API is built using Node.js, Express, and Viem, with data fetched from the blockchain and external API sources.

### Project Structure

- **app.js:** Main application file setting up middleware and routes.
- **api.js:** Defines the routes for API endpoints.
- **controllers/tokenController.js:** Handles the logic for each endpoint.
- **services/tokenService.js:** Contains functions to fetch data from blockchain and external sources.
- **fetchApiPrice.js:** Fetches token price from an external API.
- **config.js: Contains** configuration constants.
- **middlewares.js:** Middleware functions for error handling and 404 responses.
- **test/:** Contains test files for the API.
- **abis/:** Contains token abis.

```css
yourToken-price-api/
├── src/
│   ├── api.js
│   ├── app.js
│   ├── controllers/
│   │   └── tokenController.js
│   ├── middlewares.js
│   ├── services/
│   │   ├── fetchApiPrice.js
│   │   └── tokenService.js
│   └── index.js
|   └── middlewares.js
|   └── config.js
├── abis/
│   └── Token.json
├── test/
│   └── api.test.js
|   └── app.test.js
└── package.json
```

### Usage examples for the API

The API has the following endpoints:

- Get Total Supply
- Endpoint: /api/v1/totalSupply
- Method: GET
- Response:

```json
{
  "totalSupply": 30000000
}
```

- Get Circulating Supply
- Endpoint: /api/v1/circulatingSupply
- Method: GET
- Response:

```json
{
  "circulatingSupply": 6000000
}
```

- Get Market Cap
- Endpoint: /api/v1/marketCap
- Method: GET
- Response:

```json
{
  "marketCap": 2000000
}
```

- Get FDV (Fully Diluted Valuation)
- Endpoint: /api/v1/fdv
- Method: GET
- Response:

```json
{
  "fdv": 299999900
}
```

- Get Token Price
- Endpoint: /api/v1/tokenPrice
- Method: GET
- Response:

```json
{
  "tokenPrice": 0.3239
}
```

- Get Combined Token Data
- Endpoint: /api/v1/yourTokenData
- Method: GET
- Response:

```json
{
  "totalSupply": 30000000,
  "circulatingSupply": 6000000,
  "marketCap": 2000000,
  "fdv": 299999900,
  "tokenPrice": 0.3239
}
```

Includes API Server utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [jest](https://www.npmjs.com/package/jest)
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Development

```
npm run dev
```

#

### ND‼️The following files are included to be updated:

- **abis/:** Contains token abis.
- **fetchApiPrice.js:** Fetches token price from an external API.
- **services/tokenService.js:** Contains functions to fetch data from blockchain and external sources.
- **config.js: Contains** configuration constants.
#
