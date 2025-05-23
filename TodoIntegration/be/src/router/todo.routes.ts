import { Hono } from 'hono';
import * as todoController from '../controller/todo.controller.ts';

const todoRouter = new Hono();

todoRouter.get('/test', (c) => c.text('Hello From Todo Router'));
todoRouter.get('/allTodos', todoController.GetTodo);
todoRouter.post('/', todoController.AddTodo);
todoRouter.patch('/edit', todoController.EditTodoName);
todoRouter.patch('/success/:id', todoController.CompleteTodo);
todoRouter.delete('/:id', todoController.DeleteTodo);

export { todoRouter };
