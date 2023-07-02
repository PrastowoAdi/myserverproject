import express from "express";
import {
  weddingRegisterUser,
  getUserByUsername,
  weddingUpdateUser,
} from "../../controllers/weddingform/wedding.controller.js";
import { verifyToken } from "../../middleware/jwt.js";

const router = express.Router();

router.post("/register", weddingRegisterUser);
router.get("/user", verifyToken, getUserByUsername);
router.put("/user", verifyToken, weddingUpdateUser);

export default router;
