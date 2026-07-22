import type { Response, Request } from "express";
import {
  deleteSessionById,
  findSessionById,
  findSessions,
  startSession,
  endSessionById,
  updateSessionById,
} from "../services/session.service.js";

// TODO: Get all sessions
export const getSessions = async (req: Request, res: Response) => {
  const sessions = await findSessions();
  res.status(200).json(sessions);
};

// TODO: Get session by Id
export const getSessionById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const session = await findSessionById(id);
  res.status(200).json(session);
};

export const getSessionByUserId = async (req: Request, res: Response) => {};

// TODO: Start a new Session
export const createSession = async (req: Request, res: Response) => {
  // const userId = Number(req.params.id);
  const userId = 2;
  const { title } = req.body;
  const session = await startSession(userId, title);
  res.status(201).json(session);
};

// TODO: Update Session
export const updateSession = async (req: Request, res: Response) => {
  const sessionId = Number(req.params.id);
  const {title} = req.body;
  const result = await updateSessionById(sessionId, {title});
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
