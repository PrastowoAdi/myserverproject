import express from "express";
import {
  weddingRegisterUser,
  getUserByUsername,
  weddingUpdateLoveStory,
  weddingUpdateShareLove,
  weddingUpdateCountdown,
} from "../../controllers/weddingform/wedding.controller.js";
import { verifyToken } from "../../middleware/jwt.js";

const router = express.Router();

router.post("/register", weddingRegisterUser);
router.get("/user", verifyToken, getUserByUsername);
router.put("/user-love-story", verifyToken, weddingUpdateLoveStory);
router.put("/user-share-love", verifyToken, weddingUpdateShareLove);
router.put("/user-countdown", verifyToken, weddingUpdateCountdown);

export default router;
