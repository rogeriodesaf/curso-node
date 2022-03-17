const express = require('express');
const app     = express();
const path    = require('path');
const porta   = 3000; 

const basePath = path.join(__dirname, 'template');


//ler o body
app.use(express.urlencoded({extended : true}));
app.use(express.json());



app.get('/users/add', (req,res)=>{
    res.sendFile(`${basePath}/formulario.html`);
});

app.post('/users/save', (req,res)=>{
    console.log(req.body)
    res.sendFile(`${basePath}/formulario.html`);
})










app.listen(porta, function(){
    console.log( 'Escutando na porta', porta);
})