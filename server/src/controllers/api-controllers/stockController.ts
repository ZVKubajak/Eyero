import { Request, Response } from "express";
import { getCurrentStockData } from "../../services/stocks/currentSService";
import { getHistoricalStockData } from "../../services/stocks/SHistoricalService";

export const fetchCurrentStockData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ticker } = req.params;

  try {
    const currentStockData = await getCurrentStockData(ticker);
    res.json(currentStockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch current stock data." });
  }
};

export const fetchHistoricalStockData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { ticker } = req.params;

  try {
    const historicalStockData = await getHistoricalStockData(ticker);
    res.json(historicalStockData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch historical stock data." });
  }
};
