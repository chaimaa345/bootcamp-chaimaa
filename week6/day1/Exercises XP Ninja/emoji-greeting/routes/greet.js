// routes/greet.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Emoji options
const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// GET / → display form
router.get('/', (req, res) => {
  const options = emojis.map(e => `<option value="${e}">${e}</option>`).join('');
  const formHTML = `
    <html>
      <head>
        <title>Emoji Greeting</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="container">
          <h1>Welcome to the Emoji Greeting App</h1>
          <form action="/greet" method="POST">
            <input type="text" name="name" placeholder="Enter your name" required />
            <select name="emoji">${options}</select>
            <button type="submit">Greet Me!</button>
          </form>
        </div>
      </body>
    </html>
  `;
  res.send(formHTML);
});

// POST /greet → show greeting
router.post('/greet', (req, res) => {
  const { name, emoji } = req.body;

  if (!name || !emoji) {
    return res.send("<p>Please provide a name and choose an emoji.</p>");
  }

  const html = `
    <html>
      <head>
        <title>Your Greeting</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="container">
          <h2>Hello, ${name}! ${emoji}</h2>
          <a href="/">Go back</a>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

module.exports = router;
