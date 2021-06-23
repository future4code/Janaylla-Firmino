import { connection } from "../../connection";

export const insertFriendship = async (
   { id, userId1, userId2 }: any
) => {
   const dbResult: any = await connection.raw(`
   SELECT COUNT(*) as isFriend FROM labook_friendship WHERE
    ((userId1 = '${userId1}' and userId2 = '${userId2}') 
   or (userId1 ='${userId2}' and userId2 = '${userId2}'));
   `)
   if(dbResult[0][0].isFriend > 0) {
      return false
   }
   const dbResult2: any = await connection.insert({
      id: id,
      userId1: userId1,
      userId2: userId2
   }).into('labook_friendship')
   console.log(dbResult2)
   return dbResult2.affectedRows === true;
}