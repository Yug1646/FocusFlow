import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ msg: err.message });
    return;
  }
  console.log(err); // log the real error for you
  res.status(500).json({ msg: "Internal server error" });
};
