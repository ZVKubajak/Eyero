import { Router } from "express";
import { fetchCurrentCryptoPrice } from "../../controllers/api-controllers/cryptoController";

const router = Router();

router.get("/current-price/:id", fetchCurrentCryptoPrice);

export { router as cryptoRoutes };
