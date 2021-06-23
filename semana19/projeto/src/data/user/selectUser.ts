import { connection } from "../../connection";

export const selectUser = async (
    email: string
) => {
    const queryResult: any = await connection("labook_users")
    .select("*")
    .where({ email })

    return queryResult[0]
}