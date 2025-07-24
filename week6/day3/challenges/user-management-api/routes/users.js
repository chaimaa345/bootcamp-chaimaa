const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();

const filePath = path.join(__dirname, '../data/users.json');

// Helpers
function readUsers() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}
function writeUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

// POST /register
router.post('/register', async (req, res) => {
  const { name, lastname, email, username, password } = req.body;
  if (!name || !lastname || !email || !username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const users = readUsers();
  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) return res.status(409).json({ error: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now().toString(),
    name,
    lastname,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);
  res.status(201).json({ message: 'User registered successfully' });
});

// POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);

  if (!user) return res.status(404).json({ error: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid password' });

  res.json({ message: 'Login successful', user: { id: user.id, name: user.name } });
});

// GET /users
router.get('/', (req, res) => {
  const users = readUsers();
  res.json(users.map(({ password, ...u }) => u)); // hide password
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const users = readUsers();
  const userIndex = users.findIndex(u => u.id === req.params.id);

  if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

  const { name, lastname, email, username } = req.body;

  users[userIndex] = {
    ...users[userIndex],
    name: name ?? users[userIndex].name,
    lastname: lastname ?? users[userIndex].lastname,
    email: email ?? users[userIndex].email,
    username: username ?? users[userIndex].username,
  };

  writeUsers(users);
  res.json({ message: 'User updated successfully' });
});

module.exports = router;
