export type transaction = {
    value: number,
    date: string,
    description?: string
}
export type user = {
    name: string,
    cpf: string,
    birtDate: string,
    extract: transaction[],
    balance: number
}