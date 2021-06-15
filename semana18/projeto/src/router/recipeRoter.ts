import express from 'express';
import {recipeController} from '../controller/recipeController'
const Router = express.Router();
Router.post('', recipeController.create)
Router.post('/edit/:id', recipeController.edit)
Router.delete('/:id', recipeController.delete)
Router.get('/:id', recipeController.getById)

export {Router as recipe}
