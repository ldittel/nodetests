var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ladi', function (req, res, next) {

  var knex = require('knex')({
    client: 'mysql',
    connection: 'mysql://bce53062067530:c0557571@eu-cdbr-west-01.cleardb.com/heroku_64bd81c6a9a9640?reconnect=true'

    // connection: {
    //   host     : 'mysql://eu-cdbr-west-01.cleardb.com',
    //   user     : 'bce53062067530r',
    //   password : 'c0557571',
    //   database : 'heroku_64bd81c6a9a9640'
    // }
  });

  var bookshelf = require('bookshelf')(knex);

  var User = bookshelf.Model.extend({
    tableName: 'users'
  });

  res.json({
    data: 'hello Nicky'
  });
});

module.exports = router;
