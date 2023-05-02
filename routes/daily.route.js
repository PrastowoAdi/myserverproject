import express from "express";
// import { verifyToken } from "../middleware/jwt.js";

import { getDaily, dailyAdd } from "../controllers/daily.controller.js";

const router = express.Router();

router.post("/", dailyAdd);
router.get("/", getDaily);

export default router;
