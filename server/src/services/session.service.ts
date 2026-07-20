//* ----- Session Services -----

import { db } from "../db/index.js";
import { eq, sql } from "drizzle-orm";
import { sessions } from "../db/schema.js";
import { AppError } from "../utils/AppError.js";

//? GET All Sessions
export const findSessions = async () => {
  const allSessions = await db.select().from(sessions);

  if (allSessions.length === 0) {
    throw new AppError(200, "No sessions found");
  }
  return allSessions;
};

//? GET Session by session id
export const findSessionById = async (id: number) => {
  const findSession = await db
    .select()
    .from(sessions)
    .where(eq(sessions.id, id));

  if (findSession.length === 0) {
    throw new AppError(404, "Session not found");
  }
  return findSession;
};

//? GET Session by user id
export const findSessionByUserId = async (id: number) => {
  const findSession = await db
    // WE NEED TO CHECK IF USER IS VALID
    .select()
    .from(sessions)
    .where(eq(sessions.userId, id));
  if (findSession.length === 0) {
    throw new AppError(404, "Session not found");
  }
  return findSession;
};

//? Create Session
export const startSession = async (userId: number, title: string) => {
  const [cerated] = await db
    .insert(sessions)
    .values({
      userId,
      title,
    })
    .returning();
  return cerated;
};

//? End Session
export const endSession = async (id: number) => {
  const findSession = await db
    .select()
    .from(sessions)
    .where(eq(sessions.id, id));
  if (findSession.length === 0) {
    throw new AppError(404, "Session not found");
  }

  const [session] = findSession;

  if (session.endedAt) {
    throw new AppError(400, "Session already ended");
  }

  await db
    .update(sessions)
    .set({ endedAt: sql`CURRENT TIMESTAMP` })
    .where(eq(sessions.id, id));

  return { msg: "Session ended successfully" };
};

//? Update Session
export const updateSessionById = async (
  id: number,
  data: { title?: string },
) => {
  const updated = await db
    .update(sessions)
    .set(data)
    .where(eq(sessions.id, id))
    .returning();

  if (updated.length === 0) {
    throw new AppError(404, "Session not found");
  }

  return { msg: "Session updated successfully" };
};

//? Delete Session
export const deleteSessionById = async (id: number) => {
  const deleted = await db
    .delete(sessions)
    .where(eq(sessions.id, id))
    .returning({ id: sessions.id });

  if (deleted.length === 0) {
    throw new AppError(404, "Session not found");
  }
  return { msg: "Session deleted successfully" };
};
