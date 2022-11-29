const Questions = require("../models/Questions");
const Router = require('express');
const questionsRouter = Router();
const getQuestions = require ("../db/questions")

//GET // http://localhost:5000/questions
questionsRouter.get('/', async (req, res) => {
     const questions = getQuestions();
     res.send(questions)
})

// const Questions = require("../models/Questions");
// const Router = require('express');
// const questionsRouter = Router();

// //GET // http://localhost:5000/questions
// questionsRouter.get('/', async (req, res) => {
//      res.send(await Questions.findAll())
// })


module.exports = questionsRouter