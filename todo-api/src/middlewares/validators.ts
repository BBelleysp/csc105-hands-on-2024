// Middleware คือฟังก์ชันที่อยู่ระหว่าง Request และ Response ใช้สำหรับ: 
// 1. ตรวจสอบสิทธิ์ (Authentication)
// 2. ตรวจสอบข้อมูล (Validation)
// 3. Logging
// 4. กำหนด CORS
// 5. แปลง request body

// import type { Context, Next } from "hono";

// export async function validateCreateTodo(c: Context, next: Next) {
//     const body = await c.req.json();
//     if (!body.title || typeof body.title !== 'string') {
//       return c.json({ error: 'Title is required' }, 400);
//     }
//     c.set('todoData', body)
//     await next();
//   }

//   export async function validateIdParam(c: Context, next: Next) {
//     const idParam = c.req.param('id');
//     if (!/^\d+$/.test(idParam)) {
//       return c.json({ 
//         error: 'Invalid ID format' }, 400);
//     }
//     const id = Number(idParam);
//     c.set('id', id); 
//     await next();
//   }
  