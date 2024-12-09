import { Router } from "express";
import {
  fetchCurrentStockData,
  fetchHistoricalStockData,
  fetchCompactStockData,
} from "../../controllers/api-controllers/stockController";

const router = Router();

router.get("/current/:ticker", fetchCurrentStockData);
router.get("/historical/:ticker", fetchHistoricalStockData);
router.get("/home", fetchCompactStockData);

export { router as stockRoutes };
