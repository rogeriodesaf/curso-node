const e = require('express');
const express = require('express');
const exphbs  = require('express-handlebars');

const mysql   = require('mysql');

const app     = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/',(res, req)=>{
    res.render('home')
})

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mysql2',
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log( 'conectou ao Banco de Dados')
    }
    app.listen(4000)
})
