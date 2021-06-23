import express, { Express} from "express"
import cors from "cors"
import {user} from './router/user'
import {post} from './router/post'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/users', user)
app.use('/posts', post)

app.listen(3003, () => {
   console.log("Server running on port 3003")
})