import express from "express";
import { Request, Response } from "express";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to FocusFlow!" });
});

export default app;
