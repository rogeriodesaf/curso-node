const express = require('express');
const route   = express.Router();
const path    = require('path')

<<<<<<< HEAD
const basePath = path.join(__dirname, '../template');


route.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/index.html`)
});

route.post('/save', (req, res)=>{
    console.log(req.body)
    const name = req.body.name;
    const age  = req.body.age;

    console.log(`O nome é ${name} e a idade é ${age}`)
    res.sendFile(`${basePath}/index.html`)
})

module.exports = route
=======
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
>>>>>>> 963b18ea674779eba46f35a878a79d9712bab267
