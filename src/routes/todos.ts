import { Router } from "express";

import {
  CreateTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router();

router.post("/", CreateTodo);
router.get("/", getTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
