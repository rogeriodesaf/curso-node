const express = require('express');
const route   = express.Router();
const path    = require('path')

const basePath = path.join(__dirname,  '../template');

route.get('/add', (req,res)=>{
    res.sendFile(`${basePath}/formulario.html`);
});

route.post('/save', (req, res)=>{
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;

    console.log(name);
    console.log(age);
    res.sendFile(`${basePath}/formulario.html`)
})


module.exports = route;