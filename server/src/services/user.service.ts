//* ----- User Services -----
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { toUserResponse } from "../dto/user.dto.js";
import { AppError } from "../utils/AppError.js";

//? GET All Users
export const findUsers = async () => {
  const allUsers = await db.select().from(users);
  if (allUsers.length === 0) {
    throw new AppError(204, "No users found");
  }
  return allUsers.map(toUserResponse);
};

//? GET User by id
export const findUsersById = async (id: number) => {
  const findUser = await db.select().from(users).where(eq(users.id, id));
  if (findUser.length === 0) {
    throw new AppError(404, "User not found");
  }
  return findUser.map(toUserResponse);
};

//? GET User by email
export const findUserByEmail = async (email: string) => {
  const findUser = await db.select().from(users).where(eq(users.email, email));
  if (findUser.length === 0) {
    throw new AppError(404, "User not found");
  }
  return findUser.map(toUserResponse);
};

//? UPDATE User
export const updateUserById = async (
  id: number,
  data: { username?: string; email?: string },
) => {
  const updated = await db
    .update(users)
    .set(data)
    .where(eq(users.id, id))
    .returning();

  if (updated.length === 0) {
    throw new AppError(404, "User not found");
  }
  return toUserResponse(updated[0]);
};

//? DELETE User
export const deleteUserById = async (id: number) => {
  const deleted = await db
    .delete(users)
    .where(eq(users.id, id))
    .returning({ userId: users.id });

  if (deleted.length === 0) {
    throw new AppError(404, "User not found");
  }
  return { msg: "User deleted successfully" };
};
