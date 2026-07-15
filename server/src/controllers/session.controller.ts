import type { Response, Request } from "express";

// TODO: Get all sessions
export const getSessions = (req: Request, res: Response) => {
  try {
    //! GET SESSIONS SERVICE FUNCTION
    res.status(200).json({ msg: "Sessions" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error !" });
  }
};

// TODO: Get session by Id
export const getSessionById = (req: Request, res: Response) => {
  try {
    //! GET SESSION BY ID SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getSessionByUserId = (req: Request, res: Response) => {
  try {
    //! GET SESSION BY USER ID SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: Start a new Session
export const createSession = (req: Request, res: Response) => {
  try {
    //! CREATE SESSION SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: Update Session
export const updateSession = (req: Request, res: Response) => {
  try {
    //! UPDATE SESSION SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: End Session
export const endSession = (req: Request, res: Response) => {
  try {
    //! END SESSION SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

// TODO: Delete Session
export const deleteSession = (req: Request, res: Response) => {
  try {
    //! DELETE SESSION SERVICE FUNCTION
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
