// knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '1234',
      database: 'blogdb',
      port: 5432
    },
    migrations: {
      directory: './server/migrations'
    }
  }
};

