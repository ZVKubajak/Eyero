import dotenv from "dotenv";

dotenv.config();

// Stock API Config
export const alphaVConfig = {
  alphaVApiKey: process.env.ALPHAV_API_KEY || "",
  baseUrl: "https://www.alphavantage.co/query",
};

// CoinGecko is a public API, so it does not need an API key.
export const coingeckoBaseURL = "https://api.coingecko.com/api/v3";

// News API Config
export const newsapiConfig = {
  newsapiApiKey: process.env.NEWS_API_KEY || "",
  baseUrl: "https://newsapi.org/v2",
};
