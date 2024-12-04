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

    const stockResults = apiData.results.map((result: any) => ({
      currentPrice: result.c,
      priceChange: result.d,
      percentChange: result.dp,
      highPrice: result.h,
      lowPrice: result.l,
      openPrice: result.o,
      previousClosePrice: result.pc,
    }));

    console.log(stockResults);
    return stockResults;
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    throw error;
  }
};
