import express from 'express';
import {recipeController} from '../controller/recipeController'
const Router = express.Router();
Router.post('', recipeController.create)
Router.get('/:id', recipeController.getById)

export {Router as recipe}
