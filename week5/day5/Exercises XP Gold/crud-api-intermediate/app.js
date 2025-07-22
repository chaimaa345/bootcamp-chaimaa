// app.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;
const BASE_URL = 'https://jsonplaceholder.typicode.com';

app.use(express.json()); // To parse incoming JSON

// GET all posts
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// GET a single post
app.get('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Post not found' });
  }
});

// CREATE a new post
app.post('/api/posts', async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create post' });
  }
});

// UPDATE a post
app.put('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.put(`${BASE_URL}/posts/${id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update post' });
  }
});

// DELETE a post
app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await axios.delete(`${BASE_URL}/posts/${id}`);
    res.json({ message: `Post ${id} deleted.` });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete post' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
