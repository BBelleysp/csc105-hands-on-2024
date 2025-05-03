import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}

// to Read data so we will get from todoModel
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
        }
    });
    return todo;
}

// get All todo of 1 user
const getAllTodosOf1User = async (id: number) => {
    const allTodos = await db.todo.findMany({
        where: {
            userId: id,
        },
        select: {
            id: true,
            title: true,
            completed: true,
        },
    });
    return allTodos;
};


// Update completed from false to true
const completedTodo = async (id: number, completed: boolean) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            completed: completed,
        },
    });
    return todo;
}

// Update title 
const updateTitle = async (id: number, title: string) => {
    const todoTitle = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            title: title,
            completed: false,
        },
    });
    return todoTitle;
}

const deleteTodo = async (id: number) => {
    const delTodo = await db.todo.delete({
        where: {
            id: id,
        }
    });
    return delTodo;
}

export { createTodo, getTodo, completedTodo, updateTitle, getAllTodosOf1User, deleteTodo };

