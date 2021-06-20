import express, { Express} from "express"
import {signup} from '../business/user/signup'
import { login } from "../business/user/login"

const app: Express = express();

app.post('/signup', signup)

app.post('/login', login)


export {app as user}