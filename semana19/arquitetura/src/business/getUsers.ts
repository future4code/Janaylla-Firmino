
import { Request, Response } from "express";
import { validateToken } from './validateToken'
import { selectUser } from '../data/selectUsers'
export const getUsers = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization!;
        if (!token) {
            throw new Error("Token não enviado")
        }
        if (!validateToken(token)) {
            throw new Error("Token invalido")
        }
        const users = await selectUser();

        res.send(users).status(200);

    } catch (error) {
        res.send({ message: error.message }).status(error.status);
    }
}


