const db = require('../config/db');

// Get all questions and options
const getQuestions = async () => {
  const questions = await db('questions').select('*');
  for (let q of questions) {
    const options = await db('options')
      .join('questions_options', 'options.id', 'questions_options.option_id')
      .where('questions_options.question_id', q.id)
      .select('options.id', 'options.option_text');
    q.options = options;
  }
  return questions;
};

// Get single question
const getQuestionById = async (id) => {
  const question = await db('questions').where({ id }).first();
  if (!question) return null;
  const options = await db('options')
    .join('questions_options', 'options.id', 'questions_options.option_id')
    .where('questions_options.question_id', id)
    .select('options.id', 'options.option_text');
  question.options = options;
  return question;
};

// Check answer
const checkAnswer = async (questionId, optionId) => {
  const question = await db('questions').where({ id: questionId }).first();
  return question && question.correct_answer === parseInt(optionId);
};

module.exports = { getQuestions, getQuestionById, checkAnswer };
