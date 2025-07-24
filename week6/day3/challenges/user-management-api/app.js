const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users'); // ✅ Correct path

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Mount routes correctly
app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

