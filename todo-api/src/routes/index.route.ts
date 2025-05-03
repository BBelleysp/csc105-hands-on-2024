// create user patch

import { Hono } from "hono";
import { userRouter } from "./user.routes.ts";

// mainRouter เอาไว้กำหนด path เฉพาะ คล้ายประตูเชื่อมไปห้องต่างๆ
const mainRouter = new Hono();

mainRouter.route("/users", userRouter);

export { mainRouter };