import { Router } from "express";
import {
  createSession,
  deleteSession,
  endSession,
  getSessionById,
  getSessions,
  updateSessionTitle,
} from "../controllers/session.controller.js";
import { authMiddleware } from "../middleware/authenticate.js";

const router = Router();

router.use(authMiddleware);

// TODO: Get all sessions
router.get("/", getSessions);

// TODO: Get session by id
router.get("/", getSessionById);

// TODO: Start new session
router.post("/", createSession);

// TODO: Update session
router.patch("/:id", updateSessionTitle);

// TODO: End Session (set Endtime)
router.patch("/:id/end", endSession);

// TODO: Delete session
router.delete("/:id", deleteSession);

export default router;
