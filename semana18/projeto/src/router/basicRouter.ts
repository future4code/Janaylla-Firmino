import express from 'express';
const Router = express.Router();
import {userController} from '../controller/userController'


Router.post('/signUp', userController.create )
Router.post('/login', userController.login )

export {Router as basicRouter}