module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',      // your DB user
      password: '1234',      // your DB password
      database: 'CH', // or your DB name
      port: 5432
    }
  }
};
