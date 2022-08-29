const express = require('express');
const exphbs  = require('express-handlebars');
const conn    = require('./db/conn')

const app = express()

const Task = require('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/tasks',tasksRoutes)

app.use(express.static('public'))


conn
.sync()
.then(()=>{
    app.listen(5000)
})
.catch((err)=>{console.log(err)})