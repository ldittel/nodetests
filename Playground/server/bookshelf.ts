var config = require('./knexfile');
//console.log(config);

import knex = require('knex');
import bookshelf = require('bookshelf');

const knexInstance = knex(config[config.environment]);

knexInstance.migrate.latest({directory: 'server/migrations'});

export const Bookshelf = bookshelf(knexInstance);