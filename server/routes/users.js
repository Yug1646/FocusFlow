// * ----- PACKAGES -----
import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";

// *? ----- FUNCTION -----
import { users } from "../utils/data.js";
import { findUserbyIndex } from "../utils/middleware.js";
import { createUserValidationSchema } from "../utils/validationSchemas.js";

const router = Router();

router.get("/api/users", (req, res) => {
  return res.status(200).json(users);
});

router.get("/api/users/:id", findUserbyIndex, (req, res) => {
  const { userIndex } = req;
  return res.status(200).json(users[userIndex]);
});

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const cleanData = matchedData(req);

    const newUser = { id: users.length + 1, ...cleanData };
    users.push(newUser);
    return res.status(201).json(newUser);
  },
);

router.delete("/api/users/:id", findUserbyIndex, (req, res) => {
  const { userIndex } = req;
  users.splice(userIndex, 1);
  return res.status(200).json({ message: "User deleted successfully !!!" });
});

export default router;
