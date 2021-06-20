import { connection } from "../../connection";

export const selectUser = async (
    id: string
) => {
    const queryResult: any = await connection("labook_posts")
    .select("*")
    .where({ id })

    return queryResult[0]
}