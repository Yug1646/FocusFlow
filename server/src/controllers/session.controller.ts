import type { Response, Request } from "express";
import {
  deleteSessionById,
  findSessionById,
  findSessions,
  startSession,
  stopSession,
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
  const start = await startSession(userId, title);
  res.status(201).json(start);
};

// TODO: Update Session
export const updateSession = async (req: Request, res: Response) => {
  const sessionId = Number(req.params.id);
  const title  = req.body;
  const updateResult = await updateSessionById(sessionId, title);
  res.status(200).json(updateResult);
};

// TODO: End Session
export const endSession = async (req: Request, res: Response) => {
  const sessionId = Number(req.params.id);
  const stop = await stopSession(sessionId);
  res.status(200).json(stop);
};

// TODO: Delete Session
export const deleteSession = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteSessionById(id);
  res.status(200).json(result);
};
