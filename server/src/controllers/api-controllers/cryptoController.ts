import { Request, Response } from "express";
import { getHistoricalCryptoPrice } from "../../services/cryptos/CHistoricalService";
import { getCryptoData } from "../../services/cryptos/CDataService";

export const fetchHistoricalCryptoPrice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const historicalCryptoPrice = await getHistoricalCryptoPrice(id);
    res.json(historicalCryptoPrice);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch historical crypto price." });
  }
};

export const fetchCryptoData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const cryptoData = await getCryptoData(id);
    res.json(cryptoData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch crypto data." });
  }
};
