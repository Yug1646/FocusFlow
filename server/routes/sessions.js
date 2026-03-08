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

  const sessionDate = new Date().toDateString();

  const hasActivationSession = sessions.some(
    (s) => s.userId === userId && s.endTime === null,
  );

  if (hasActivationSession)
    return res.status(400).json({
      message: "You already have an active focus session, Please end it first",
    });

  const session = {
    id: sessions.length + 1,
    userId,
    sessionDate,
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

/*
  TODO: NEXT FEATURES 
  
  * 1. Daily Summary API
    ! Total Sessions: 4
    ! Total Focus Time: 3h 20m

  * 2. Session History
    ? Today
      ! Backend Study – 1h 30m
      ! Gym – 45m

    ? Yesterday
      ! College Work – 2h

  * 3. Longest Session
      ! Longest session
      ! Average focus time
      ! Total sessions
*/