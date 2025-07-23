// routes/posts.js
const express = require('express');
const router = express.Router();

let posts = [];
let idCounter = 1;

// GET /posts - Retrieve all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - Retrieve a specific post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// POST /posts - Create a new post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newPost = {
    id: idCounter++,
    title,
    content,
    timestamp: new Date().toISOString(),
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - Update a post
router.put('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  post.title = title;
  post.content = content;
  res.json(post);
});

// DELETE /posts/:id - Delete a post
router.delete('/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Post not found' });

  const deletedPost = posts.splice(index, 1);
  res.json(deletedPost[0]);
});

module.exports = router;
