const express = require('express');
const app     = express();
<<<<<<< HEAD
const porta   = 4000;
const path    = require('path');
const users   = require('./users');
const basePath = path.join(__dirname, 'template')

app.use(express.urlencoded({extended:true}))
=======
const porta   = 3000;
const path    = require('path');
const users   = require('./users')

const basePath = path.join(__dirname, 'template');

app.use(express.urlencoded({extended: true}));
>>>>>>> 963b18ea674779eba46f35a878a79d9712bab267
app.use(express.json());

app.use('/users', users);

<<<<<<< HEAD

app.get('/', (req , res)=>{
    res.sendFile(`${basePath}/users.html`)
})


app.listen(porta, function(){
    console.log(`Escutando na porta ${porta}`);
});
=======
app.listen(porta,function(){
    console.log(`Escutando na porta ${porta}`);
})
>>>>>>> 963b18ea674779eba46f35a878a79d9712bab267
