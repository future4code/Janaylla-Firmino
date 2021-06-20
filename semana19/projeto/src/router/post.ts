import express, { Express} from "express"
import {createPost} from '../business/post/createPost'
import { selectPost } from "../data/post/selectPost"

const app: Express = express();

app.post('/create', createPost)

app.get('/:id', selectPost)

export {app as post}