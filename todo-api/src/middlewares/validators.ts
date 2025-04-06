export async function validateCreateTodo(c: Context, next: Next) {
    const body = await c.req.json();
  
    if (!body.title || typeof body.title !== 'string') {
      return c.json({ error: 'Title is required' }, 400);
    }
  
    c.set('todoData', body); // ส่งให้ controller
    await next();
  }
  