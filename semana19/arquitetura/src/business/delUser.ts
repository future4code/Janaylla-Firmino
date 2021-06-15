
import { Request, Response } from "express";
import { validateToken } from './validateToken'
import { delUser as  delUserData} from '../data/delUser'
import { authenticationData } from "../types/user"
import {getTokenData} from '../services/authenticator'
export const delUser = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization;
        const id = req.params.id;
        if (!token) {
            throw new Error("Token não enviado")
        }
        const user = validateToken(token);
        if (!user || typeof(user) === "boolean" ) {
            throw new Error("Token invalido")
        }
        if(!id){
            throw new Error("ID não informado")
        }
        const userAuthenticationData:authenticationData = getTokenData(token)
        if(userAuthenticationData.role != "ADMIN"){
            throw new Error("Usuaria não tem permissão para excluir outro")
        }
        const rows = await delUserData(id);

        if(rows != 1){
            throw new Error("Usuaria não foi excluido, verifique o ID informado")
        }
        
       
        res.send({message: "Usuario deletado com sucesso"}).status(200);

    } catch (error) {
        res.send({ message: error.message }).status(error.status);
    }
}


