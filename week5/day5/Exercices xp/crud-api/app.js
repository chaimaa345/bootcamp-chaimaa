// app.js
const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();
const PORT = 5000;

app.use(express.json());

// Route to get posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('📦 Data successfully fetched and sent.');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

