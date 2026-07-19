//* ----- Session Services -----

import { db } from "../db/index.js";
import { eq } from "drizzle-orm";
import { sessions } from "../db/schema.js";
import { AppError } from "../utils/AppError.js";

//? GET All Sessions
export const findSessions = async () => {
  const allSessions = await db.select().from(sessions);

  if (allSessions.length === 0) {
    throw new AppError(204, "No sessions found");
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
export const createSession = async () => {};

//? End Session
export const endSession = async (id: number) => {};

//? Update Session
export const updateSessionById = async (id: number) => {};

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
