import {connection} from '../data/connection'
import {recipe} from '../types'
export const recipeModel = {
    create:  async ({id, creation_date, title, text, user_id}:recipe): Promise<boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
                INSERT INTO cookenu_recipe ( 
                    id,
                    title, 
                    creation_date,
                    text,
                    user_id)
                VALUE (
                    '${id}',
                    '${title}',
                    '${creation_date}',
                    '${text}',
                    '${user_id}'
                )
            `)
            return dbResult[0].affectedRows === 1;
        }
        catch(err){
            console.log(err)
            return false;
        }
    },
    getById:  async (id:string): Promise<recipe|boolean> => {
        try{
            
            const dbResult  = await connection.raw(`
               SELECT *
               FROM cookenu_recipe WHERE id = '${id}'
            `)
            return dbResult[0][0];
        }
        catch(err){
            console.log(err)
            return false;
        }
    }
}