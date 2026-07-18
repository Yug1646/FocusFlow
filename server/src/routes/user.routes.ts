import { Router } from "express";
import {
  deleteUser,
  getUserByEmail,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

// TODO: Get all users
router.get("/", getUsers);

// TODO: Get user by id
router.get("/:id", getUserById);

// TODO: Get user by id
router.get("/by-email/:email", getUserByEmail);

// TODO: Update user detail
router.patch("/:id", updateUser);

// TODO: Delete user
router.delete("/:id", deleteUser);

export default router;
