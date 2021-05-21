import express, { Request, Response, Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());
// 1. Crie um **tipo** para representar uma conta para o usuário
type transaction = {
    value: number,
    date: string,
    description?: string
}
type user = {
    name: string,
    cpf: string,
    birtDate: string,
    extract: transaction[],
    balance: number
}
let users:user[] = [
    {
        name: "Janaylla",
    cpf: "12312312398",
    birtDate: "2001-06-05",
    extract: [
        {
            value: 123,
            date: "21-02-2021",
            description: "Minha primeira transação" 
        },
        {
            value: -21,
            date: "21-02-2021",
            description: "Açai" 
        }
    ],
    balance: 102
    },
    {
        name: "Kelvia",
        cpf: "12345678900",
        birtDate: "1990-06-05",
        extract: [],
        balance: 0
    }
]

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send({users})
})

app.get("/balance", (req: Request, res: Response) => {
    try{
        const {name, cpf} = req.query;
        if(name && cpf){
            const user = users.find(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if(user){
                res.status(200).send({ balance: user.balance });
            }
            else{
                throw new Error("User not found");
            }
        }
        else{
            throw new Error("Incorrect type");
        }
      }
    catch(error){
        res.status(400).send({ message: error.message });
    }
})

function newTransaction(userIndex:number, value:number, date:Date, descriprion: string):void{
    const newTransaction:transaction = {
        value: value,
        date: date.toLocaleDateString("af"),
        description: descriprion
    }
    users[userIndex].extract.push(newTransaction)
    users[userIndex].balance = users[userIndex].extract.reduce(
        (total,user) =>{
            return total+= user.value;
    }, 0) ;

}

app.put("/balance", (req: Request, res: Response) => {
    try{
        const {name, cpf} = req.query;
        const {value} = req.body;
        if(name && cpf){
            const userIndex = users.findIndex(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if(userIndex === -1){
                throw new Error("User not found");
            }
            else if(isNaN(value) || Number(value) < 0 ){
                throw new Error("Balance sheet not informed");
            }
            else{
                const dateNow = new Date();
                newTransaction(userIndex, Number(value),dateNow, "Deposito")
                res.status(200).send({message: "Updated balance"});
            }
        }
        else{
            throw new Error("Incorrect type");
        }
      }
    catch(error){
        res.status(400).send({ message: error.message });
    }
})

app.put("/payment", (req: Request, res: Response) => {
    try{
        const {name, cpf} = req.query;
        const {value, descriprion} = req.body;
        if(name && cpf){
            const userIndex = users.findIndex(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })
            if(userIndex === -1){
                throw new Error("User not found");
            }
            else if(isNaN(value) || Number(value) < 0 ){
                throw new Error("Value sheet not informed");
            }
            else if(!descriprion || typeof(descriprion) != "string"){
                throw new Error("Descriprion sheet not informed");
            }
            else{
                const dateNow = new Date();
                newTransaction(userIndex, Number(value)*-1, dateNow, descriprion)
                res.status(200).send({message: "Updated balance, payment done"});
            }
        }
        else{
            throw new Error("Incorrect type");
        }
      }
    catch(error){
        res.status(400).send({ message: error.message });
    }
})

app.put("/transfer", (req: Request, res: Response) => {
    try{
        const {name, cpf} = req.query;
        const {value, descriprion, cpfRecipient, nameRecipient } = req.body;
        if(name && cpf && cpfRecipient && nameRecipient){
            const userIndex = users.findIndex(user => {
                return user.cpf === cpf && user.name.toLowerCase() === name.toString().toLowerCase()
            })

            const recipientIndex = users.findIndex(user => {
                return user.cpf === cpfRecipient && user.name.toLowerCase() === nameRecipient.toString().toLowerCase()
            })
            if(userIndex === -1){
                throw new Error("User not found");
            }
            else if(recipientIndex === -1){
                throw new Error("Recipient not found");
            }
            else if(isNaN(value) || Number(value) < 0){
                throw new Error("Value sheet not informed");
            }
            else if(!descriprion || typeof(descriprion) != "string"){
                throw new Error("Descriprion sheet not informed");
            }
            else if(Number(value) > users[userIndex].balance){
                throw new Error("Insufficient funds");
            }
            else{
                const dateNow = new Date();
                newTransaction(userIndex, Number(value)*-1, dateNow, descriprion)
                newTransaction(recipientIndex, Number(value), dateNow, descriprion)
                res.status(200).send({message: "Amount sent"});
            }
        }
        else{
            throw new Error("Incorrect type");
        }
      }
    catch(error){
        res.status(400).send({ message: error.message });
    }
})


app.post("/user", (req: Request, res: Response) => {
    function moreThan18Years(birt:Date):boolean|undefined{
        const now = new Date()
        if(now.getFullYear() - birt.getFullYear() < 18){
            return false;
        }
        else if(now.getFullYear() - birt.getFullYear() === 18 && 
        now.getMonth() - birt.getMonth() < 0
        ){
            return false;
        }
        else if(now.getFullYear() - birt.getFullYear() === 18 && 
        now.getMonth() - birt.getMonth() === 0 && 
        now.getDate() - birt.getDate() <= 0
        ){
            return false;
        }
        else{
            return true;
        }
    }
    try{
        const {name, cpf, birtDate} = req.body;
        
        const birt = new Date(birtDate)
        
        const cpfExists = users.findIndex((user) => {
            return user.cpf === cpf
        }
        )
        if(typeof(name) === "string" &&
        cpfExists === -1 && 
        birt && moreThan18Years(birt)){
           const newUser:user = {
            name,
            cpf,
            birtDate,
            extract: [],
            balance: 0
           };
           users.push(newUser);
           res.status(200).send({ message: "New user dictionary"});
        }
        else
        {
            throw new Error("Incorrect type");
        }
    }
    catch(error){
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

