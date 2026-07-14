import { Router } from "express";

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import sessionRoutes from "./session.routes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/users", userRoutes);
router.use("/api/sessions", sessionRoutes);

export default router;
