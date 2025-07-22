// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simulated database
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

// Get all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Get a specific post
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// Create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update a post
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });

  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  posts[postIndex] = { id: postId, title, content };
  res.json(posts[postIndex]);
});

// Delete a post
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });

  const deletedPost = posts.splice(postIndex, 1);
  res.json({ message: 'Post deleted', post: deletedPost[0] });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
