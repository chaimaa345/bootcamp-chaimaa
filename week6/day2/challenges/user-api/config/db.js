const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);  // Initialize Knex with config

module.exports = db;
