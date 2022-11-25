const { sequelize, Sequelize } = require('sequelize')
const path = require('path')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'quiz.sqlite'),
    logging: false
})

module.exports = db