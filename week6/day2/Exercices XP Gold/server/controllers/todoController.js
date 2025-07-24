const Todo = require('../models/todoModel');

exports.getAll = async (req, res) => {
  const todos = await Todo.getAllTodos();
  res.json(todos);
};

exports.getById = async (req, res) => {
  const todo = await Todo.getTodoById(req.params.id);
  if (!todo) return res.status(404).send('Todo not found');
  res.json(todo);
};

exports.create = async (req, res) => {
  const { title, completed = false } = req.body;
  const [newTodo] = await Todo.createTodo({ title, completed });
  res.status(201).json(newTodo);
};

exports.update = async (req, res) => {
  const { title, completed } = req.body;
  const [updatedTodo] = await Todo.updateTodo(req.params.id, { title, completed });
  if (!updatedTodo) return res.status(404).send('Todo not found');
  res.json(updatedTodo);
};

exports.remove = async (req, res) => {
  const [deletedTodo] = await Todo.deleteTodo(req.params.id);
  if (!deletedTodo) return res.status(404).send('Todo not found');
  res.json(deletedTodo);
};

