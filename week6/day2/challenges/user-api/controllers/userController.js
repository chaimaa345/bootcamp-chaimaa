const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const register = async (req, res) => {
  try {
    const { email, username, password, first_name, last_name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.addUser(
      { email, username, first_name, last_name },
      hashedPassword
    );
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);
    const pwdRecord = await userModel.getPasswordByUsername(username);

    if (!user || !pwdRecord) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isValid = await bcrypt.compare(password, pwdRecord.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const getUser = async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

const updateUser = async (req, res) => {
  try {
    const updated = await userModel.updateUser(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, getUsers, getUser, updateUser };
