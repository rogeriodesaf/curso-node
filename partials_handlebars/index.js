const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
    partialsDir:['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const users = {
        name: 'Rogério',
        sobrenome: 'de Sá',
        profission: 'Programador'
    }
    const auth = true
    res.render('home', { users: users, auth })
})

app.get('/dashboard', (req, res) => {
    const members = ['Rogério', 'Lohana', 'Ewerton']
    res.render('dashboard', { members })
})

app.get('/blog', (req, res) => {
    const cursos = {
        title: 'Aprenda PHP',
        category: 'PHP',
        body: 'Aqui você vai aprender o framework Laravel'
    }
    res.render('blogspot', { cursos })
})

app.get('/posts', (req, res) => {
    const postagens = [
        {
            title: 'Aprenda PHP',
            category: 'PHP',
            body: 'Aqui você vai aprender o framework Laravel'
        },
        {
            title: 'Aprenda Java',
            category: 'Java',
            body: 'Aqui você vai aprender o framework Springboot'
        },
        {
            title: 'Aprenda Ruby',
            category: 'Ruby',
            body: 'Aqui você vai aprender Ruby'
        }
    ]
    res.render('cursos',{postagens})
})
    









app.listen(3000, () => { console.log('rodando na porta 3000') })