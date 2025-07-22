const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(express.json());

// In-memory "database"
const users = [];

// Register Route
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'Username and password required' });

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered' });
});

// Login Route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
});

// Middleware to protect routes
function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'secretKey', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Profile Route (Protected)
app.get('/api/profile', authMiddleware, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
