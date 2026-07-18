import type { Response, Request } from "express";
import { authenticateUser, createUser } from "../services/auth.service.js";
import { AppError } from "../utils/AppError.js";

// TODO: Register new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await createUser(username, email, password);

    res
      .status(201)
      .json({ id: user.id, email: user.email, username: user.username });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ msg: error.message });
      return;
    }
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: User Login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authenticateUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ msg: error.message });
      return;
    }
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
