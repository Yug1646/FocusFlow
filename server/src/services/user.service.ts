//* ----- User Services -----
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { toUserResponse } from "../dto/user.dto.js";
import { AppError } from "../utils/AppError.js";
import { comparePassword, hashPassword } from "../utils/password.js";

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

//? UPDATE User Password
export const changeUserPassword = async (
  id: number,
  oldPassword: string,
  newPassword: string,
) => {
  const result = await db.select().from(users).where(eq(users.id, id));

  if (result.length === 0) {
    throw new AppError(404, "User not found");
  }

  const [user] = result;
  const passwordIsValid = await comparePassword(oldPassword, user.password);

  if (!passwordIsValid) {
    throw new AppError(401, "Invalid Password");
  }

  const newPasswordHash = await hashPassword(newPassword);

  const updatePassword = await db
    .update(users)
    .set({ password: newPasswordHash })
    .where(eq(users.id, id));

  return { message: "Password updated successfully" };
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
  return { message: "User deleted successfully" };
};
