// In a file named something like bookshelf.js
import knex = require('knex');
import bookshelf = require('bookshelf');

const knexInstance = knex 
({
  client: 'mysql',
  connection: 'mysql://bce53062067530:c0557571@eu-cdbr-west-01.cleardb.com/heroku_64bd81c6a9a9640?reconnect=true'
});

export const Bookshelf = bookshelf(knexInstance);
