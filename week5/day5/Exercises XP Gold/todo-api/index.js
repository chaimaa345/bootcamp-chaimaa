// index.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory todos list
let todos = [];

// Test route to confirm server is alive
app.get('/', (req, res) => {
  res.send('✅ Server is running');
});

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post('/api/todos', (req, res) => {
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTodo = {
    id: uuidv4(),
    title,
    completed: completed ?? false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Get a specific todo by ID
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  const deleted = todos.splice(index, 1);
  res.json({ message: 'Deleted successfully', todo: deleted[0] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

