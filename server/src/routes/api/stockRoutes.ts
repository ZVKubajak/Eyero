import { Router } from "express";
import { fetchCurrentStockData } from "../../controllers/api-controllers/stockController";

const router = Router();

router.get("/current/:ticker", fetchCurrentStockData);

export default router;
