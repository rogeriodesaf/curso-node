const express = require('express');
const app = express();
const path = require('path');

const basePath = path.join(__dirname, 'template');

app.get('/', (req,res)=>{
    res.sendFile(`${basePath}/index.html`);
})

app.listen(4000, function(){
    console.log('escutando na porta 4000')
})