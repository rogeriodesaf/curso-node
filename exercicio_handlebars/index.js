const express = require('express');
const exphbs  = require('express-handlebars');
const app     = express();


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const produtos = [
    {
        id: 1,
        tipo: "tv",
        preco: 2000
    },
    {
        id: 2,
        tipo: "notedbook",
        preco: 4000
    }
]


app.get('/',(req, res)=>{
    res.render('home',{produtos})
})

app.get('/produtos/:id',(req, res)=>{
    const products = produtos[req.params.id -1]
    res.render('produtos',{products});
})

app.listen(3000,()=>{
    console.log('Rodando na porta 3000')
})