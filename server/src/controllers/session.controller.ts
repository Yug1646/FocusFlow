import type { Response, Request } from "express";
import { findSessionById } from "../services/session.service.js";

// TODO: Get all sessions
export const getSessions = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Sessions" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error !" });
  }
};

// TODO: Get session by Id
export const getSessionById = (req: Request, res: Response) => {
  try {
    const findSession = findSessionById(Number(req.params.id));
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: Start a new Session
export const createSession = (req: Request, res: Response) => {
  try {
    const findSession = findSessionById(Number(req.params.id));
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: Update Session
export const updateSession = (req: Request, res: Response) => {
  try {
    const findSession = findSessionById(Number(req.params.id));
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: End Session
export const endSession = (req: Request, res: Response) => {
  try {
    const findSession = findSessionById(Number(req.params.id));
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: Delete Session
export const deleteSession = (req: Request, res: Response) => {
  try {
    const findSession = findSessionById(Number(req.params.id));
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
