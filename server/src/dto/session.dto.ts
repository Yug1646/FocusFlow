export const toSessionResponse = (session: {
  id: number;
  userId: number;
  title: string;
  startedAt: string;
  endedAt: string | null;
}) => ({
  id: session.id,
  userId: session.userId,
  title: session.title,
  startedAt: session.startedAt,
  endedAt: session.endedAt,
});

export const toCreatedSessionResponse = (session: {
  id: number;
  userId: number;
  title: string;
  startedAt: string;
}) => ({
  id: session.id,
  userId: session.userId,
  title: session.title,
  startedAt: session.startedAt,
});
