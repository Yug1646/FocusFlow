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
import { validate } from "../middleware/validate.js";

import {
  changePasswordSchema,
  updateUserSchema,
} from "../schemas/user.schema.js";

const router = Router();

router.use(authMiddleware);

// TODO: Get all users
router.get("/", getUsers);

// TODO: Get user by id
router.get("/:id", getUserById);

// TODO: Get user by id
router.get("/by-email/:email", getUserByEmail);

// TODO: Update user password
router.patch("/password", validate(changePasswordSchema), updateUserPassword);

// TODO: Update user detail
router.patch("/:id", validate(updateUserSchema), updateUser);

// TODO: Delete user
router.delete("/:id", deleteUser);

export default router;
