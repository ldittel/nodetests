"use strict";
// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var repository = require('./repository');
// import Bookshelf from 'bookshelf';
var app = express();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8779;
var router = express.Router();
// test route (http://localhost:8080/api)
router.get('/', function (req, res) {
    repository.User.then(function (user) {
        return res.json(user.toJSON());
    });
});
// all of our routes will be prefixed with /api
app.use('/api', router);
// start server
app.listen(port);
console.log('Running... ');
//repository.User.then(user => console.log(user.toJSON())); 
//# sourceMappingURL=server.js.map