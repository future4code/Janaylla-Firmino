import { app } from "../controller/app"
import { createTask } from '../controller/task/createTask'
import { getTaskById } from '../controller/task/getTaskById'

app.put('', createTask)
app.get('/:id', getTaskById)

export {app as task}