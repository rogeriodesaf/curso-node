
const express = require('express');
const exphbs = require('express-handlebars');


const conn = require('./db/conn')

const Users = require('./models/Users')
const Adress = require('./models/Adress')


const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const ocuppation = req.body.ocuppation
    let newsletter = req.body.newsletter

    if (newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    await Users.create({ name, ocuppation, newsletter })

    res.redirect('/')
})


app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const users = await Users.findOne({ include: Adress, where: { id: id } })
    res.render('userview', { users :users.get({plain : true})})
}
)


app.get('/', async (req, res) => {

    const users = await Users.findAll({ raw: true })

    res.render('home', { users: users })
})

app.post('/adress/delete/:id', async (req,res)=>{
    
    const id = req.params.id
 
    const users = await Adress.destroy({include:Adress,where:{id:id}})
    res.redirect('/')
})

app.post('/users/delete/:id', async (req,res)=>{
    
    const id = req.params.id
 
    const users = await Users.destroy({raw : true ,where:{id:id}})
    res.redirect('/')
})

app.get('/users/editar/:id',async(req,res)=>{
    const id = req.params.id
    

    const users = await Users.findOne({include: Adress , where:{id:id}})
    res.render('readuser',{users: users.get({plain : true})})
})

app.post('/users/editar', async (req,res)=>{
    const id = req.body.id
    const name = req.body.name
    const ocuppation = req.body.ocuppation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter  = true  
    } else{
        newsletter = false
    }

    const userData = {
        id,
        name,
        ocuppation,
        newsletter
    }
    await Users.update(userData,{where :{id:id}})
    res.redirect('/')

})

app.post('/adress/create', async(req,res)=>{

    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city   = req.body.city

    const adress = {
        UserId,
        street,
        number,
        city,
    }
   await  Adress.create(adress);

   res.redirect(`/users/editar/${UserId}`)
})

conn
//.sync({force:true}).
.sync().
    then(() => {
        app.listen(5000)
    }).
    catch(err => { console.log(err) })