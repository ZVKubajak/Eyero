import { Router } from "express";
import {
  fetchCurrentCryptoPrice,
  fetchCryptoData,
} from "../../controllers/api-controllers/cryptoController";

const router = Router();

router.get("/price/:id", fetchCurrentCryptoPrice);
router.get("/data/:id", fetchCryptoData);

export { router as cryptoRoutes };
