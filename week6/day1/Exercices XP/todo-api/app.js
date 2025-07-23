// app.js
const express = require('express');
const app = express();
const todosRouter = require('./routes/todos');

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/todos', todosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
