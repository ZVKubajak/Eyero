import { Request, Response } from "express";
import { getCurrentCryptoPrice } from "../../services/cryptos/CPriceService";
import { getCryptoData } from "../../services/cryptos/CDataService";

export const fetchCurrentCryptoPrice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const currentCryptoPrice = await getCurrentCryptoPrice(id);
    res.json(currentCryptoPrice);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch current crypto price." });
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
