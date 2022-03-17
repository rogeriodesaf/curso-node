const express = require('express');
const route   = express.Router();
const path    = require('path')

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