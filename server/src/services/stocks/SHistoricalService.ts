import axios from "axios";
import { alphaVConfig } from "../../config/config";

export const getHistoricalStockData = async (ticker: string) => {
  try {
    const response = await axios.get(`${alphaVConfig.baseUrl}`, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: ticker,
        outputsize: "full",
        apikey: alphaVConfig.alphaVApiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${ticker}`, error);
    throw error;
  }
};
