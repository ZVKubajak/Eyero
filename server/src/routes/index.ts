import { Router } from "express";
import { stockRoutes } from "./api/stockRoutes.js";
import { cryptoRoutes } from "./api/cryptoRoutes.js";
import { newsRoutes } from "./api/newsRoutes.js";
import userRouter from "./user-routes/index.js";

const router = Router();

router.use("/stocks", stockRoutes);
router.use("/crypto", cryptoRoutes);
router.use("/news", newsRoutes);
router.use("/users", userRouter);

export default router;
