import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";

const searchByNameActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}
const countActorsByGener = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) Actor WHERE gender = "${gender}"
  `)
  return result
}

app.get("/", (req, res) => { res.send("Hello, world!") })

app.get("/actor", (req, res) => { 
    const name = typeof(req.body.name) == "string"? req.body.name: "";
    if(name){
        res.send(searchByNameActor(name))
    }
    res.status(200).send({menssage: "Name not send"})
    
})

app.get("/actor/count/:gender", (req, res) => { 
  const gender = req.params.gender
  if(gender){
      res.send(searchByNameActor(gender))
  }
  res.status(200).send({menssage: "Name not send"})
  
})
