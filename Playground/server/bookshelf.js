"use strict";
var config = require('./knexfile');
//console.log(config);
var knex = require('knex');
var bookshelf = require('bookshelf');
var knexInstance = knex(config[config.environment]);
knexInstance.migrate.latest({ directory: 'server/migrations' });
exports.Bookshelf = bookshelf(knexInstance);
//# sourceMappingURL=bookshelf.js.map