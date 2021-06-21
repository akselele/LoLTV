const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(process.cwd(), '../env/.env') });
dotenv.config({ path: path.resolve(process.cwd(), `../env/${process.env.ENV}/.env`) });

const migrationsOptions = {
  directory: './db/migrations',
};

const seedsOptions = {
  directory: './db/seeds',
};

const connection = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: '5433'
};

const pool = {
  min: 2,
  max: 30,
};

module.exports = {
  development: {
    client: 'pg',
    connection: connection,
    pool,
    migrations: migrationsOptions,
    seeds: seedsOptions,
  },
};
