const express = require('express')
const exphs   = require('express-handlebars')
const mysql   = require('mysql')

const app    = express();
app.engine('handlebars', exphs.engine());
app.set('view engine','handlebars');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

//CREATE
app.post('/animes/createanime',function(req,res){
    const title    = req.body.title
    const episodio = req.body.episodios

    const sql      = `INSERT INTO anime (title,episodios) VALUE ('${title}','${episodio}')`
    
    conn.query(sql,(function(err){
        if(err){
            console.log(err)
        }
        
        
        res.redirect('/')
    }))
})

//READ
app.get('/animesread',(req,res)=>{
    
    const sql = `SELECT * FROM anime`
    conn.query(sql,function(err,data){
       if(err){
           console.log(err)
       }
       
       const animes = data
       res.render('animesread',{animes})
       
    })
})

//TRAZENDO OS DADOS DE FORMA INDIVIDUAL
app.get('/animesread/:id',(req,res)=>{
    const id = req.params.id
    

    const sql = `SELECT * FROM anime WHERE id = ${id}`
    conn.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        const anime = data[0]
        res.render('animesolo',{anime})
    })      
})

//PREENCHENDO O FORMULÁRIO COM OS DADOS QUE SERÃO ALTERADOS
app.get('/animeedit/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM anime WHERE id = ${id}`
    conn.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        const animes = data[0]
        res.render('animeedit',{animes})
    })
})

//UPDATE
app.post('/animes/editeanime',(req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const episodios = req.body.episodios
    const sql = `UPDATE anime SET title = '${title}', episodios = '${episodios}' WHERE id = ${id}`
    conn.query(sql,function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/animesread')
    })
})

//DELETE
app.post('/animes/delete/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM anime WHERE id = ${id}`
    conn.query(sql,function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/animesread')
    })
})

















const conn = mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'',
    database:'animes'
});

conn.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('Conectado ao Mysql!')
    }
    app.listen(5000)
})