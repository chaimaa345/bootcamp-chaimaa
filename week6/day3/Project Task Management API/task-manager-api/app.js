const express = require('express');
const fs = require('fs');
const path = require('path');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', tasksRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
