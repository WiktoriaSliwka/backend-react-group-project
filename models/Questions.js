const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Questions extends Model {}

Questions.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },


},
{
    sequelize: db
})

module.exports = Questions