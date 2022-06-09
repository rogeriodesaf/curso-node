const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Users = db.define('Users',{
    name:{
        type:DataTypes.STRING,
        require:true
    },
    ocuppation:{
        type:DataTypes.STRING,
        require:true
    },
    newsletter:{
        type:DataTypes.BOOLEAN
    },
    
})

module.exports = Users 