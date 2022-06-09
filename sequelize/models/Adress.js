const {DataTypes} = require('sequelize')

const Users = require('./Users');

const db = require('../db/conn');

const Adress = db.define('Adress',{
    street:{
        type: DataTypes.STRING,
        require :true,
    },
    number:{
        type: DataTypes.STRING,
        require: true,
    },
    city:{
        type: DataTypes.STRING,
        require: true,
    },
})

Users.hasMany(Adress)
Adress.belongsTo(Users)

module.exports = Adress