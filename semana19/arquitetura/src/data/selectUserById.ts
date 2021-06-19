import { connection } from "../connection"
import { user } from "../types/user"

export const selectUserById = async (
   id: string
): Promise<user> => {
   try {
      const result = await connection("User_Arq")
         .select("*")
         .where({ id })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password,
         role: result[0].role
      }

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}