// server/models/todoModel.js
const db = require('../config/db');

module.exports = {
  getAll: () => db('tasks'),
  getById: (id) => db('tasks').where({ id }).first(),
  create: (task) => db('tasks').insert(task),
  update: (id, task) => db('tasks').where({ id }).update(task),
  remove: (id) => db('tasks').where({ id }).del()
};


