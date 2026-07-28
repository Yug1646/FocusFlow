import type { Request, Response } from "express";
import {
  deleteUserById,
  findUsers,
  findUserById,
  updateUserById,
  changeUserPassword,
} from "../services/user.service.js";

// TODO: Get all users
export const getUsers = async (req: Request, res: Response) => {
  const users = await findUsers();
  res.status(200).json(users);
};

// TODO: Get user by id
export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await findUserById(id);
  res.status(200).json(user);
};

// TODO: Update user details
export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;

  const result = await updateUserById(id, data);
  res.status(200).json(result);
};

// TODO: Update user password
export const updateUserPassword = async (req: Request, res: Response) => {
  const userId = req.user!.userId;
  const { oldPassword, newPassword } = req.body;

  const result = await changeUserPassword(
    userId,
    oldPassword,
    newPassword,
  );
  res.status(200).json(result);
};

// TODO: Delete user
export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteUserById(id);
  res.status(200).json(result);
};
