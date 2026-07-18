import type { Response, Request } from "express";
import { authenticateUser, createUser } from "../services/auth.service.js";

// TODO: Register new user
export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const result = await createUser(username, email, password);
  res.status(201).json(result);
};

// TODO: User Login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await authenticateUser(email, password);
  res.status(200).json(result);
};
