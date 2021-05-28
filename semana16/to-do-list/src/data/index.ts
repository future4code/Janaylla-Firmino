// no index.ts:

import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { validateEmail, validateData } from './funcionsValidate'
dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
   }
});


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => { res.send("Hello, world!") })

// Ex 1
app.put('/user', (req: Request, res: Response) => {
   try {
      const { name, nickname, email } = req.body;
      if (!name || typeof (name) != "string") {
         throw new Error("Invalid name");
      }
      if (!nickname || typeof (nickname) != "string") {
         throw new Error("Invalid nickname");
      }
      if (!email || typeof (email) != "string" || !validateEmail(email)) {
         throw new Error("Invalid email");
      }
      const id = Date.now().toString();

      connection.raw(`
      INSERT INTO TodoListUser value (${id}, '${name}', '${nickname}', '${email}')
      `)
         .then(() => {
            res.status(400).send({ message: 'New user added' })
         })
         .catch(() => {
            res.status(500).send({ message: 'It was not possible to add a new user' })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 8
app.get('/user', (req: Request, res: Response) => {
   try {
      const { query } = req.query;

      if (!query && query !== "") {
         throw new Error("Query not send");
      }

      connection.raw(`SELECT id, name FROM TodoListUser WHERE name LIKE '%${query}%' or email LIKE '%${query}%';`)
         .then((resp) => {
            res.status(200).send({ users: resp[0] })
         })
         .catch((erro) => {
            res.status(500).send({ message: 'Error' })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})


// Ex 6
app.get('/user/all', (req: Request, res: Response) => {
   try {
      connection.raw(`SELECT id, name FROM TodoListUser`)
         .then((resp) => {
            if (resp[0].length === 0) {
               res.status(400).send({ message: 'User not found' })
            }
            res.status(200).send({ users: resp[0] })
         })
         .catch((erro) => {
            res.status(500).send({ message: erro })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 2
app.get('/user/:id', (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      connection.raw(`SELECT id, name FROM TodoListUser where id = '${id}'`)
         .then((resp) => {
            if (resp[0].length === 0) {
               res.status(400).send({ message: 'User not found' })
            }
            res.status(200).send({ user: resp[0][0] })
         })
         .catch((erro) => {
            res.status(500).send({ message: erro })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 3
app.post('/user/:id', (req: Request, res: Response) => {
   try {

      const { id } = req.params;

      const { name, nickname, email } = req.body;
      if (typeof (name) != "undefined" && (typeof (name) != "string" || name == "")) {
         throw new Error("Invalid name");
      }
      if (typeof (nickname) != "undefined" && (typeof (nickname) != "string" || nickname == "")) {
         throw new Error("Invalid nickname");
      }
      if (typeof (email) != "undefined" && (typeof (email) != "string" || email == "" || !validateEmail(email))) {
         throw new Error("Invalid email");
      }

      let param = [], paramString = "";
      if (name)
         param.push(`name = "${name}"`)
      if (nickname)
         param.push(`nickname = "${nickname}"`)
      if (email)
         param.push(`email = "${email}"`)

      if (param.length === 0) {
         throw new Error("No parameters were passed");
      }

      if (param.length === 1) {
         paramString = param[0];
      }
      else if (param.length === 2) {
         paramString = param[0] + ", " + param[1];
      }
      else if (param.length === 3) {
         paramString = param[0] + ", " + param[1] + ", " + param[2];
      }

      connection.raw(`
      UPDATE TodoListUser SET ${paramString} WHERE id = '${id}'
      `)
         .then(() => {
            res.status(400).send({ message: 'User Update' })
         })
         .catch((err) => {
            res.status(500).send({ message: err })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 7
app.get('/task', (req: Request, res: Response) => {
   try {
      const { creatorUserId } = req.query;

      connection.raw(`
      SELECT tl.id as taskId, tl.title, tl.description, 
      DATE_FORMAT(STR_TO_DATE(tl.limit_date, '%Y-%m-%d'), '%d/%m/%Y') as limit_date,
      tl.creator_user_id as creatorUserId,
      tl.status,
      u.nickname as creatorUserNickname
       FROM TodoListTask tl 
      JOIN TodoListUser u on u.id = tl.creator_user_id
      where creator_user_id  = '${creatorUserId}'`)
         .then((resp) => {
            if (resp[0].length === 0) {
               res.status(400).send({ message: 'Tasks not found' })
            }
            const task = { ...resp[0][0] }
            res.status(200).send({ user: task })
         })
         .catch((erro) => {
            res.status(500).send({ message: erro })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 4
app.put('/task', (req: Request, res: Response) => {
   try {
      const { title, description, limitDate, creatorUserId } = req.body;
      if (!title || typeof (title) != "string") {
         throw new Error("Invalid title");
      }
      if (!description || typeof (description) != "string") {
         throw new Error("Invalid description");
      }
      if (!limitDate || typeof (limitDate) != "string" || !validateData(limitDate)) {
         throw new Error("Invalid limite Date");
      }
      if (!creatorUserId || typeof (creatorUserId) != "string") {
         throw new Error("Invalid Id User");
      }
      const id = Date.now().toString() + creatorUserId;

      connection.raw(`
      INSERT INTO TodoListTask 
      (id, title, description, limit_date, creator_user_id) value 
      ('${id}', '${title}', '${description}', '${validateData(limitDate)}', '${creatorUserId}')
`)
         .then(() => {
            res.status(400).send({ message: 'New task added' })
         })
         .catch(() => {
            res.status(500).send({ message: 'It was not possible to add a new task' })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 5 e 11
app.get('/task/:id', (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      connection.raw(`SELECT t.id as 'taskId', t.title, t.description,
      DATE_FORMAT(STR_TO_DATE(t.limit_date, '%Y-%m-%d'), '%d/%m/%Y') as limit_date, t.status, t.creator_user_id as 'creatorUserId', u.nickname as 'creatorUserNickname' FROM TodoListTask t JOIN TodoListUser u ON u.id = t.creator_user_id where  t.id = '${id}'`)
         .then((resp) => {
            if (resp[0].length === 0) {
               res.status(400).send({ message: 'User not found' })
            }
            const task = { ...resp[0][0] }

            connection.raw(`SELECT u.id, u.nickname FROM TodoListResponsibleUserTaskRelation r
            INNER JOIN TodoListUser u on u.id = r.responsible_user_id
            WHERE r.task_id = "${id}"`)
               .then((resp2)=> {
                  task.responsibleUsers = resp2[0];
                  res.status(200).send({ task: task })
               })
               .catch(() => {
                  res.status(500).send({ message: "Something went wrong" })
               })

         })
         .catch((erro) => {
            res.status(500).send({ message: "Something went wrong" })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})

// Ex 9
app.post('/task/responsible', (req: Request, res: Response) => {
   try {
      const { task_id, responsible_user_id } = req.body;
      if (!task_id || typeof (task_id) != "string") {
         throw new Error("Invalid task id");
      }
      if (!responsible_user_id || typeof (responsible_user_id) != "string") {
         throw new Error("Invalid user id");
      }

      connection.raw(`
      INSERT INTO TodoListResponsibleUserTaskRelation value 
      ('${task_id}','${responsible_user_id}')`)
         .then(() => {
            res.status(400).send({ message: 'New Responsible added' })
         })
         .catch(() => {
            res.status(500).send({ message: 'It was not possible to add a new Responsible' })
         })

   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})


// Ex 10
app.get('/task/:id/responsible', (req: Request, res: Response) => {
   try {
      const { id } = req.params;

      connection.raw(`SELECT u.id, u.nickname FROM TodoListResponsibleUserTaskRelation r
      INNER JOIN TodoListUser u on u.id = r.responsible_user_id
      WHERE r.task_id = "${id}"`)
         .then((resp) => {
            res.status(200).send({ users: resp[0] })
         })
         .catch((erro) => {
            res.status(500).send({ message: 'Error' })
         })
   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})



// Ex 12
app.post('/task/status/edit', (req: Request, res: Response) => {
   try {
      const { status, id } = req.body;
      if (!status || typeof (status) != "string") {
         throw new Error("Invalid status");
      }
      if (!id || typeof (id) != "string") {
         throw new Error("Invalid id");
      }
      
      connection.raw(`UPDATE TodoListTask SET status = '${status}' WHERE (id = '${id}')`)
         .then(() => {
            res.status(400).send({ message: 'New status update' })
         })
         .catch(() => {
            res.status(500).send({ message: 'It was not possible to update status' })
         })

   }
   catch (err) {
      res.status(400).send({ message: err.message })
   }
})


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});