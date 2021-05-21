import express, { Request, Response } from 'express'
import cors from 'cors'
import { send } from 'process'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())


app.get("/users/all", (req: Request, res: Response) => {
  res.status(200).send(users)
  // *a. Qual método HTTP você deve utilizar para isso?*
// GET
// *b. Como você indicaria a **entidade** que está sendo manipulada?*  
// Pele url
})

app.get("/users/type/:type", (req: Request, res: Response) => {
//   *a.* Como você passou os parâmetros de type para a requisição? Por quê?
// pela url porque n é uma infomação confidencial e unica
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// com o if e n fiz distinção entre letra maiusculas e minussculas
  try{
    const {type} = req.params;
    if(type.toUpperCase() != "NORMAL" && type.toUpperCase() != "ADMIN"){
      throw new Error("Type something");
    }else{
      res.status(200).send(
        users.filter(user => user.type = type.toUpperCase())
      );
    }
  }
  catch(error){
    res.status(400).send({ message: error.message });
  }

})

app.get("/users/name/:name", (req: Request, res: Response) => {
  
  // *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
  // query parametros

    try{
      const {name} = req.params;

      if(name && typeof(name) === "string"){
       let result = users.filter(user =>
         user.name.toLowerCase().includes(name.toLowerCase())
         )
         if(result.length > 0){
          res.status(400).send(users);
         }
         else{
          throw new Error("No users were found");
         }
        
      }else{
        throw new Error("Type something");
      }
    }
    catch(error){
      res.status(400).send({ message: error.message });
    }
  
  })
  
app.post("/user", (req: Request, res: Response) => {
    try{
      const {
           age,
           email,
           id,
           name,
           type 
      }:User = req.body;
      const newUser:User = { 
        id,
        name,
        age,
        type,
        email
      }
      if(users.push(newUser)){
        res.status(200).send({ message: "new user added" });
      }
    }
    catch(error){
      res.status(400).send({ message: error.message });
    }
  
  })
    
app.put("/user", (req: Request, res: Response) => {
  // a. Mude o método do endpoint para `PUT`. O que mudou?
  // Na hora de escrever o codigo apenas a palavra. Porem as requisições tem comportamentos diferente
  // b. Você considera o método `PUT` apropriado para esta transação? Por quê?
  // Sim, porque essa requisição altera uma lista, e se n quisermos varias ocorrendo ao mesmo tempo o put é uma boa opção

  try{
    const {
         age,
         email,
         id,
         name,
         type 
    }:User = req.body;
    
    const newUser:User = { 
      id,
      name,
      age,
      type,
      email
    }
    if(users.push(newUser)){
      res.status(200).send({ message: "new user added" });
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

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
