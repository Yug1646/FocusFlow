import type { Request, Response } from "express";

// TODO: Get all users
export const getUsers = (req: Request, res: Response) => {
  try {
    //! GET USERS SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: Get user by id
export const getUserById = (req: Request, res: Response) => {
  try {
    //! GET USER BY ID SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: Update user details
export const updateUser = (req: Request, res: Response) => {
  try {
    //! UPDATE USER SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: Delete user
export const deleteUser = (req: Request, res: Response) => {
  try {
    //! DELETE USER SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};
