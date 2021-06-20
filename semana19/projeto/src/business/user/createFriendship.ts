
import { Request, Response } from "express"
import { getTokenData } from "../../services/authenticator";
import { authenticationData } from '../../types/user'
import { generateId } from "../../services/generateId";
import { insertFriendship } from "../../data/user/insertFriendship";

export const createFriendship = async (req: Request, res: Response) => {
    try {
        let message = "Success!"

        const userId2 = req.params.userId

        const token: string = req.headers.authorization as string

        const user1:authenticationData = getTokenData(token);

        const id: string = generateId()


        if(user1.id === userId2){
            res.status(400).send({ message: "You can't be your own friend"})
        }

        const inserted = await insertFriendship({
            id: id,
            userId1: user1.id,
            userId2
        })
        if(!inserted){
            res.status(400).send({ message: "You are already friends"})
        }
        res.status(201).send({ message })

    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}