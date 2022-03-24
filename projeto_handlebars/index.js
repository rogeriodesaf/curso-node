const express = require('express');
const exphbs  = require('express-handlebars');
const porta   = 3000;
const app     = express();


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res)=>{
    const users = {
        name: 'Rogério',
        age : 30
    }
    res.render('home',{users:users})
})

app.listen(porta, ()=>{
    console.log('rodando na porta', porta)
})