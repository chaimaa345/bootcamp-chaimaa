// app.js
const express = require('express');
const session = require('express-session');
const app = express();
const quizRouter = require('./routes/quiz');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use session to track user's score and progress
app.use(session({
  secret: 'quiz-secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/quiz', quizRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🎯 Trivia Quiz running at http://localhost:${PORT}/quiz`);
});
