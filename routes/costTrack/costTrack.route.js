import express from "express";
import { verifyToken } from "../../middleware/jwt.js";

import {
  costTrackAdd,
  getCostTrack,
  costTrackUpdate,
  costTrackUpdateDana,
  costTrackDelete,
  login,
} from "../../controllers/costTrack/costTrack.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/", costTrackAdd);
router.get("/", verifyToken, getCostTrack);
router.put("/", verifyToken, costTrackUpdate);
router.put("/update-dana", verifyToken, costTrackUpdateDana);
router.delete("/delete-dana/:id", verifyToken, costTrackDelete);

export default router;
