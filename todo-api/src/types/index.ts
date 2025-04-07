type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };
  
type CreateTodoInput = {
    title: string;
    completed?: boolean;
  };
  
type UpdateTodoInput = {
    title?: string;
    completed?: boolean;
  };
  
export type { Todo, CreateTodoInput, UpdateTodoInput}  