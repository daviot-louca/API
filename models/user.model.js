const db = require("../config/db.config")
const { DataTypes } = require('sequelize')

const user = db.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
    username: { type: DataTypes.STRING, allowNull:false },
    email:{type:DataTypes.STRING,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false},
})

module.exports = user;