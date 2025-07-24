const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/questions', quizController.getAllQuestions);
router.get('/questions/:id', quizController.getQuestion);
router.post('/check', quizController.checkAnswer);

module.exports = router;
