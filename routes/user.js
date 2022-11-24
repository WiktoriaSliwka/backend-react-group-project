const User = require("../models");
const Router = require('express');
const userRouter = Router();


userRouter.get("/:userId", async (req, res) => {
    res.send(await User.findByPk(req.params.userId))
})





module.exports = userRouter
