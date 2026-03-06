import { Router } from "express";

import userRouter from "./users.js";
import sessionsRouter from "./sessions.js";

const router = Router();

router.use(userRouter);
router.use(sessionsRouter);

export default router;
