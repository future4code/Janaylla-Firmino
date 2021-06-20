import { connection } from "../../connection";

export const insertUser = async(
   user:any
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
   }).into('User_Arq')
}