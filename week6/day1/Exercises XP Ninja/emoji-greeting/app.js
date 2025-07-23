// app.js
const express = require('express');
const path = require('path');
const greetRouter = require('./routes/greet');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', greetRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Emoji Greeting App running on http://localhost:${PORT}`);
});
