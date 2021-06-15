import { Request, Response } from 'express'
import {generateId} from '../services/generateId'
import {userModel} from '../model/userModel'
import {generateToken, getData} from '../services/generateToken'
import {hash,compare} from '../services/encriptPassword'
import { user } from '../types'

export const userController = {
    create: async (req: Request, res: Response): Promise<any> => {
        try{
            const {name, password, email} = req.body;

            if(!name|| typeof(name) !== "string"){
                throw new Error("Name not entered")
            }
            if(!password){
                throw new Error("Password not entered")
            }
            if(typeof(password) !== "string" || password.length < 6){
                throw new Error("Invalid password, password must be more than 5 characters")
            }
            if(!email || typeof(email) !== "string"){
                throw new Error("Eemail not entered")
            }
            const id = generateId();
            const passwordHash = await hash(password)
            const affectRows = await userModel.create({name, password: passwordHash, email, id});

            if(!affectRows){
                throw new Error("User not create, check if email has already been registered")
            }
            const token = generateToken({id})
            res.status(200).send({message: "User created", token})

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    login:async (req: Request, res: Response): Promise<any> => {
        try{
            const { password, email} = req.body;

            if(!password){
                throw new Error("Password not entered")
            }
            if(!email || typeof(email) !== "string"){
                throw new Error("Email not entered")
            }

            const user:user|boolean = await userModel.getByEmail(email);

            if(!user || typeof(user) === "boolean"){
                throw new Error("User not found")
            }
            const passwordCorrect = await compare(password, user.password)
            if(!passwordCorrect){
                throw new Error("Password incorrect")
            }

            const token = generateToken({id: user.id})

            res.status(200).send({token})

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    myProfile:async (req: Request, res: Response): Promise<any> => {
        try{
            const token = req.headers.authorization;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            const userAuthentication = await getData(token);

            const user:user|boolean = await userModel.getById(userAuthentication.id);
            if(!user || typeof(user) === "boolean"){
                throw new Error("User not found")
            }

            res.status(200).send(user)

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    profile:async (req: Request, res: Response): Promise<any> => {
        try{
            const token = req.headers.authorization;
            const id = req.params.id;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            if(!id){
                throw new Error("User id not entered")
            }
            const userAuthentication = await getData(token);

            const userValid:user|boolean = await userModel.getById(userAuthentication.id);
            if(!userValid || typeof(userValid) === "boolean"){
                throw new Error("User not found")
            }
            const user:user|boolean = await userModel.getById(id);
            if(!user || typeof(user) === "boolean"){
                throw new Error("User not found")
            }
            res.status(200).send(user)

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    follow:async (req: Request, res: Response): Promise<any> => {
        try{
            const token = req.headers.authorization;
            const userToFollowId = req.body.userToFollowId;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            if(!userToFollowId){
                throw new Error("User id not entered")
            }
            const userAuthentication = await getData(token);

            const user:user|boolean = await userModel.getById(userAuthentication.id);
            if(!user || typeof(user) === "boolean"){
                throw new Error("Uour account was not found")
            }
            const userToFollow:user|boolean = await userModel.getById(userToFollowId);
            if(!userToFollow || typeof(userToFollow) === "boolean"){
                throw new Error("User not found")
            }

            if(userToFollowId === userAuthentication.id){
                throw new Error("User not Following")
            }

            const affectRows = await userModel.insertFlow(userAuthentication.id, userToFollowId)
            if(!affectRows){
                throw new Error("User cannot follow himself")
            }
            res.status(200).send({message: `user following ${userToFollow.name}` })

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
}   