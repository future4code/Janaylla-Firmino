import {connection} from '../data/connection'
import {user} from '../types'
export const userModel = {
    create:  async ({id, name, email, password}:user): Promise<any> => {
        try{
            const dbResult  = await connection.raw(`
                INSERT INTO ( id,
                    name, 
                    email, 
                    password)
                VALUE (
                    '${id}',
                    '${name}',
                    '${email}',
                    '${password}',
                )
            `)

            return dbResult[0].affectRows; 

        }
        catch(err){

        }
    } 
}