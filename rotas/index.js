const express = require('express');
const app     = express();
const porta   = 3000;
const path    = require('path');
const users   = require('./users')

const basePath = path.join(__dirname, 'template');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users', users);

app.listen(porta,function(){
    console.log(`Escutando na porta ${porta}`);
})