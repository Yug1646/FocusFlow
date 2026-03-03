import { users, sessions } from "./data.js";

export const findUserbyIndex = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.status(400).json({ message: "Invalid user id" });
  }
  const userIndex = users.findIndex((user) => user.id === parsedId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  req.userIndex = userIndex;
  next();
};

export const findSessionbyIndex = (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const userExists = users.find((user) => user.id === userId);
  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }
  req.userId = userId;
  next();
};

export const findSessionbyUserId = (req, res, next) => {
  const { userId, id } = req.params;

  const parsedUserId = parseInt(userId);
  const parsedSessionId = parseInt(id);

  if (isNaN(parsedUserId) || isNaN(parsedSessionId)) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const sessionIndex = sessions.findIndex(
    (s) => s.id === parsedSessionId && s.userId === parsedUserId,
  );
  if (sessionIndex === -1) {
    return res.status(404).json({
      message: "Session not found for this user",
    });
  }
  req.sessionIndex = sessionIndex;
  next();
};
