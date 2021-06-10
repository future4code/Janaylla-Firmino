import {userRouter} from './router/userRouter'
import express from "express";
import { AddressInfo } from "net";
import {config} from "dotenv";

const server = express()
server.use(express.json())
server.use('/user', userRouter)
config();

 const app = server.listen(process.env.PORT || 3003, () => {
    if (app) {
       const address = app.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});