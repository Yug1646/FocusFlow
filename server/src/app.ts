import express from "express";
import type { Request, Response } from "express";
import router from "./routes/routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to FocusFlow!" });
});

export default app;
