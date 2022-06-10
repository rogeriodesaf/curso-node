const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelizemvc','root','',{
    host:'localhost',
    dialect:'mysql'
})

try{
    sequelize.authenticate()
    console.log('conectamos ao banco')
}catch(error){
    console.log(error)
}


module.exports = sequelize