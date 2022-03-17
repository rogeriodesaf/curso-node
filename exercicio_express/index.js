const express = require('express');
const app     = express();
const porta   = 5000;
const path    = require('path');
const users   = require('./users');
const basePath = path.join(__dirname, 'templates')



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/users', users);



app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(express.static('public'));

app.listen(porta, function(){
    console.log(`Escutando na porta ${porta}`);
});