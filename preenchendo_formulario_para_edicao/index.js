const express = require('express');
const exphbs  = require('express-handlebars');
const mysql   = require('mysql');

const app    = express();

app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
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
        return
    }
    app.listen(5000)
    console.log('conectado ao Mysql!')
})

app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/animes/insertanimes',(req,res)=>{
    const title = req.body.title
    const page  = req.body.page

    const sql = `INSERT INTO books (title,page) VALUES ('${title}','${page}')`
    conn.query(sql,function(err){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/animes')
    })
})

app.get('/animes',(req,res)=>{
    const sql = "SELECT * FROM books"
    conn.query(sql,function(err,data){
        if(err){
            console.log(err)
            return
        }
        const animes = data
        res.render('animes',{animes})
    })
})

app.get('/animes/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sql,function(err,data){
        if(err){
            console.log(err)
            return
        }
        const anime = data[0]
        res.render('anime',{anime})
    })
})

app.get('/animes/edit/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        const anime = data[0]
        res.render('animeedit',{anime})
    })
})

app.post('/anime/updateanime', (req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const page = req.body.page

    const sql = `UPDATE books SET title = '${title}', page = '${page}' WHERE id = ${id}`
    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/animes')
    })
})

app.post('/anime/remove/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM books WHERE id = '${id}'`
    conn.query(sql,function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/animes')
    })
})