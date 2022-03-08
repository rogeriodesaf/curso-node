const express = require('express');
const app     = express();
const porta   = 3000
const path    = require('path');
const { send } = require('process');

const basePath = path.join(__dirname, 'template');

const baseAuth = function(req,res,next){
    req.statusAuth = true;
    if(req.statusAuth){
        console.log('Usuário logado');
        next();
    } else{
        console.log('Não está logado');
        next();
    }
}

app.use(baseAuth);


app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`);
});

app.listen(porta, function(){
    console.log('Escutando na porta',porta);
})