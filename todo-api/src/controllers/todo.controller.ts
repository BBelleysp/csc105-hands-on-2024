export async function createTodo(c: Context) {
    const input = c.get('todoData') as CreateTodoInput;
    const newTodo = TodoModel.create(input);
    return c.json(newTodo, 201);
  }
  