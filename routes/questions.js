const Questions = require("../models/Questions");
const Router = require('express');
const questionsRouter = Router();
const {getQuestions} = require ("../db/questions")

questionsRouter.get('/', async (req, res) => {
     const questions = await getQuestions();
     res.send(questions)
})





module.exports = questionsRouter