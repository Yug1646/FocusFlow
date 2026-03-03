import { Router } from "express";

import { users } from "../utils/data.js";
import { findUserbyIndex } from "../utils/middleware.js";

const router = Router();

router.get("/api/users", (req, res) => {
  return res.status(200).json(users);
});

router.get("/api/users/:id", findUserbyIndex, (req, res) => {
  const { userIndex } = req;
  return res.status(200).json(users[userIndex]);
});

router.post("/api/users", (req, res) => {
  const { body } = req;
  const newUser = { id: users.length + 1, ...body };
  users.push(newUser);
  return res.status(201).json(newUser);
});

router.delete("/api/users/:id", findUserbyIndex, (req, res) => {
  const { userIndex } = req;
  users.splice(userIndex, 1);
  return res.status(200).json({ message: "User deleted successfully !!!" });
});

export default router;
