const express = require('express');
const exphbs  = require('express-handlebars');
const mysql   = require('mysql');

const app     = express();

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mysql2'
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    app.listen(4000)
    console.log('deu certo')
    
})

app.get('/', function(req, res){
    res.render('home')
})

app.post('/animes/insertanimes',(req,res)=>{
    const title = req.body.title
    const  page = req.body.page

    const sql = `INSERT INTO books (title, page) VALUES ('${title}','${page}')`
    conn.query(sql,function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/animes')
    })
})

app.get('/animes',(req, res)=>{
    const sql = "SELECT * FROM books"
    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err)
        }
        const animes = data
        res.render('animes',{animes})
    })
})