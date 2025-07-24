// knexfile.js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/todo.sqlite'   // SQLite DB file path
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'   // Migrations folder path
    }
  }
};

