import {User} from '../src/model/user'
import {performPurchase} from '../src/business/performPurchase'

describe("Testando a validação se o usuário tem saldo para comprar", () => {

    test("Testando usuário com saldo maior que o valor de compra", () => {
        const user: User = { name: 'Janaylla', balance: 5000}

        const result = performPurchase(user, 1000)

        expect(result).toEqual({ 
            name: 'Janaylla',
            balance: 4000
        })
    })

    test("Testando usuário com saldo igual o valor de compra", () => {
        const user: User = { name: 'Janaylla', balance: 5000}

        const result = performPurchase(user, 5000)

        expect(result).toEqual({ 
            name: 'Janaylla',
            balance: 0
        })

    })

    test("Testando usuário com saldo menor que o valor de compra", () => {
        const user: User = { name: 'Janaylla', balance: 5000}

        const result = performPurchase(user, 90000)

        expect(result).toBe(undefined)
    })
}) 