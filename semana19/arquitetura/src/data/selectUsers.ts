import { connection } from "../connection"
import { user } from "../types/user"

export const selectUser = async (
): Promise<user[]> => {
   try {
      const result = await connection("User_Arq")
         .select("*")

      return result;

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}