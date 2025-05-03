import type { Context } from "hono"
import * as todoModel from '../models/todo.model.ts'

type createTodoBody = {
    title: string,
    userId: number,
}

const createTodo = async (c: Context) => {
    try{
        const body = await c.req.json<createTodoBody>();
        if(!body.title || !body.userId){
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }
        const newTodo = await todoModel.createTodo(body.title, body.userId);
            return c.json(
                {
                    success: true,
                    data: newTodo,
                    msg: "create newTodo Successfully!!!",
                },
            );
    }catch(e){
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if(param !== undefined && param != null){
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Db doesn't have that id or can't find it", //not sure
            },
            400
        );
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const getAllTodosOf1User = async (c: Context) => {
    try {
        const param = c.req.query("userId");
        if(param !== undefined && param !== null){
            const allTodos = await todoModel.getAllTodosOf1User(parseInt(param));
            return c.json({
                success: true,
                data: allTodos,
                msg: "Successfully get all data of that user",
            });
        } else {
            return c.json({
                success: false,
                data: null,
                msg: "Missing required field(userId)"
            });
        }
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const completedTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if(param !== undefined && param !== null){
            const todo = await todoModel.completedTodo(parseInt(param), true);
            return c.json(
                {
                    success: true,
                    data: todo,
                    msg: "Todo marked as completed",
                },
            );
        }
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}

const updateTitle = async (c: Context) => {
    try {
        const param = c.req.query("id");
        const { title } = await c.req.json();
        if (param !== undefined && param !== null && title){
            const todoTitle = await todoModel.updateTitle(parseInt(param), title);
            return c.json(
                {
                    success: true,
                    data: todoTitle,
                    msg: "Title changed Successfully ",
                },
            );
        }
        else {
            return c.json(
                {
                    success: false,
                    msg: "Missing id or title",
                },
                400
            );
        }
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Server error: ${e}`,
            },
            500
        );
    }
}

const deleteTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const delTodo = await todoModel.deleteTodo(parseInt(param));
            return c.json({
                success: true,
                data: delTodo,
                msg: "Delete todo Successfully",
            });
        }else {
            return c.json({
                success: false,
                data: null,
                msg: "Missing id to delete this todo",
            });
        }
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Server error: ${e}`,
            },
            500
        );
    }
}
export { createTodo, getTodo, completedTodo, updateTitle, getAllTodosOf1User, deleteTodo };