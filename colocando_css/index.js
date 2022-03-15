const express = require ('express');
const app     = express();
const porta   = 4000;
const users   = require('./users');
const path    = require('path');
const basePath = path.join(__dirname, 'template');



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/users', users);
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(porta, function(){
    console.log(`Escutando na porta${porta}`)
})
