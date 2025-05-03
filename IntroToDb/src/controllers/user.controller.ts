// use for? : maybe collect complicate part and combine  together ???

import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type CreateUserBody = {
    firstName: string,
    lastName: string,
}; 
const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<CreateUserBody>();
        if(!body.firstName || !body.lastName ){
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing require field",
                },
                400
            );
        }
        if(await userModel.isDuplicate(body.firstName, body.lastName)){
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "firstName or lastName is duplicated!!!",
                },
                400
            );
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName,
        );
        return c.json(
            {
                success: true,
                data: newUser,
                msg: "Successfully created new user!",
            });
    } catch (e) {
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

const getAllUsers = async (c: Context) => {
    try {
        const user = await userModel.getAllUsers();
        return c.json(
            {
                success: true,
                data: user,
                msg: "Now you can see all users",
            },
        );
    } catch (e) {
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

const editName = async (c: Context) => {
    try {
        const param = c.req.query("id");
        const body = await c.req.json();
        const { firstName, lastName } = body;
        if(param !== undefined && param!== null && firstName && lastName){
            const updatedName = await userModel.editName(parseInt(param), firstName, lastName);
            return c.json({
                success: true,
                data: updatedName,
                msg: "Updated firstName and lastName Successfully",
            });
        }else {
            console.log("param", param);
            console.log("firstName", firstName);
            console.log("lastName", lastName);

            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "firstName or lastName don't change",
                },
                400
            );
        }
    } catch(e){
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

const deleteUser = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if(param !== undefined && param !== null){
            const del = await userModel.deleteUser(parseInt(param));
            return c.json({
                success: true,
                data: del,
                msg: "Successfully delete user",
            });
        }else {
            return c.json({
                success: false,
                data: null,
                msg: "Missing id field",
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
export { createUser, getAllUsers, editName, deleteUser };
