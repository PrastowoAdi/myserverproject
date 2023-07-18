import express from "express";
// import { verifyToken } from "../middleware/jwt.js";

import {
  costTrackAdd,
  getCostTrack,
  costTrackUpdate,
} from "../../controllers/costTrack/costTrack.controller.js";

const router = express.Router();

router.post("/", costTrackAdd);
router.get("/", getCostTrack);
router.put("/:id", costTrackUpdate);

export default router;
