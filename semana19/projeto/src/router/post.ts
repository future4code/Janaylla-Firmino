import express, { Express} from "express"
import {createPost} from '../business/post/createPost'
import { getPost } from "../business/post/getPost"

const app: Express = express();

app.post('/create', createPost)

app.get('/:id', getPost)

export {app as post}