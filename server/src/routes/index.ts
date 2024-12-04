import { Router } from "express";
import stockRoutes from "./api/stockRoutes";
import userRouter from "./user-routes/index";

const router = Router();

router.use("/stocks", stockRoutes);
router.use("/users", userRouter);

export default router;
