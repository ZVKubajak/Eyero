import dotenv from "dotenv";

dotenv.config();

export const finnhubConfig = {
  finnhubApiKey: process.env.FINNHUB_API_KEY || "",
  baseUrl: "https://finnhub.io/api/v1",
};

// CoinGecko is a public API, so it does not need an API key.
export const coingeckoBaseURL = "https://api.coingecko.com/api/v3";
