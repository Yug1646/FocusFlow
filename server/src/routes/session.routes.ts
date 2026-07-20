import { Router } from "express";
import {
  createSession,
  deleteSession,
  endSession,
  getSessionById,
  getSessions,
  updateSession,
} from "../controllers/session.controller.js";

const router = Router();

// TODO: Get all sessions
router.get("/", getSessions);

// TODO: Get session by id
router.get("/:id", getSessionById);

// TODO: Start new sessiom
router.post("/", createSession);

// TODO: Update session
router.patch("/:id", updateSession);

// TODO: End Session (set Endtime)
router.get("/end/:id", endSession);

// TODO: Delete session
router.delete("/:id", deleteSession);

export default router;  