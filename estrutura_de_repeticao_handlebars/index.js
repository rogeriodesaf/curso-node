const express = require('express');
const exphbs  = require('express-handlebars');
const app     = express();
const porta   = 3000;

app.engine('handlebars',exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req,res)=>{
    const users = {
        name:"Rogério"
    }
    const auth = true
    res.render('home',{users:users, auth})
})

app.get('/dashboard',(req,res)=>{
    const items = ['item a', 'item b', 'item c']
    res.render('dashboard',{items})
})

app.get('/post',(req, res)=>{
    res.render('post')
})

app.listen(porta, ()=>{
    console.log('escutando na porta'+ porta );
})