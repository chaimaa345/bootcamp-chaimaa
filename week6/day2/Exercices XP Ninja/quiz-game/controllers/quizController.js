const quizModel = require('../models/quizModel');

const getAllQuestions = async (req, res) => {
  const questions = await quizModel.getQuestions();
  res.json(questions);
};

const getQuestion = async (req, res) => {
  const question = await quizModel.getQuestionById(req.params.id);
  question ? res.json(question) : res.status(404).json({ message: 'Not found' });
};

const checkAnswer = async (req, res) => {
  const { questionId, optionId } = req.body;
  const isCorrect = await quizModel.checkAnswer(questionId, optionId);
  res.json({ correct: isCorrect });
};

module.exports = { getAllQuestions, getQuestion, checkAnswer };
