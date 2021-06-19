import { raw } from "express"
import { connection } from "../connection"
import { user } from "../types/user"

export const delUser = async (
   id: string
): Promise<number> => {
   try {
      const result = await connection.raw(`
         DELETE FROM User_Arq WHERE (id = '${id}');
      `);
      console.log(result[0])
      return result[0].affectedRows;

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}