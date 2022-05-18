const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn');
const app = express();
const porta = 5000


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'))

app.listen(porta, function () {
    if (true) {
        console.log('Conectado ao Mysql')
    }
})

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/canais/select', (req, res) => {

    const nome = req.body.nome
    const segmento = req.body.segmento

    const sql = `INSERT INTO canal (nome,segmento) VALUES ('${nome}','${segmento}')`
    pool.query(sql, function (err) {
        if (err) {
            console.log(err)
        }
        res.redirect('/table')
    })
})

app.get('/table', (req, res) => {
    const sql = `SELECT * FROM canal`
    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err)
        }
        const canais = data
        res.render('table', { canais })
    })
})

app.get('/single/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM canal WHERE id = ${id}`
    pool.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const canal = data[0]
        res.render('single',{ canal })
    })
})

app.get('/update/:id',(req,res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM canal WHERE id = ${id}`
    pool.query(sql,function(err,data){
        if(err){
            console.log(err)
            return
        }
       const canais = data[0]
       res.render('update',{canais}) 
    })
})

app.post('/canais/update',(req,res)=>{
    const id = req.body.id
    const nome = req.body.nome
    const segmento = req.body.segmento

    const sql = `UPDATE canal SET nome = '${nome}', segmento = '${segmento}' WHERE id = ${id}`
    pool.query(sql,function(err){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/table')
    })
}
    
)


app.post('/canais/delete/:id',function(req,res){
    const id = req.params.id
    const sql = `DELETE FROM canal WHERE id=${id}`
    pool.query(sql,function(err){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/table')
    })
})
















