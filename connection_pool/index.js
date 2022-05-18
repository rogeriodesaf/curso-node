const express = require('express');
const exphbs  = require('express-handlebars')
const pool    = require('./db/conn')

const app     = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(5000)

app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/series/insert',(req,res)=>{
    
    const title = req.body.title
    const episodios = req.body.episodios

    const sql = `INSERT INTO serie (title, episodios) VALUES ('${title}',${episodios})`
    pool.query(sql,function(err){
        console.log(err)
        return
    })
    res.redirect('/series')

})

app.get('/series',(req,res)=>{
    const sql = `SELECT * FROM serie`
    pool.query(sql,function(err,data){
        if(err){
            console.log(err)
            return
        }
        const series = data
        res.render('series',{series})
    })
})

app.get('/individual/:id',(req,res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM serie WHERE id = ${id}`
    pool.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        const serie = data[0]
        res.render('individual',{serie})
    })
})

app.get('/update/:id',(req,res)=>{
    const id = req.params.id
    

    const sql = `SELECT * FROM serie WHERE id = ${id}`
    pool.query(sql,function(err,data){
        if(err){
            console.log(err)
            return
        }
        const series = data[0]
        res.render('update',{series})
    })
})



app.post('/series/updateserie',(req,res)=>{
    const id = req.body.id
    const title = req.body.title
    const episodios = req.body.episodios

    const sql = `UPDATE serie SET title = '${title}', episodios = '${episodios}' WHERE id = ${id}`
    pool.query(sql,function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/series')
    })
})


app.post('/series/delete/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM serie WHERE id = ${id}`
    pool.query(sql,function(err){
        if(err){
            console.log(err)
        }

    })
    res.redirect('/series')
})
