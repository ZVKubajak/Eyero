import { Router } from "express";
import {
  fetchHistoricalCryptoPrice,
  fetchCryptoData,
} from "../../controllers/api-controllers/cryptoController";

const router = Router();

router.get("/historical/:id", fetchHistoricalCryptoPrice);
router.get("/data/:id", fetchCryptoData);

export { router as cryptoRoutes };
