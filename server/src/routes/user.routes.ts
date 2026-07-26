import { Router } from "express";
import {
  deleteUser,
  getUserByEmail,
  getUserById,
  getUsers,
  updateUser,
  updateUserPassword,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/authenticate.js";

const router = Router();

router.use(authMiddleware);

// TODO: Get all users
router.get("/", getUsers);

// TODO: Get user by id
router.get("/:id", getUserById);

// TODO: Get user by id
router.get("/by-email/:email", getUserByEmail);

// TODO: Update user password
router.patch("/password", updateUserPassword);

// TODO: Update user detail
router.patch("/:id", updateUser);

// TODO: Delete user
router.delete("/:id", deleteUser);

export default router;
