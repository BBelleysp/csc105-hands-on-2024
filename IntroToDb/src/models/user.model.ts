// search user by name 
// create user 
// delete user 
// user cannot have the same name and surname so we have to check when try to create task

//just write to prepare for using it in controller

import { db } from "../index.ts";

const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await db.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

const createUser = async ( firstName: string, lastName: string ) => {
    const user = await db.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
}

const getAllUsers = async () => {
    const user = await db.user.findMany();
    return user;
}

const editName = async (id: number, firstName: string, lastName: string) => {
    const userName = await db.user.update({
        where: {
            id: id,
        },
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return userName;
}

const deleteUser = async (id: number) => {
    const user = await db.user.delete({
        where: {
            id: id,
        }
    });
    return user;
}

export { isDuplicate, createUser, getAllUsers, editName, deleteUser };
