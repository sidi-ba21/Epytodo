const db = require('./config/db')
const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT
require('dotenv').config()

const regis = require('./routes/auth/register')
const auth = require('./routes/auth/auth')
const user = require('./routes/user/user')
const user_query = require('./routes/user/user.query')
const todo = require('./routes/todos/todos')
const todo_query = require('./routes/todos/todos.query')
app.use(bodyparser.json());

regis.register(app)
auth.login(app)
user.init_user(app)
user_query.init_user_query(app)
todo.init_todos(app)
todo_query.init_todos_query(app)

app.listen(port, () => {
    console.log(`Example app listening at http://${process.env.MYSQL_HOST}:${process.env.PORT}`);
  })