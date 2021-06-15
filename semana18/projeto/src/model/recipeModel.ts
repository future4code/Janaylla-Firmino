import { connection } from '../data/connection'
import { recipe } from '../types'
export const recipeModel = {
    create: async ({ id, creation_date, title, text, user_id }: recipe): Promise<boolean> => {
        try {

            const dbResult = await connection.raw(`
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
        catch (err) {
            console.log(err)
            return false;
        }
    },
    getById: async (id: string): Promise<recipe | boolean> => {
        try {

            const dbResult = await connection.raw(`
               SELECT *
               FROM cookenu_recipe WHERE id = '${id}'
            `)
            return dbResult[0][0];
        }
        catch (err) {
            console.log(err)
            return false;
        }
    },
    getAll: async (): Promise<recipe | boolean> => {
        try {
            const dbResult = await connection.raw(`
            SELECT r.id, r.title, r.text, r.creation_date, l.id, l.name FROM cookenu_recipe as r
            LEFT JOIN cookenu_login as l ON l.id = r.user_id
            `)
            return dbResult[0];
        }
        catch (err) {
            console.log(err)
            return false;
        }
    },
}