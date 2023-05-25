import express from "express";

import {
  guestListAdd,
  guestListGet,
} from "../../controllers/wedding/guestlist.controller.js";

const router = express.Router();

router.post("/", guestListAdd);
router.get("/", guestListGet);

export default router;
