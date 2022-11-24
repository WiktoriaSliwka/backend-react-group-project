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
          }
        //       {
        //         answerText: "Fox",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Wolf",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Horse",
        //         correctAnswer: true,
        //       },
        //       {
        //         answerText: "Bull",
        //         correctAnswer: false,
        //       },
        //     ],
        //   },
        //   {
        //     questionText: "What is the name of the largest ocean on earth?",
        //     answers: [
        //       {
        //         answerText: "Pacific Ocean",
        //         correctAnswer: true,
        //       },
        //       {
        //         answerText: "Atlantic Ocean",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Indian Ocean",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Artic Ocean",
        //         correctAnswer: false,
        //       },
        //     ],
        //   },
        //   {
        //     questionText:
        //       "Demolition of the Berlin wall separating East and West Germany began in what year?",
        //     answers: [
        //       {
        //         answerText: "1980",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "1989",
        //         correctAnswer: true,
        //       },
        //       {
        //         answerText: "1992",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "1990",
        //         correctAnswer: false,
        //       },
        //     ],
        //   },
        //   {
        //     questionText: "What is the rarest M&M color?",
        //     answers: [
        //       {
        //         answerText: "Brown",
        //         correctAnswer: true,
        //       },
        //       {
        //         answerText: "Green",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Red",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Blue",
        //         correctAnswer: false,
        //       },
        //     ],
        //   },
        //   {
        //     questionText: "Which country invented ice cream?",
        //     answers: [
        //       {
        //         answerText: "India",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "China",
        //         correctAnswer: true,
        //       },
        //       {
        //         answerText: "England",
        //         correctAnswer: false,
        //       },
        //       {
        //         answerText: "Brazil",
        //         correctAnswer: false,
        //       },
        //     ],
        //   },
    ])
}

module.exports = seed