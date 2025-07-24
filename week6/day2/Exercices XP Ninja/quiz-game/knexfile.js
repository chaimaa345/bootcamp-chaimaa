module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',       // your DB username
      password: '1234',       // your DB password
      database: 'quizdb',     // create this DB in pgAdmin or psql
      port: 5432
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

