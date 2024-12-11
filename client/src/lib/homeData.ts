import { transformStockData } from "./utils";
import { StockData, CryptoData } from "@/interfaces";

export const fetchHomepageStockData = async (
  ticker: string
): Promise<StockData[]> => {
  try {
    const response = await fetch(`/routes/stocks/home/${ticker}`);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    return transformStockData(data);
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation: ",
      error
    );
    return [];
  }
};

export const fetchHomepageCryptoData = async (
  id: string
): Promise<CryptoData> => {
  try {
    const response = await fetch(`/routes/crypto/home/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(
      "There has been a problem with your fetch operation: ",
      error
    );
    return {} as CryptoData;
  }
};
