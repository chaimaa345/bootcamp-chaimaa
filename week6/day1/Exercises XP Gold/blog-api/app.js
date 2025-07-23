// app.js
const express = require('express');
const postsRouter = require('./routes/posts');
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON request bodies
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
