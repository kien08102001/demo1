const knex = require('knex');
const config = require('../config/db/knexfile');

const db = knex(config);

module.exports = db;
