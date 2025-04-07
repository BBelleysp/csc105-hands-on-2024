import type { Context } from "hono";
import type { CreateTodoInput, UpdateTodoInput } from "../types/index.ts";
import { todoDetails } from "../models/todo.model.ts";
 
export async function getTodos(c: Context) {
  return c.json({
    success: true,
    data: todoDetails.findAll(),
    msg: 'Found Todos',
  });
} 

export const getTodo = (c: Context) => {
  const id = Number(c.req.param('id'));
  const todo = todoDetails.findById(id);
  if(!todo){
    return c.json({
      success: false,
      msg:'Todo is not found!!!',
    });
  }
  return c.json({
    success: true,
    data: todo,
    msg: 'Found todos',
  });
};  

export async function createTodo(c: Context) {
  const input = c.get('todoData') as CreateTodoInput;
  const newTodo = todoDetails.create(input);
  return c.json(newTodo, 201);
}

export const updateTodo = (c: Context) => {
  const id = Number(c.req.param('id'));
  const input = c.get('todoData') as UpdateTodoInput;
  const updated = todoDetails.update(id, input);
  if (!updated) return c.notFound();
  return c.json({
    success: true,
    data: updated,
    msg: 'Todo updated successfully',
  });
};

export const deleteTodo = (c: Context) => {
  // const id = Number(c.req.param('id'));
  const id = c.get('id') as number;
  const removeTodo = todoDetails.remove(id);
  if(!removeTodo){
    return c.json({
      success: false,
      msg: 'Todo is not Delete',
    })
  } 
  return c.body(null, 204);
};