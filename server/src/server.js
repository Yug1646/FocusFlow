import express from "express";

import userRoutes from "../routes/users.js";
import sessionsRouter from "../routes/sessions.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(userRoutes);
app.use(sessionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
