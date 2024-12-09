import axios from "axios";
import { alphaVConfig } from "../../config/config";

export const getCompactStockData = async (ticker: string) => {
  try {
    const response = await axios.get(`${alphaVConfig.baseUrl}`, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: ticker,
        outputsize: "compact",
        apikey: alphaVConfig.alphaVApiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${ticker}`, error);
    throw error;
  }
};
