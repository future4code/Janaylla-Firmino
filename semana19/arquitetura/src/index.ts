import { app } from "./app"
import { signup } from './business/signup'
import { login } from './business/login'
import {getUsers} from './business/getUsers'
import {delUser} from './business/delUser'

app.post('/user/signup', signup)
app.post('/user/login', login)
app.get('/user/all', getUsers)
app.delete('/user/:id', delUser)


