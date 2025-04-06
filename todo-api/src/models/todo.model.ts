const todos: Todo[] = [ ... ];

// ตัวอย่าง method
export function findAll(): Todo[] { return todos; }
export function create(input: CreateTodoInput): Todo { ... }
export function remove(id: number): Todo | undefined { ... }
