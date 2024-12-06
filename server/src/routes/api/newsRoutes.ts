import { Router } from "express";
import { fetchNewsData } from "../../controllers/api-controllers/newsController";

const router = Router();

router.get("/:query", fetchNewsData);

export { router as newsRoutes }