import knex from 'knex';
import knexconfig from '../knexfile';

const environment = 'development';
const loadedConfig = knexconfig[environment];

console.log(`${environment} db config is loaded!`);

export default knex(loadedConfig);
