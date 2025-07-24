// server/config/db.js
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: '../../db/todo.sqlite'
  },
  useNullAsDefault: true
});

module.exports = db;



