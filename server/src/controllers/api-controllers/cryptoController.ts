import { Request, Response } from "express";
import { getCurrentCryptoPrice } from "../../services/cryptos/CPriceService";

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
