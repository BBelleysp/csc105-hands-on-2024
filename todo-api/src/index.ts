import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import todoRoutes from './routes/todo.routes.ts';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/todos', todoRoutes); 
serve(
  { fetch: app.fetch, 
    port: 3000 }, 
    (info) => {console.log(`Server is running at http://localhost:${info.port}`);
});
