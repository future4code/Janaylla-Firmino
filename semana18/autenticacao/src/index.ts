import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import {generateId} from "./services/idGenerator";
import {generateToken, getTokenData} from "./services/authenticator"
import login from "./endpoints/login";

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit/', editUser);