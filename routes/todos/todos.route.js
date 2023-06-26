import express from "express";
// import { verifyToken } from "../middleware/jwt.js";

import {
  getTodos,
  todosAdd,
  todosUpdate,
  todosComplatedTask,
  getTodosCompleted,
} from "../../controllers/todos/todos.controller.js";

const router = express.Router();

router.post("/", todosAdd);
router.get("/", getTodos);
router.put("/:id", todosUpdate);
router.put("/completed-task/:id", todosComplatedTask);
router.get("/completed-task", getTodosCompleted);

export default router;
