import { Router } from "express";
import {
  fetchCurrentCryptoPrice,
  fetchHistoricalCryptoPrice,
  fetchCryptoData,
} from "../../controllers/api-controllers/cryptoController";

const router = Router();

router.get("/current/:id", fetchCurrentCryptoPrice);
router.get("/historical/:id", fetchHistoricalCryptoPrice);
router.get("/data/:id", fetchCryptoData);

export { router as cryptoRoutes };
