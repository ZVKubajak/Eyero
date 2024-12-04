import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../../controllers/user-controller";

const router = express.Router();

// GET ALL USERS | /users
router.get("/", getAllUsers);

// GET SINGLE USER | /users/:id
router.get("/:id", getUserById);

// POST USER | /users
router.post("/", createUser);

// PUT USER | /users/:id
router.put("/:id", updateUser);

// DELETE USER | /users/:id
router.delete("/:id", deleteUser);

export { router as userRouter };
