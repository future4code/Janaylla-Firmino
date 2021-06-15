import express from 'express';
import {userController} from '../controller/userController'
const Router = express.Router();
Router.get('/profile', userController.myProfile)
Router.post('/follow', userController.follow)
Router.get('/:id', userController.profile)

export {Router as user}
