const Questions = require("../models/Questions");
const Router = require('express');
const questionsRouter = Router();

questionsRouter.get('/:questionsId', async (req, res) => {
     res.send(await Questions.findByPk(req.params.questionsId))
})





module.exports = questionsRouter