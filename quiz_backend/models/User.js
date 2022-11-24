const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }

},
{
    sequelize: db
})

module.exports = User