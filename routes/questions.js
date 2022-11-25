const Questions = require("../models/Questions");
const Router = require('express');
const questionsRouter = Router();
const {getQuestions} = require ("../db/questions")

questionsRouter.get('/', async (req, res) => {
     const questions = await getQuestions();
     res.send(questions)
})

//This works with Postman from Questions findAll
// const Questions = require("../models/Questions");
// const Router = require('express');
// const questionsRouter = Router();

// //GET // http://localhost:5000/questions
// questionsRouter.get('/', async (req, res) => {
//      res.send(await Questions.findAll())
// })


module.exports = questionsRouter