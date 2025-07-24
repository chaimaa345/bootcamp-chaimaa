const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './server/config/books.db'
  },
  useNullAsDefault: true
});

knex.schema.hasTable('books').then(exists => {
  if (!exists) {
    return knex.schema.createTable('books', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.integer('publishedYear');
    });
  }
});

module.exports = knex;
