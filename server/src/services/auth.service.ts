//* ----- Auth Services -----
import jwt from "jsonwebtoken";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { AppError } from "../utils/AppError.js";
import { toAuthResponse, toUserResponse } from "../dto/user.dto.js";
import { comparePassword, hashPassword } from "../utils/password.js";

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

  const passwordHash = await hashPassword(password);

  const [created] = await db
    .insert(users)
    .values({ username, email, password: passwordHash })
    .returning();
  return toUserResponse(created);
};

//? User Login
export const authenticateUser = async (email: string, password: string) => {
  const findUser = await db.select().from(users).where(eq(users.email, email));

  if (findUser.length === 0) {
    throw new AppError(401,"Invalid credentials");
  }
  const [user] = findUser;
  const passwordIsValid = await comparePassword(password, user.password);

  if (!passwordIsValid) {
    throw new AppError(401,"Invalid credentials");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  return toAuthResponse(user, token);
};
