// routes/todos.js
const express = require('express');
const router = express.Router();

let todos = [];
let nextId = 1;

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// POST a new todo
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTodo = { id: nextId++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (update) a todo by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  if (!title) return res.status(400).json({ error: 'Title is required' });

  todo.title = title;
  res.json(todo);
});

// DELETE a todo by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  const deleted = todos.splice(index, 1);
  res.json({ message: 'Todo deleted', deleted });
});

module.exports = router;
