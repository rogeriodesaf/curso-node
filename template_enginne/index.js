const express = require('express');
const exphbs  = require('express-handlebars');

const app     = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/',(req, res)=>{
    const users = {
        name : 'Rogério',
        age  : 30
    }
    const condition = false;
    res.render('home',{users:users, condition});
})

app.listen(3000, ()=>{
    console.log('rodando na porta 3000')
})