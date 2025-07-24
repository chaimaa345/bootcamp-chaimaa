// server/migrations/XXXX_create_posts_table.js

exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('content').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};

