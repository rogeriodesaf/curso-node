const express = require('express');
const app     = express();
const porta   = 3000;
const path    = require('path');
const { emitWarning, send } = require('process');
const basePath = path.join(__dirname, 'templates');
const users    = require('./users');



app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/users', users)
app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

/*app.get('/:id',(req,res)=>{
    const id = req.params.id;
    console.log(`Buscando o usuário ${id}`)
    res.sendFile(`${basePath}/id.html`)
})*/


app.use(function(req,res,next){
    res.status(404).sendFile(`${basePath}/404.html`)
})






app.listen(porta, function(){
    console.log(`Escutando na porta ${porta}`);
})
