const express = require('express');
const route   = express.Router();
const path    = require('path');
const basePath= path.join(__dirname, '../templates')

route.get('/add',(req, res)=>{
    res.sendFile(`${basePath}/form.html`)
})

route.post('/save', (req, res)=>{
    console.log(req.body);
    const name = req.body.name;
    const age  = req.body.age;
    console.log(`O nome é ${name} e a idade é ${age}`)
    res.sendFile(`${basePath}/form.html`)
})


module.exports = route