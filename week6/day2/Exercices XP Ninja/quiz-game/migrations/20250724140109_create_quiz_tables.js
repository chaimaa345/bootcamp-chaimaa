exports.up = function(knex) {
  return knex.schema
    .createTable('questions', (table) => {
      table.increments('id').primary();
      table.string('question').notNullable();
      table.integer('correct_answer').notNullable();
    })
    .createTable('options', (table) => {
      table.increments('id').primary();
      table.string('option_text').notNullable();
    })
    .createTable('questions_options', (table) => {
      table.integer('question_id').references('questions.id').onDelete('CASCADE');
      table.integer('option_id').references('options.id').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('questions_options')
    .dropTableIfExists('options')
    .dropTableIfExists('questions');
};

