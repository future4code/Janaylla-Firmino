import connection from '../data/connection'
const userTableName = "User";

type userData = {
   id: string,
   email: string,
   password: string,
   role: string
};
type addressData = {
   street: string,
   number: number,
   neighborhood: string,
   city : string,
   state: string,
   cep: string,
   complement : string
};
const modelUser = {
   createUser: async (user: userData, address:addressData) => {

      const dbResult = await connection.raw(`
    INSERT into ${userTableName} value 
    ('${user.id}','${user.email}', '${user.password}', '${user.role}')
 `)
      const dbResult2 = await connection.raw(`
      INSERT into Adress value 
      ('${address.street}','${address.number}', '${address.neighborhood}', '${address.city}',
      '${address.state}','${address.cep}', '${address.complement}', '${user.id}')
      `)

      return dbResult[0].affectedRows + dbResult2[0].affectedRows;
   },
   getUserByEmail: async (email: string): Promise<any> => {
      const result = await connection
         .select("*")
         .from(userTableName)
         .where({ email });

      return result[0];
   },
   getUserById: async (id: string): Promise<any> => {
      const result = await connection
         .select("*")
         .from(userTableName)
         .where({ id });

      return result[0];
   },
   delUserById: async (id: string): Promise<any> => {
      const result = await connection
         .raw(`DELETE FROM User WHERE (id = '${id}')`)

      return result[0].affectedRows;
   }

}
export default modelUser;