const express = require('express');
const exphbs  = require('express-handlebars');
const app     = express();


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

<<<<<<< HEAD
app.use(express.static('public'))


const produtos = [{
    id: "1",
    produto : "tv",
    preco   : 1000
},
{
    id: "2",
    produto : "sofá",
    preco   : 2000
}];

app.get('/',(req, res)=>{
    
    res.render('home',{produtos})
})


app.get('/product/:id', (req, res)=>{
    
    const productos = produtos[parseInt(req.params.id) - 1];
    res.render('product',{productos})
})





app.listen(4000,()=>{
    console.log('escutando na porta 4000')
=======
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
>>>>>>> 9b24c182397a003f9c7ed5d2894b89e5c84147d7
})