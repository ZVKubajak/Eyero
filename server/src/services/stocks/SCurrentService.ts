import axios from "axios";
import { alphaVConfig } from "../../config/config";

export const getCurrentStockData = async (ticker: string) => {
  try {
    const response = await axios.get(`${alphaVConfig.baseUrl}`, {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: ticker,
        apikey: alphaVConfig.alphaVApiKey,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    throw error;
  }
};
