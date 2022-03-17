const express = require('express');
const routers = express.Router();
const path    = require('path');
const basePath = path.join(__dirname, '../templates');
const basePath2 = path.join(__dirname);




routers.get('/add', (req, res)=>{
    res.sendFile(`${basePath}/form.html`);
});

routers.post('/save', (req, res)=>{
    console.log(req.body);
    res.sendFile(`${basePath}/recebeForm.html`);
});

module.exports = routers