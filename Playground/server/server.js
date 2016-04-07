// server.js
"use strict";
// BASE SETUP
// =============================================================================
// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var models_1 = require('./models');
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
    new models_1.User().fetch().then(function (result) {
        res.json(result.toJSON());
    });
});
// all of our routes will be prefixed with /api
app.use('/api', router);
// start server
app.listen(port);
console.log('Running... ');
new models_1.User().fetch().then(function (result) {
    console.log(result.toJSON());
});
//# sourceMappingURL=server.js.map