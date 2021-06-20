
import { Request, Response } from "express"
import { selectUser } from "../../data/user/selectUser";
import { generateToken, getTokenData } from "../../services/authenticator";
import {authenticationData, user} from '../../types/user'
import {compare} from '../../services/hashManager'
import { generateId } from "../../services/generateId";
import { insertPost } from "../../data/post/insertPost";

export const createPost = async (req: Request, res: Response) => {
    try {
        let message = "Success!"
  
        const { photo, description, type } = req.body
  
        const token: string = req.headers.authorization as string
  
        const tokenData: authenticationData = getTokenData(token)
  
        const id: string = generateId()
  
        await insertPost({
            id,
            photo,
            description,
            type,
            authorId: tokenData.id
         })

        res.status(201).send({ message })
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
 }