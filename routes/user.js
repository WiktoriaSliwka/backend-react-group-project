const User = require("../models");
const Router = require('express');
const userRouter = Router();

//GET // http://localhost:5000/user
userRouter.get('/', async (req, res) => {
    res.send(await User.findAll())
})

//GET // http://localhost:5000/1
userRouter.get("/:userId", async (req, res) => {
    res.send(await User.findByPk(req.params.userId))
})


module.exports = userRouter
