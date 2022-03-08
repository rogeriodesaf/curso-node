const express = require('express');
const app     = express();
const path    = require('path');
const porta   = 3000;

const basePath = path.join(__dirname, 'template');

app.get('/users/:id', (req,res)=>{
    const id = req.params.id

    //FAZ A LEITURA NA TABELA USERS E RESGATA O USUÁRIO NO BANCO
    console.log('Buscando o usuário',id)

    res.sendFile(`${basePath}/users.html`)
});


app.get('/', function(req, res){
    res.sendFile(`${basePath}/index.html`)
})

app.listen(3000, function(){
    console.log(`Escutando na porta ${porta}`);
})