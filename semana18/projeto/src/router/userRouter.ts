import express from 'express';
import {userController} from '../controller/userController'
import {recipeController} from '../controller/recipeController'
const Router = express.Router();
Router.get('/profile', userController.myProfile)
Router.delete('/:id', userController.delete)
Router.get('/feed', recipeController.getByAll)
Router.post('/follow', userController.follow)
Router.post('/unfollow', userController.unfollow)
Router.get('/:id', userController.profile)

export {Router as user}
