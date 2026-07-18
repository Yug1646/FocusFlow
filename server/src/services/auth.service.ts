//* ----- Auth Services -----

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { AppError } from "../utils/AppError.js";

//? Create new user
export const createUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existingUser.length > 0) {
    throw new AppError(409, "Email already registered");
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  const [created] = await db
    .insert(users)
    .values({ username, email, password: passwordHash })
    .returning();
  return created;
};

//? User Login
export const authenticateUser = async (email: string, password: string) => {
  const findUser = await db.select().from(users).where(eq(users.email, email));

  if (findUser.length === 0) {
    throw new AppError(404, "User not found");
  }
  const [user] = findUser;
  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    throw new AppError(404, "Invalid Password");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  return {
    token,
    user: { id: user.id, email: user.email, username: user.username },
  };
};
