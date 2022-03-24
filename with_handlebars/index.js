const express = require('express');
const exphbs  = require('express-handlebars');
const app     = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res)=>{
    const auth = true
    res.render('home',{auth})
})

app.get('/dashboard',(req, res)=>{
    const membros = [ 'membro a', 'membro b', 'membro c']
    res.render('dashboard',{membros});
})

app.get('/post', (req, res)=>{
    const post = 
        {
            title: 'Aprendendo Javascript',
            category:'Javascript',
            body: 'Aprenda aqui mais sobre o node.js'
        }
    
    res.render('blogspot',{post})
})






app.listen(3000, ()=>{
    console.log('rodando na porta 3000')
});