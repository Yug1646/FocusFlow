import type { Response, Request } from "express";

// TODO: Register new user
export const registerUser = (req: Request, res: Response) => {
  try {
    //! CREATE NEW USER SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
    console.log(error);
  }
};

// TODO: User Login
export const loginUser = (req: Request, res: Response) => {
  try {
    //! LOGIN USER SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
