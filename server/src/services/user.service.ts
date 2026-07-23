//* ----- User Services -----
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { toUserResponse } from "../dto/user.dto.js";
import { AppError } from "../utils/AppError.js";

//? GET All Users
export const findUsers = async () => {
  const result = await db.select().from(users);
  return result.map(toUserResponse);
};

//? GET User by id
export const findUserById = async (id: number) => {
  const result = await db.select().from(users).where(eq(users.id, id));
  if (result.length === 0) {
    throw new AppError(404, "User not found");
  }
  return toUserResponse(result[0]);
};

//? GET User by email
export const findUserByEmail = async (email: string) => {
  const result = await db.select().from(users).where(eq(users.email, email));
  if (result.length === 0) {
    throw new AppError(404, "User not found");
  }
  return toUserResponse(result[0]);
};

//? UPDATE User
export const updateUserById = async (
  id: number,
  data: { username?: string; email?: string },
) => {
  const result = await db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();

  if (result.length === 0) {
    throw new AppError(404, "User not found");
  }
  return toUserResponse(result[0]);
};

//? DELETE User
export const deleteUserById = async (id: number) => {
  const result = await db
    .delete(users)
    .where(eq(users.id, id))
    .returning({ userId: users.id });

  if (result.length === 0) {
    throw new AppError(404, "User not found");
  }
  return { msg: "User deleted successfully" };
};
