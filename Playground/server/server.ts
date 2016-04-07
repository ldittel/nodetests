// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
import express = require('express');       
import bodyParser = require('body-parser');

import {User} from './models'
// import Bookshelf from 'bookshelf';

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8779;
var router = express.Router();
    
// test route (http://localhost:8080/api)
router.get('/', function(req, res) {    
    new User().fetch().then(
        function(result) {
            res.json(result.toJSON());        
    });
});

// all of our routes will be prefixed with /api
app.use('/api', router);

// start server
app.listen(port);
    
console.log('Running... ');

new User().fetch().then(
    function(result) {
        console.log(result.toJSON());        
});