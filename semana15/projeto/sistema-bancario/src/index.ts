import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { transaction, user } from './types'

const app: Express = express();
let users:user[] = [];

function updateUsers():void{
    let fs = require('fs');
    fs.readFile('./src/users.json', function readFileCallback(err:any, data:any) {
        if (err) {
            console.log(err);
        } else {
            users = JSON.parse(data);
        }
    });
}
updateUsers()

function updateArrayUsers(users: user[]): void {
    // // criando uma requisição para o módulo filesystem
    let fs = require('fs');

    fs.writeFile ("./src/users.json", JSON.stringify(users), function(err:any) {
        if (err) throw err;
        console.log('complete');
        }
    );

}


app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send({ users })
})

app.get("/balance", (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.query;
        if (name && cpf) {
            const user = users.find(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if (user) {
                res.status(200).send({ balance: user.balance });
            }
            else {
                throw new Error("User not found");
            }
        }
        else {
            throw new Error("Incorrect type");
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
})

function newTransaction(userIndex: number, value: number, date: Date, descriprion: string): void {
    const newTransaction: transaction = {
        value: value,
        date: date.toLocaleDateString("af"),
        description: descriprion
    }
    users[userIndex].extract.push(newTransaction)
    updateArrayUsers(users)
}
function updateBalance(userIndex: number): void {
    const dateNow = new Date();
    users[userIndex].balance = users[userIndex].extract.reduce(
        (total, transfer) => {
            const date = new Date(transfer.date)
            console.log("Tes", dateNow.getTime() - date.getTime())
            console.log("DAte", transfer.date)
            return total += dateNow.getTime() - date.getTime() >= 0 ? transfer.value : 0;
        }, 0);
    updateArrayUsers(users)
}

app.put("/balance/new", (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.query;
        const { value } = req.body;
        if (name && cpf) {
            const userIndex = users.findIndex(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if (userIndex === -1) {
                throw new Error("User not found");
            }
            if (isNaN(value) || Number(value) < 0) {
                throw new Error("Balance sheet not informed");
            }

            const dateNow = new Date();
            newTransaction(userIndex, Number(value), dateNow, "Depósito de dinheiro")
            res.status(200).send({ message: "New balance added" });

        }
        else {
            throw new Error("Incorrect type");
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
})

app.put("/balance/update", (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.query;
        const { value } = req.body;
        if (name && cpf) {
            const userIndex = users.findIndex(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if (userIndex === -1) {
                throw new Error("User not found");
            }
            updateBalance(userIndex)
            res.status(200).send({ message: "Update balance" });
        }
        else {
            throw new Error("Incorrect type");
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
})

app.put("/payment", (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.query;
        const { value, descriprion, date } = req.body;
        if (name && cpf) {
            const userIndex = users.findIndex(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if (userIndex === -1) {
                throw new Error("User not found");
            }
            if (isNaN(value) || Number(value) < 0) {
                throw new Error("Value sheet not informed");
            }
            if (!descriprion || typeof (descriprion) != "string") {
                throw new Error("Descriprion sheet not informed");
            }
            const dateNow = date ? new Date(date) : new Date();
            if (dateNow) {
                throw new Error("Invalid date");
            }
            newTransaction(userIndex, Number(value) * -1, dateNow, descriprion)
            res.status(200).send({ message: "Updated balance, payment done" });

        }
        else {
            throw new Error("Incorrect type");
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
})

app.post("/transfer", (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.query;
        const { value, descriprion, cpfRecipient, nameRecipient } = req.body;
        if (!name || !cpf || !cpfRecipient || !nameRecipient) {
            throw new Error("Incorrect type");
        }
        const userIndex = users.findIndex(user => {
            return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
        })

        const recipientIndex = users.findIndex(user => {
            return user.cpf === cpfRecipient && user.name.toLowerCase() === nameRecipient.toString().toLowerCase()
        })
        if (userIndex === -1) {
            throw new Error("User not found");
        }
        if (recipientIndex === -1) {
            throw new Error("Recipient not found");
        }
        if (isNaN(value) || Number(value) < 0) {
            throw new Error("Value sheet not informed");
        }
        if (!descriprion || typeof (descriprion) != "string") {
            throw new Error("Descriprion sheet not informed");
        }
        if (Number(value) > users[userIndex].balance) {
            throw new Error("Insufficient funds");
        }

        const dateNow = new Date();
        newTransaction(userIndex, Number(value) * -1, dateNow, descriprion)
        newTransaction(recipientIndex, Number(value), dateNow, descriprion)
        res.status(200).send({ message: "Amount sent" });


    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
})

app.post("/user", (req: Request, res: Response) => {

    function moreThan18Years(birt: Date): boolean {
        const now = new Date()
        const yearDifference = now.getFullYear() - birt.getFullYear(),
            mounthDifference = now.getMonth() - birt.getMonth(),
            dateDifference = now.getDate() - birt.getDate();
        if (
            (yearDifference < 18) ||
            (yearDifference === 18 &&
                mounthDifference < 0) ||
            (
                yearDifference === 18 &&
                mounthDifference === 0 &&
                dateDifference <= 0
            )) {
            return false;
        }
        else {
            return true;
        }
    }

    try {
        const { name, cpf, birtDate } = req.body;

        const birt = new Date(birtDate)

        const cpfExists = users.findIndex((user) => {
            return user.cpf === cpf
        }
        )
        if (typeof (name) === "string" &&
            cpfExists === -1 &&
            birt && moreThan18Years(birt)) {
            const newUser: user = {
                name,
                cpf,
                birtDate,
                extract: [],
                balance: 0
            };
            users.push(newUser);
            updateArrayUsers(users)
            res.status(200).send({ message: "New user dictionary" });
        }
        else {
            throw new Error("Incorrect type");
        }
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});

