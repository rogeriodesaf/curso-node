const express = require('express');
const exphbs  = require('express-handlebars');
const mysql   = require('mysql');

const app     = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:true,}),)
app.use(express.json())

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('home')
})

app.post('/body/insertbody',(req, res)=>{
    const title = req.body.title
    const page  = req.body.page

    const sql = `INSERT INTO books (title,page) VALUES ('${title}','${page}')`

    conn.query(sql,function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/')
    });
})

const conn = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'',
    database:'mysql2'

})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('conectado ao BD')
    app.listen(4000)
})