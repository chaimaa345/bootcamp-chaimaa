const Post = require('../models/postsModel');

exports.getAll = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get posts' });
  }
};

exports.getById = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    if (post) res.json(post);
    else res.status(404).json({ error: 'Post not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get post' });
  }
};

exports.create = async (req, res) => {
  try {
    const [newPost] = await Post.createPost(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create post' });
  }
};

exports.update = async (req, res) => {
  try {
    const [updatedPost] = await Post.updatePost(req.params.id, req.body);
    if (updatedPost) res.json(updatedPost);
    else res.status(404).json({ error: 'Post not found' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update post' });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Post.deletePost(req.params.id);
    if (deleted) res.json({ message: 'Post deleted' });
    else res.status(404).json({ error: 'Post not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};
