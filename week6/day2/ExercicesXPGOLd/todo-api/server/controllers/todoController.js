const Todo = require('../models/todoModel');

exports.getAll = async (req, res) => {
  const todos = await Todo.getAll();
  res.json(todos);
};

exports.getOne = async (req, res) => {
  const todo = await Todo.getById(req.params.id);
  if (todo) res.json(todo);
  else res.status(404).json({ error: 'Todo not found' });
};

exports.create = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const [id] = await Todo.create({ title });
  const newTodo = await Todo.getById(id);
  res.status(201).json(newTodo);
};

exports.update = async (req, res) => {
  const { title, completed } = req.body;
  await Todo.update(req.params.id, { title, completed });
  const updated = await Todo.getById(req.params.id);
  res.json(updated);
};

exports.delete = async (req, res) => {
  await Todo.remove(req.params.id);
  res.json({ message: 'Todo deleted' });
};
