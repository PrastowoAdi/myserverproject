import express from "express";
// import { verifyToken } from "../middleware/jwt.js";

import {
  getDaily,
  dailyAdd,
  exportPdf,
  dailyUpdate,
} from "../controllers/daily.controller.js";

const router = express.Router();

router.post("/", dailyAdd);
router.get("/", getDaily);
router.get("/export", exportPdf);
router.put("/:id", dailyUpdate);

export default router;
