//* ----- Session Services -----

import { db } from "../db/index.js";
import { eq, sql } from "drizzle-orm";
import { sessions } from "../db/schema.js";
import { AppError } from "../utils/AppError.js";

//? GET All Sessions
export const findSessions = async () => {
  const result = await db.select().from(sessions);

  if (result.length === 0) {
    throw new AppError(404, "No sessions found");
  }
  return result;
};

//? GET Session by session id
export const findSessionById = async (id: number) => {
  const result = await db.select().from(sessions).where(eq(sessions.id, id));

  if (result.length === 0) {
    throw new AppError(404, "Session not found");
  }
  return result;
};

//? GET Session by user id
export const findSessionByUserId = async (id: number) => {
  const result = await db
    // WE NEED TO CHECK IF USER IS VALID
    .select()
    .from(sessions)
    .where(eq(sessions.userId, id));
  if (result.length === 0) {
    throw new AppError(404, "Session not found");
  }
  return result;
};

//? Create Session
export const startSession = async (userId: number, title: string) => {
  const [session] = await db
    .insert(sessions)
    .values({
      userId,
      title,
    })
    .returning();
  return session;
};

//? End Session
export const endSessionById = async (id: number) => {
  const result = await db.select().from(sessions).where(eq(sessions.id, id));
  if (result.length === 0) {
    throw new AppError(404, "Session not found");
  }

  const [session] = result;

  if (session.endedAt) {
    throw new AppError(400, "Session already ended");
  }

  await db
    .update(sessions)
    .set({ endedAt: sql`CURRENT_TIMESTAMP` })
    .where(eq(sessions.id, id));

  return { msg: "Session ended successfully" };
};

//? Update Session
export const updateSessionById = async (
  id: number,
  data: { title?: string },
) => {
  const result = await db
    .update(sessions)
    .set(data)
    .where(eq(sessions.id, id))
    .returning();

  if (result.length === 0) {
    throw new AppError(404, "Session not found");
  }

  return { msg: "Session updated successfully" };
};

//? Delete Session
export const deleteSessionById = async (id: number) => {
  const result = await db
    .delete(sessions)
    .where(eq(sessions.id, id))
    .returning({ id: sessions.id });

  if (result.length === 0) {
    throw new AppError(404, "Session not found");
  }
  return { msg: "Session deleted successfully" };
};
