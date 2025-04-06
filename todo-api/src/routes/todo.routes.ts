todoRoutes.post('/', validateCreateTodo, TodoController.createTodo);
todoRoutes.get('/', TodoController.getTodos);
todoRoutes.get('/:id', validateIdParam, TodoController.getTodo);
todoRoutes.delete('/:id', validateIdParam, TodoController.deleteTodo);
