import { app } from "../controller/app"
import { signup } from '../controller/user/signup'
import { login } from '../controller/user/login'

app.post('/signup', signup)
app.post('/login', login)

export {app as user}