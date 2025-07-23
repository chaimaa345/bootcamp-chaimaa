// app.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

// Middleware to parse JSON body
app.use(express.json());

// Mount books router
app.use('/books', booksRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`📚 Book API running at http://localhost:${PORT}`);
});
