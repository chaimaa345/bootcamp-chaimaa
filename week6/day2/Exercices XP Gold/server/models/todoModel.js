const db = require('../config/db');

const getAllTodos = () => db('tasks');
const getTodoById = (id) => db('tasks').where({ id }).first();
const createTodo = (todo) => db('tasks').insert(todo).returning('*');
const updateTodo = (id, todo) => db('tasks').where({ id }).update(todo).returning('*');
const deleteTodo = (id) => db('tasks').where({ id }).del().returning('*');

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

