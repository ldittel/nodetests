// In a file named something like bookshelf.js
var knex = require('knex')
({
  client: 'mysql',
  connection: 'mysql://bce53062067530:c0557571@eu-cdbr-west-01.cleardb.com/heroku_64bd81c6a9a9640?reconnect=true'
});

module.exports = require('bookshelf')(knex);
