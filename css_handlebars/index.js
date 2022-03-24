const express = require('express');
const exphbs  = require('express-handlebars');
const app     = express();

const hbs     = exphbs.create({
    partialsDir:['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res)=>{
    const users = [{
        name: 'Rogério',
        profission : 'Programador'
    },
    {
        name: 'Lohana',
        profission : 'Fonoaudióloga'
    }
]
   

 const auth = true;
    res.render('home',{users:users, auth})
})



app.listen(3000, ()=>{
    console.log('rodando na porta 3000')
})