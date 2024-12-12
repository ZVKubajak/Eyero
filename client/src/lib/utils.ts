import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { StockData, StockApiResponse } from "@/interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const chart1HomepageDefaults = ["AAPL", "NVDA", "XOM"];
export const chart2HomepageDefaults = [
  "bitcoin",
  "ethereum",
  "ripple",
  "dogecoin",
];

export const transformStockData = (data: StockApiResponse): StockData[] => {
  const timeSeries = data["Time Series (Daily)"];

  if (!timeSeries) return [];

  return Object.entries(timeSeries).map(([date, values]) => ({
    date,
    open: parseFloat(values["1. open"]),
    high: parseFloat(values["2. high"]),
    low: parseFloat(values["3. low"]),
    close: parseFloat(values["4. close"]),
    volume: parseInt(values["5. volume"], 10),
  }));
};

export const formatPrice = (price: number) => {
  const formattedPrice = (Math.round(price * 100) / 100).toFixed(2);
  return formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
