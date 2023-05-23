import express from "express";

import { guestAdd, guestGet } from "../controllers/guestBook.controller.js";

const router = express.Router();

router.post("/", guestAdd);
router.get("/", guestGet);

export default router;
