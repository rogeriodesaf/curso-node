const express = require('express');
const app     = express();
const path    = require('path');

const porta   = 3000;
const basePath = path.join(__dirname, 'template'); 


app.use(express.urlencoded({
    extended :true
}),
);

app.use(express.json());

app.get('/users/add', (req, res)=>{
    res.sendFile(`${basePath}/formulario.html`);
})



app.post('/users/save', (req, res)=>{
    console.log(req.body)
    const name = req.body.name;
    const age  = req.body.age;

    console.log(`o nome é ${name}`);
    console.log(`A idade é ${age}`);
    res.sendFile(`${basePath}/formulario.html`);
})



app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/index.html`);
    console.log('logou');
});

app.get('/users/:id', (req, res)=>{
    const id = req.params.id
    res.sendFile(`${basePath}/users.html`);
        console.log(req.params.id);
   
})


app.listen(porta, function(){
    console.log('escutando na porta ',porta);
});