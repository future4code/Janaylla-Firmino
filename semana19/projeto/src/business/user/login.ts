
import { Request, Response } from "express"
import { selectUser } from "../../data/user/selectUser";
import { generateToken } from "../../services/authenticator";
import {user} from '../../types/user'
import {compare} from '../../services/hashManager'

export const login = async (req: Request, res: Response) => {
    try {
        let message = "Success!"
  
        const { email, password } = req.body
  
        if (!email || !password) {
           res.statusCode = 406
           message = '"email" and "password" must be provided'
           throw new Error(message)
        }
  
        const userData: any = await selectUser(email)

        if (!userData) {
           res.statusCode = 401
           message = "Invalid credentials"
           throw new Error(message)
        }
        
        const user: user = {
           id: userData.id,
           name: userData.name,
           email: userData.email,
           password: userData.password
        }
  
        const passwordIsCorrect: boolean = await compare(password, user.password)
  
        if (!passwordIsCorrect) {
           res.statusCode = 401
           message = "Invalid credentials"
           throw new Error(message)
        }
  
        const token: string = generateToken({
           id: user.id
        })
  
        res.status(200).send({ message, token })
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
 }