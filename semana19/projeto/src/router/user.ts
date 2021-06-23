import express, { Express} from "express"
import {signup} from '../business/user/signup'
import { login } from "../business/user/login"
import {createFriendship} from '../business/user/createFriendship'
const app: Express = express();

app.post('/signup', signup)

app.post('/login', login)

app.post('/friendship/:userId', createFriendship)


export {app as user}