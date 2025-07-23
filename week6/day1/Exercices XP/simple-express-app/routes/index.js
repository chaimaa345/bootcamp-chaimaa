// routes/index.js
const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.send('<h1>Welcome to the Homepage!</h1>');
});

// About route
router.get('/about', (req, res) => {
  res.send('<h1>About Us Page</h1><p>This is a simple Express.js app.</p>');
});

module.exports = router;
