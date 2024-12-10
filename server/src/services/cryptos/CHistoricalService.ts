import axios from "axios";
import { coingeckoBaseURL } from "../../config/config";

export const getHistoricalCryptoPrice = async (id: string) => {
  try {
    const response = await axios.get(
      `${coingeckoBaseURL}/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "usd",
          days: "365",
          interval: "daily",
        },
      }
    );

    const cryptoData = {
      prices: response.data.prices,
      marketCaps: response.data.market_caps,
      totalVolumes: response.data.total_volumes,
    };

    return cryptoData;
  } catch (error) {
    console.error(`Error fetching data for ${id}:`, error);
    throw error;
  }
};
