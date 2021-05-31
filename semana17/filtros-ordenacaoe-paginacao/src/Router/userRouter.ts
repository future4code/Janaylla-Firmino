import express, {Response, Request} from 'express'
import {getAllUsers, getUsersByQuery, getUsersByPara, getUsersOrderBy} from '../Endpoints/userEndpoints'

import { User } from '../types'

 const route = express.Router()

 route.get("/all", async (req:Request, res:Response) => {
     try {

         const user = await getAllUsers(req, res)
         res.status(200)
             .send({ users: user })

     } catch (err) {
         res
             .status(400)
             .send({ message: "Ops! Something is wrong. Try again later" })
     }
 })

 route.get("/byQuery", async (req:Request, res:Response) => {
    try {

        const user = await getUsersByQuery(req, res)
        res.status(200)
            .send({ users: user })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})


route.get("/byPara/:by/:para", async (req:Request, res:Response) => {
    try {

        const user = await getUsersByPara(req, res)
        res.status(200)
            .send({ users: user })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})


route.get("/orderBy", async (req:Request, res:Response) => {
    try {

        const user = await getUsersOrderBy(req, res)
        res.status(200)
            .send({ users: user })

    } catch (err) {
        res
            .status(400)
            .send({ message: "Ops! Something is wrong. Try again later" })
    }
})


export {route as userRoute} 