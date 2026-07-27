//* ----- Session Services -----

import { db } from "../db/index.js";
import { eq, sql } from "drizzle-orm";
import { sessions } from "../db/schema.js";
import { AppError } from "../utils/AppError.js";
import {
  toCreatedSessionResponse,
  toSessionResponse,
} from "../dto/session.dto.js";

const getSessionForUser = async (id: number, userId: number) => {
  const result = await db.select().from(sessions).where(eq(sessions.id, id));

  if (result.length === 0) {
    throw new AppError(404, "Session not found");
  }
  const session = result[0];

  if (session.userId !== userId) {
    throw new AppError(403, "You do not have access to this session");
  }
  return session;
};

//? GET All Sessions
/*
export const findSessions = async () => {
  const result = await db.select().from(sessions);
  return result.map(toSessionResponse);
};
*/

//? GET Session by session id
export const findSessionById = async (id: number, userId: number) => {
  const session = await getSessionForUser(id, userId);
  return toSessionResponse(session);
};

//? GET Session by user id
export const findSessionByUserId = async (id: number) => {
  const result = await db
    .select()
    .from(sessions)
    .where(eq(sessions.userId, id));
  return result.map(toSessionResponse);
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
  return toCreatedSessionResponse(session);
};

//? End Session
export const endSessionById = async (id: number, userId: number) => {
  const session = await getSessionForUser(id, userId);
  if (session.endedAt) {
    throw new AppError(400, "Session already ended");
  }

  await db
    .update(sessions)
    .set({ endedAt: sql`CURRENT_TIMESTAMP` })
    .where(eq(sessions.id, id));

  return { msg: "Session ended successfully" };
};

//? Update Session Title
export const updateSessionTitleById = async (
  id: number,
  data: { title?: string },
  userId: number,
) => {
  await getSessionForUser(id, userId);
  await db.update(sessions).set(data).where(eq(sessions.id, id)).returning();
  return { msg: "Session updated successfully" };
};

//? Delete Session
export const deleteSessionById = async (id: number, userId: number) => {
  await getSessionForUser(id, userId);
  await db.delete(sessions).where(eq(sessions.id, id));
  return { msg: "Session deleted successfully" };
};
