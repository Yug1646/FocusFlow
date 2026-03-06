// * ----- PACKAGES -----
import { Router } from "express";

// *? ----- FUNCTIONS -----
import { sessions } from "../utils/data.js";
import {
  findSessionbyIndex,
  findSessionbyUserId,
  validateSessionId,
} from "../utils/middleware.js";

const router = Router();

router.get("/api/sessions", (req, res) => {
  return res.status(200).json(sessions);
});

router.post("/api/users/:userId/sessions", findSessionbyIndex, (req, res) => {
  const { userId } = req;
  const session = {
    id: sessions.length + 1,
    userId,
    startTime: new Date(),
    endTime: null,
    duration: null,
  };
  sessions.push(session);
  res.status(201).json(session);
});

router.post("/api/sessions/:id/end", validateSessionId, (req, res) => {
  const session = req.session;
  if (session.endTime !== null) {
    return res.status(400).json({
      message: "Session already ended",
    });
  }
  session.endTime = new Date();
  session.duration = (session.endTime - session.startTime) / 1000; // seconds
  res.status(200).json(session);
});

router.delete(
  "/api/users/:userId/sessions/:id",
  findSessionbyUserId,
  (req, res) => {
    const { sessionIndex } = req;
    sessions.splice(sessionIndex, 1);
    res.status(200).json({
      message: "Session deleted successfully",
    });
  },
);

export default router;
