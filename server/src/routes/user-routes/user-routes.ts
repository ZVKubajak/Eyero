import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
} from "../../controllers/user-controller";

const router = express.Router();

// GET ALL USERS | /users
router.get("/", getAllUsers);

// GET SINGLE USER | /users/:id
router.get("/:id", getUserById);

// POST USER | /users
router.post("/", createUser);

export { router as userRouter };
