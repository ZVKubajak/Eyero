import axios from "axios";
import { finnhubConfig } from "../../config/config";

export const getCurrentStockData = async (ticker: string) => {
  try {
    const response = await axios.get(`${finnhubConfig.baseUrl}/quote`, {
      params: {
        symbol: ticker,
        token: finnhubConfig.finnhubApiKey,
      },
    });

    const apiData = response.data;

    const timestamp = apiData.t;
    const formattedDate = new Date(timestamp * 1000).toISOString();

    const stockResults = {
      currentPrice: apiData.c,
      priceChange: apiData.d,
      percentChange: apiData.dp,
      highPrice: apiData.h,
      lowPrice: apiData.l,
      openPrice: apiData.o,
      previousClosedPrice: apiData.pc,
      time: formattedDate,
    };

    return stockResults;
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    throw error;
  }
};
