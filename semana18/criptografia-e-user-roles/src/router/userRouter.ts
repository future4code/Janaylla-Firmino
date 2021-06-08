import express from 'express';
const Router = express.Router();
import userController from '../controller/userController'

Router.post('/signUp', userController.create)
Router.post('/login', userController.login)
Router.get('/profile', userController.getUserByToken)
Router.delete('/:id', userController.del)
Router.get('', userController.getUserByToken2)
// login

export {Router as userRouter}