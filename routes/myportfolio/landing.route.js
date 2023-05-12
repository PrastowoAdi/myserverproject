import express from "express";
// import { verifyToken } from "../middleware/jwt.js";

import {
  getLanding,
  landingAdd,
  landingUpdate,
} from "../../controllers/myportfolio/landing.controller.js";

const router = express.Router();

router.post("/", landingAdd);
router.get("/", getLanding);
router.put("/:id", landingUpdate);

export default router;
