import { Request, Response } from 'express'
import generateId from '../services/generateId'
import modelUser from '../model/userModel'
import generateToken, {getData} from '../services/generateToken'
import {compare, hash} from '../services/encriptPassword'
const userController = {
  create: async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }

      const id = generateId();
      const userData = {
        id: id,
        email: req.body.email,
        password: await hash(req.body.password as string),
        role: req.body.role as string
      };

      const affect = await modelUser.createUser(userData);

      if (affect === 0) {
        throw Error("Affect not rows")
      }
      const token = generateToken({
        id, role: userData.role
      });
      console.log(token)
      res.status(200).send({
        token
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  },
  login: async (req: Request, res: Response): Promise<any> => {
    try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await modelUser.getUserByEmail(userData.email);


      const passEquals = await compare(userData.password, user.password)
      
      if (!passEquals) {
        throw Error("User not found")
      }
      if (!compare(userData.password, user.password)) {
        throw Error("Password incorrect")
      }
      const token = generateToken({
        id: user.id as string, role: user.role as string
      });

      res.status(200).send({
        token
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  },
   getUserByToken: async (req: Request, res: Response): Promise<any> => {
    try {
      const token = req.headers.authorization as string;

      if (!token) {
        throw new Error("Invalid Token");
      }
      const id = await getData(token).id as string 
      const user = await modelUser.getUserById(id)

      if (!user) {
        throw Error("User not found")
      }
      if(user.role != "Normal"){
        throw Error("Unauthorized")
      }
      res.status(200).send({
        user
      });

    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }, 
  getUserByToken2: async (req: Request, res: Response): Promise<any> => {
    try {
      const token = req.headers.authorization as string;

      const id = getData(token).id as string 
      const user = await modelUser.getUserById(id)

      if (!user) {
        throw Error("User not found")
      }
      res.status(200).send({
        id: user.id,
        email: user.email
      });

    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  },
  del:async (req: Request, res: Response): Promise<any> => {
    try {
      const token = req.headers.authorization as string;

      if (!token) {
        throw new Error("Invalid email");
      }
      const role = getData(token)

      console.log(role, token)
      
      if(role.role != "Admin"){
        throw Error("Unauthorized")
      }
      const idUser = req.params.id; 
      const affect = await modelUser.delUserById(idUser)

      if (affect === 0) {
        throw Error("User not delete")
      }
      res.status(200).send({
        message: "User delete"
      });

    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
  // profile
}
export default userController