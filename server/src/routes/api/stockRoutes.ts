import { Router } from "express";
import {
  fetchCurrentStockData,
  fetchHistoricalStockData,
} from "../../controllers/api-controllers/stockController";

const router = Router();

router.get("/current/:ticker", fetchCurrentStockData);
router.get("/historical/:ticker", fetchHistoricalStockData);

export { router as stockRoutes };
