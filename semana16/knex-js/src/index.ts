import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";

app.get("/", (req, res) => { res.send("Hello, world!") })

app.get("/actor", (req, res) => {
  const name = typeof (req.body.name) == "string" ? req.body.name : "";
  if (name) {
    connection.raw(`
      SELECT * FROM Actor WHERE name = ${name}
    `).then((resp) => {
      res.status(200).send({ actors: resp[0] })
    }).catch(() => {
      res.status(400).send({ menssage: "Faild" })
    })
  }
  else{
    res.status(400).send({ menssage: "Name not send" })
  }

})

app.get("/actor/count/:gender", (req, res) => {
  const gender = req.params.gender;
  if (gender) {
    connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `).then((resp) => {
    res.status(200).send({ quantyGender: resp[0][0] })
  }).catch(() => {
    res.status(400).send({ menssage: "Faild" })
  })
  }
  else{

    res.status(200).send({ menssage: "Gender not send" })
  }

})


app.put("/actor/update", (req, res) => {
  const  updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id)
      .then(() =>{
        res.status(200).send({ menssage: "Update Actor" })
      })
      .catch(() =>{
        res.status(200).send({ menssage: "Not update Actor" })
      });
      };
      const id = typeof (req.body.id) == "string" ? req.body.id : "";
      const salary = typeof (req.body.salary) == "number" ? req.body.salary : "";

      updateActor(id, salary)
})
