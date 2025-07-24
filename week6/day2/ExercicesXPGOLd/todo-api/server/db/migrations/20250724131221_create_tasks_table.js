// Migration to create 'tasks' table
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();      // Auto-incrementing ID
    table.string('title').notNullable();   // Task title (required)
    table.boolean('completed')             // Completed status
         .notNullable()
         .defaultTo(false);                // Default is false
  });
};

// Rollback: Drop the 'tasks' table
exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};

