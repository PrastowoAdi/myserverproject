import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// import userRoute from "./routes/user.route.js";
// import authRoute from "./routes/auth.route.js";
import dailyRoute from "./routes/daily.route.js";

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
app.use(
  cors({ origin: "https://mytimesheet-sigma.vercel.app", credentials: true })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/daily", dailyRoute);

// index page
// app.get("/", function (req, res) {
//   res.render("pages/index");
// });
// app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
