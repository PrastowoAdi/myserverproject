import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.replace("Bearer ", "")
    : null;
  if (!token) {
    res.status(401).json({
      isSuccess: false,
      message: "You are not authenticated!!!",
    });
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) {
      res.status(403).json({
        isSuccess: false,
        message: "Token is not valid!!!",
      });
    }
    req.userId = payload.id;
    next();
  });
};
