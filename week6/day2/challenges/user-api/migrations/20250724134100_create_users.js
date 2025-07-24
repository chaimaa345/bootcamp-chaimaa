exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('username').unique().notNullable();
      table.string('first_name');
      table.string('last_name');
    })
    .createTable('hashpwd', (table) => {
      table.increments('id').primary();
      table.string('username').references('users.username').onDelete('CASCADE');
      table.string('password').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('hashpwd').dropTableIfExists('users');
};

