// import type { CreateTodoInput, Todo, UpdateTodoInput } from "../types/index.ts";

// const todos: Todo[] = [];
// const currentId = 1;

// export function findAll(): Todo[] { 
//     return todos; 
// }
// export function findById(id: number): Todo | undefined {
//     return todos.find((todo) => todo.id === id);
//   }  
// export function create(input: CreateTodoInput): Todo{ 
//     const newTodo: Todo = {
//         id: currentId+1,
//         title: input.title,
//         completed: input.completed?? false,
//     };
//     todos.push(newTodo);
//     return newTodo
// }
// export function update(id: number, input: UpdateTodoInput): Todo | null {
//     const todo = todos.find((todo) => todo.id === id);
//     if(!todo){
//         return null;
//     }
//     todo.title = input.title ?? todo.title;
//     todo.completed = input.completed ?? todo.completed;
//     return todo;
// }

// export function remove(id: number): Todo | undefined { 
//     const index = todos.findIndex((todo)=> todo.id === id);
//     if(index === -1){
//         return undefined;
//     }
//     const [removeTodo] = todos.splice(index, 1);
//     return removeTodo;
// }

// export const todoDetails = { findAll, findById, create, update, remove}