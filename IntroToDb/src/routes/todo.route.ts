import { Hono } from "hono";
import * as todoController from '../controllers/todo.controller.ts'

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/getTodoId", todoController.getTodo);
todoRouter.get("/get1user-allDatas", todoController.getAllTodosOf1User);
todoRouter.patch("/complete", todoController.completedTodo);
todoRouter.patch("/changeTitle", todoController.updateTitle);
todoRouter.delete("/delTodo", todoController.deleteTodo);

export { todoRouter };
