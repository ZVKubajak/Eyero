import axios from "axios";
import { coingeckoBaseURL } from "../../config/config";

export const getHistoricalCryptoPrice = async (id: string) => {
  try {
    const response = await axios.get(
      `${coingeckoBaseURL}/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: "max",
          interval: "daily",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${id}:`, error);
    throw error;
  }
};
