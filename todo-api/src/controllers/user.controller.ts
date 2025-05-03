import type { Context } from "hono"
import * as userModel from '../models/user.model.ts'

type createUserBody = {
    firstName: string,
    lastName: string,
}

const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        if(!body.firstName || !body.lastName){
            return c.json(
                {
                    data: null,
                    success: false,
                    msg: "Missing required field",
                },
                400
            )
        }
        if(await userModel.isDuplicate(body.firstName, body.lastName)){
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "User is already exist",
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
                msg: "Create newUser successfully!!",
            }
        )
    } catch(e) {
        return c.json(
            {
                success: false,
                data: null,
                msg:  `${e}`, 
            },
            500
        );
    }
}

export { createUser };