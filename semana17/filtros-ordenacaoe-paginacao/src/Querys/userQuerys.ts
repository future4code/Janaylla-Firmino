import { connection } from "../Connection/connection"
import { User } from '../types'

export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
}
export async function selectUsersby(where:string, order?:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE ${where}
    `)
 
    return result[0]
}


export async function selectUsersOrderby(order:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ${order} 
    `)
 
    return result[0]
}
