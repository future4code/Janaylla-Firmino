import {selectAllUsers, selectUsersby} from '../Querys/userQuerys'
import express, {Request, Response} from 'express'
import {UserEnum} from '../types'
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.
export const getUsersByQuery = async(req: Request,res: Response): Promise<void> =>{
   try {
      const by = req.query.by as string || "";
      if(!by){
         throw new Error("Uninformed type")
      }
      if(!req.query[by]){
         throw new Error("Value does not inform")
      }
      if(!(by as UserEnum)){
         throw new Error("Invalid informed type")
      }
      let where = `${by} LIKE "%${req.query[by]}%"`;
      const users = await selectUsersby(where)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}



//  a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.
export const getUsersByPara = async(req: Request,res: Response): Promise<void> =>{
   try {
      const by = req.params.by as string || "";
      const para = req.params.para as string || "";
      if(!by){
         throw new Error("Uninformed type")
      }
      if(!para){
         throw new Error("Value does not inform")
      }
      if(!(by as UserEnum)){
         throw new Error("Invalid informed type")
      }
      let where = `${by} LIKE '%${para}%'`;
      const users = await selectUsersby(where)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}