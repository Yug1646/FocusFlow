import type { Response, Request } from "express";
import {
  deleteSessionById,
  findSessionById,
  startSession,
  endSessionById,
  updateSessionById,
  findSessionByUserId,
} from "../services/session.service.js";

// TODO: Get all sessions of Current User
export const getSessions = async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const sessions = await findSessionByUserId(userId);
  res.status(200).json(sessions);
};

// TODO: Get session by Id
export const getSessionById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const session = await findSessionById(id);
  res.status(200).json(session);
};

// TODO: Start a new Session
export const createSession = async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const { title } = req.body;
  const session = await startSession(userId, title);
  res.status(201).json(session);
};

// TODO: Update Session
export const updateSession = async (req: Request, res: Response) => {
  const sessionId = Number(req.params.id);
  const { title } = req.body;
  const result = await updateSessionById(sessionId, { title });
  res.status(200).json(result);
};

// TODO: End Session
export const endSession = async (req: Request, res: Response) => {
  const sessionId = Number(req.params.id);
  const result = await endSessionById(sessionId);
  res.status(200).json(result);
};

// TODO: Delete Session
export const deleteSession = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteSessionById(id);
  res.status(200).json(result);
};
