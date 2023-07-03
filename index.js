import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import dailyRoute from "./routes/daily.route.js";
import landingRoute from "./routes/myportfolio/landing.route.js";
import todosRoute from "./routes/todos/todos.route.js";
import weddingRoute from "./routes/weddingform/wedding.route.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

app.set("view engine", "ejs");
// app.use(
//   cors({
//     origin: ["https://mytimesheet-sigma.vercel.app", "http://localhost:3000"],
//     credentials: true,
//   })
// );
app.use(cors({}));
// origin: [
//   "http://localhost:3000",
//   "https://mytimesheet-sigma.vercel.app",
//   "https://myportfolio-liard-eight.vercel.app",
//   "https://mytodoapps.vercel.app",
// ],
// credentials: true,
app.use(express.json({ extended: false }));
app.use(cookieParser());

app.use("/api/daily", dailyRoute);
app.use("/api/myportfolio/landing", landingRoute);
app.use("/api/todos", todosRoute);
app.use("/api/wedding", weddingRoute);
app.use("/api", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
