import express from "express";
import chats from "./src/data/data.js";
import cors from "cors";
import connectDB from "./src/config/db.js";
import colors from "colors";
import { errorHandler, notFound } from "./src/middleware/errorMiddleware.js";
import userRoutes from "./src/routes/userRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";
import messageRoutes from "./src/routes/messageRoutes.js";

const app = express();
import "dotenv/config";

connectDB();

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`Hello I am good to go`);
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/message", messageRoutes);

// error  handling middlewares
app.use(notFound);
app.use(errorHandler);

// app.get("/api/v1/chat", (req, res) => {
//   res.json(chats);
// });

// app.get("/api/v1/chat/:id", (req, res) => {
//   // console.log(req.params);
//   let id = req.params.id;
//   console.log(id);
//   const singleChat = chats.find((c) => c._id === id);
//   res.json(singleChat);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold);
});
