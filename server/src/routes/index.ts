import { Router } from "express";
import stockRoutes from "./api/index.js";
import userRouter from "./user-routes/index.js";

const router = Router();

router.use("/stocks", stockRoutes);
router.use("/users", userRouter);

export default router;
