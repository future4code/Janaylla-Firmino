import {connection} from '../data/connection'
import {user} from '../types'
export const userModel = {
    create:  async ({id, name, email, password}:user): Promise<boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
                INSERT INTO cookenu_login ( 
                    id,
                    name, 
                    email, 
                    password)
                VALUE (
                    '${id}',
                    '${name}',
                    '${email}',
                    '${password}'
                )
            `)
            return dbResult[0].affectedRows === 1;
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
    getByEmail:  async (email:string): Promise<user|boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
               SELECT * FROM cookenu_login WHERE email = '${email}'
            `)
            return dbResult[0][0];
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
    getById:  async (id:string): Promise<user|boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
               SELECT id,
               name, 
               email
               FROM cookenu_login WHERE id = '${id}'
            `)
            return dbResult[0][0];
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
    insertFlow: async (id:string, followId: string): Promise<boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
                INSERT INTO cookenu_follow ( 
                    following,
                    followed
                    )
                VALUE (
                    '${id}',
                    '${followId}'
                )
            `)
            return dbResult[0].affectedRows === 1;
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
}