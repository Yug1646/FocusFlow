import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = Router();

// TODO: Register new user
router.post("/register", registerUser);

// TODO: User login
router.post("/login", loginUser);

export default router;
