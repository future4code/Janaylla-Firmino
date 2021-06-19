import { app } from "./controller/app"
import { task } from "./routes/task";
import { user } from "./routes/user";

app.use('/user', user)
app.use('/task', task)