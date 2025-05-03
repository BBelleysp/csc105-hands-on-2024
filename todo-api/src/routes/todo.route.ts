// import { Hono } from "hono";
// import { validateCreateTodo, validateIdParam } from "../middlewares/validators.ts";
// import * as TodoController from '../controllers/todo.controller.ts';

// const todoRoutes = new Hono();

// todoRoutes.get('/', TodoController.getTodos);
// todoRoutes.get('/:id', validateIdParam, TodoController.getTodo);
// todoRoutes.post('/', validateCreateTodo, TodoController.createTodo);
// todoRoutes.patch('/:id', validateIdParam, TodoController.updateTodo);
// todoRoutes.delete('/:id', validateIdParam, TodoController.deleteTodo);

// export default todoRoutes;