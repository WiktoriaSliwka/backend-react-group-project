const express = require('express')
const db = require('./db/db')
const seed = require('./db/seed')
const app = express()
const User = require('./models')
const Questions = require('./models/Questions')
const questionsRouter = require('./routes/questions')
const userRouter = require('./routes/user')
const PORT = 3000
const cors = require('cors')


// processing json
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)
app.use("/questions", questionsRouter)


app.put('/user', (req, res) => {
    res.json()
})

app.listen(PORT, async () => {
    await seed()
    console.log(`Listening on port ${PORT}`)
}) 



module.exports = app
//npm init -y
// npm install express sqlite3 sequelize nodemon cors 
// npm run dev