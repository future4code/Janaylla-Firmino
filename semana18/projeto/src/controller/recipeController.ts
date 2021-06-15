import { Request, Response } from 'express'
import {generateId} from '../services/generateId'
import {recipeModel} from '../model/recipeModel'
import {getData} from '../services/generateToken'
import { recipe } from '../types'

export const recipeController = {
    create: async (req: Request, res: Response): Promise<any> => {
        try{
            const {title, text} = req.body;
            const token = req.headers.authorization;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            if(!title|| typeof(title) !== "string"){
                throw new Error("title not entered")
            }
            if(!text){
                throw new Error("text not entered")
            }
            const user_id = await getData(token);

            const id = generateId();
           const creation_date= new Date().toISOString().slice(0, 19).replace('T', ' ');
            
            const affectRows = await recipeModel.create({title, text, id,user_id:user_id.id, creation_date });

            if(!affectRows){
                throw new Error("Recipe not create")
            }
            res.status(200).send({message: "Recipe created"})

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    edit: async (req: Request, res: Response): Promise<any> => {
        try{
            const {title, text} = req.body;
            const id = req.params.id;
            const token = req.headers.authorization;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            if(!title|| typeof(title) !== "string"){
                throw new Error("title not entered")
            }
            if(!text){
                throw new Error("text not entered")
            }
        
            const user_id = await getData(token);
            const recipe = await recipeModel.getById(id);
            if(!recipe  || typeof(recipe) === "boolean" ){
                throw new Error("Recipe not found")
            }
            if(recipe.user_id  !== user_id.id){
                throw new Error("User is not the creator of the recipe")
            }

           const creation_date= new Date().toISOString().slice(0, 19).replace('T', ' ');
            
            const affectRows = await recipeModel.edit({title, text, id,user_id:user_id.id, creation_date });

            if(!affectRows){
                throw new Error("Recipe not update")
            }
            res.status(200).send({message: "Recipe update"})

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    delete: async (req: Request, res: Response): Promise<any> => {
        try{
            const id = req.params.id;
            const token = req.headers.authorization;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
        
            const user_id = await getData(token);
            const recipe = await recipeModel.getById(id);
            if(!recipe  || typeof(recipe) === "boolean" ){
                throw new Error("Recipe not found")
            }
            if((recipe.user_id  !== user_id.id ) && user_id.role === 'normal'){
                throw new Error("User is not the creator of the recipe")
            }

            const affectRows = await recipeModel.delete(id);

            if(!affectRows){
                throw new Error("Recipe not delete")
            }
            res.status(200).send({message: "Recipe delete"})

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    getById:async (req: Request, res: Response): Promise<any> => {
        try{
            const token = req.headers.authorization;
            const id = req.params.id;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            const userAuthentication = await getData(token);

            if(!userAuthentication.id){
                throw new Error("Unauthenticated user")
            }
            if(!id){
                throw new Error("Token not entered")
            }
            const recipe = await recipeModel.getById(id)
            if(!recipe || typeof(recipe) === "boolean"){
                throw new Error("Recipe not found")
            }
            res.status(200).send(recipe)

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
    getByAll:async (req: Request, res: Response): Promise<any> => {
        try{
            const token = req.headers.authorization;
            if(!token || typeof(token) !== "string"){
                throw new Error("Token not entered")
            }
            const userAuthentication = await getData(token);

            if(!userAuthentication.id){
                throw new Error("Unauthenticated user")
            }
            const recipes = await recipeModel.getAll()
            if(typeof(recipes) === "boolean"){
                throw new Error("Recipes not founds")
            }
            res.status(200).send(recipes)

        }
        catch(err){
            res.status(400).send({message: err.message})
        }
    },
}   