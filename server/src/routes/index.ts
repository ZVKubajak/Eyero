import { Router } from 'express';
import apiRouter from "./api/index.js";
import userRouter from "./user-routes/index.js";

const router = Router();

router.use("/api", apiRouter);

router.use("/users", userRouter);

export default router;