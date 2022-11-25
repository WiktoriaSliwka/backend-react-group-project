const User = require('../models')
const Questions = require('../models/Questions')
const db = require('./db')

async function seed() {
    await db.sync({ force: true})

    await User.bulkCreate([
        {
            username: "CarolLee",
            score: 3
        },
        {
            username: "FinnCarter",
            score: 1
        }
    ])


    await Questions.bulkCreate([
        {
            question: "How long is an Olympic swimming pool (in meters)",
            answer: "50"
        },
        {
            question: "Which country do cities of Perth, Adelade & Brisbane belong to?",
            answer:  "Australia"
              
          },
          {
            question: "What geometric shape is generally used for stop signs?",
            answer:"Octagon" 
          },
          {
            question: "What is cynophobia?",
            answer: "Fear of dogs"
          },
          {
            question: "How many languages are written from right to left?",
            answer: "12"
          },
          {
            question: "Which animal can be seen on the Porsche logo?",
            answer: "Horse"
          },
          
        
          {
            question: "What is the name of the largest ocean on earth?",
            answers: "Pacific Ocean"
              
          },
          {
            question:
              "Demolition of the Berlin wall separating East and West Germany began in what year?",
            answers:  "1989"
             
          },
          {
            question: "What is the rarest M&M color?",
            answers: "Brown"
          },
              
          {
            question: "Which country invented ice cream?",
            answers: "China"
          
          },
    ])
}

module.exports = seed