import { connection } from "../../connection";

export const selectPost = async (
    id: string
) => {
    const queryResult = await connection("labook_users")
        .select("*")
        .where({ id })
    return queryResult[0]
}