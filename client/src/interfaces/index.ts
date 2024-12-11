export interface InewsItem {
  name: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

interface TimeSeriesDaily {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

export interface StockApiResponse {
  "Time Series (Daily)": TimeSeriesDaily;
}

export interface CryptoData {
  prices: [];
  marketCaps: [];
  totalVolumes: [];
}
