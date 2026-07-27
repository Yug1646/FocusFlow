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
import { validate } from "../middleware/validate.js";

import {
  createSessionSchema,
  updateSessionSchema,
} from "../schemas/session.schema.js";

const router = Router();

router.use(authMiddleware);

// TODO: Get all sessions
router.get("/", getSessions);

// TODO: Get session by id
router.get("/:id", getSessionById);

// TODO: Start new session
router.post("/", validate(createSessionSchema), createSession);

// TODO: Update session
router.patch("/:id", validate(updateSessionSchema), updateSessionTitle);

// TODO: End Session (set Endtime)
router.patch("/:id/end", endSession);

// TODO: Delete session
router.delete("/:id", deleteSession);

export default router;
