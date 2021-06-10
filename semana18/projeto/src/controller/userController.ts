import { Request, Response } from 'express'
import {generateId} from '../services/generateId'
import {generateToken, getData} from '../services/generateToken'
import {compare, hash} from '../services/encriptPassword'

export const userController = {
    create: async (req: Request, res: Response): Promise<any> => {
        try{
            const {name, password, email} = req.body;

            if(!name){
                throw new Error("")
            }
            if(!password){
                throw new Error("")
            }
            else if(typeof(password) !== "string" || password.length >= 6){
                throw new Error("")
            }
            if(!email){
                throw new Error("")
            }
            const id = generateId();
        }
        catch(err){

        }

    }
}   