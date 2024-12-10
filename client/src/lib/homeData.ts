import { StockData } from "@/interfaces";

export const fetchHomepageStockData = async (
  ticker: string
): Promise<StockData[]> => {
  const transformStockData = (data: any): StockData[] => {
    const timeSeries = data["Time Series (Daily)"];

    if (!timeSeries) return [];

    return Object.entries(timeSeries).map(([date, values]: [string, any]) => ({
      date,
      open: parseFloat(values["1. open"]),
      high: parseFloat(values["2. high"]),
      low: parseFloat(values["3. low"]),
      close: parseFloat(values["4. close"]),
      volume: parseInt(values["5. volume"], 10),
    }));
  };

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
