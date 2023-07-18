import express from "express";
// import { verifyToken } from "../middleware/jwt.js";

import {
  costTrackAdd,
  getCostTrack,
  costTrackUpdate,
  costTrackUpdateDana,
} from "../../controllers/costTrack/costTrack.controller.js";

const router = express.Router();

router.post("/", costTrackAdd);
router.get("/", getCostTrack);
router.put("/:id", costTrackUpdate);
router.put("/update-dana/:id", costTrackUpdateDana);

export default router;
