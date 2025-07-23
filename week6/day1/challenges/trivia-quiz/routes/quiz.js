// routes/quiz.js
const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

// GET /quiz - Start quiz
router.get('/', (req, res) => {
  req.session.score = 0;
  req.session.currentIndex = 0;
  res.redirect('/quiz/question');
});

// GET /quiz/question - Show current question
router.get('/question', (req, res) => {
  const index = req.session.currentIndex;
  if (index >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[index];
  res.send(`
    <h2>Question ${index + 1}:</h2>
    <p>${currentQuestion.question}</p>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" required />
      <button type="submit">Submit</button>
    </form>
    <p>Score: ${req.session.score}</p>
  `);
});

// POST /quiz - Submit answer and go to next question
router.post('/', (req, res) => {
  const index = req.session.currentIndex;
  const userAnswer = req.body.answer?.trim().toLowerCase();
  const correctAnswer = triviaQuestions[index].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    req.session.score++;
  }

  req.session.currentIndex++;
  res.redirect('/quiz/question');
});

// GET /quiz/score - Final score
router.get('/score', (req, res) => {
  const total = triviaQuestions.length;
  const score = req.session.score;

  res.send(`
    <h2>Quiz Completed!</h2>
    <p>Your final score: ${score} / ${total}</p>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;
