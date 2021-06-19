import {connection} from '../data/connection'
import {user} from '../types'
export const userModel = {
    create:  async ({id, name, email, password, role}:user): Promise<boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
                INSERT INTO cookenu_login ( 
                    id,
                    name, 
                    email, 
                    password,
                    role)
                VALUE (
                    '${id}',
                    '${name}',
                    '${email}',
                    '${password}',
                    '${role}'
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
               email,
               role
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
    deleteFlow: async (id:string, followId: string): Promise<boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
                DELETE FROM cookenu_follow 
                    WHERE following = '${id}' and followed ='${followId}'
            `)
            return dbResult[0].affectedRows === 1;
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
    deleteUser: async (id:string): Promise<boolean> => {
        try{
            
            await connection.raw(`
                DELETE FROM cookenu_follow 
                    WHERE following = '${id}' or followed ='${id}'
            `)
             await connection.raw(`
            DELETE FROM cookenu_recipe 
                WHERE user_id = '${id}'
            `)
            const dbResult  = await connection.raw(`
            DELETE FROM cookenu_login 
                WHERE id = '${id}'
            `)
            return dbResult[0].affectedRows === 1;
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
}