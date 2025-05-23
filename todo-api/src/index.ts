import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import todoRoutes from './routes/todo.routes.ts';
import { PrismaClient } from './generated/prisma/index.js';
import { mainRouter } from './routes/index.routes.ts';

const app = new Hono()
export const db = new PrismaClient();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.route("", mainRouter);

db.$connect()
	.then(() => {
		console.log("Connected to the database");
	})
	.catch((error) => {
		console.error("Error connecting to the database:", error);
	});

app.route('/todos', todoRoutes); 
serve(
  { fetch: app.fetch, 
    port: 3000 }, 
    (info) => {console.log(`Server is running at http://localhost:${info.port}`);
});
