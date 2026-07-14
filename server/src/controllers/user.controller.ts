import type { Request, Response } from "express";
import { findUserById } from "../services/user.service.js";

// TODO: Get all users
export const getUsers = (req: Request, res: Response) => {
  try {
    res.status(200).json({ msg: "Users List" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: Get user by id
export const getUserById = (req: Request, res: Response) => {
  try {
    const findUser = findUserById(Number(req.params.id));
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: Update user details
export const updateUser = (req: Request, res: Response) => {
  try {
    const findUser = findUserById(Number(req.params.id));

    //! UPDATE USER FUNCTION

    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: Delete user
export const deleteUser = (req: Request, res: Response) => {
  try {
    const findUser = findUserById(Number(req.params.id));

    //! DELETE USER FUNCTION

    res.status(200).json({ msg: "User deleted successfully !" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};
