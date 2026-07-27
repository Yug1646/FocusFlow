import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

import { validate } from "../middleware/validate.js";

import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

// TODO: Register new user
router.post("/register", validate(registerSchema), registerUser);

// TODO: User login
router.post("/login", validate(loginSchema), loginUser);

export default router;
