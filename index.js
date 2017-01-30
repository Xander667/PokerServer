// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 80;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/hand')

    // create a bear (accessed at POST http://localhost:8080/api/hand)
    .post(function (req, res) {
        console.log('Someone tried to post');
        res.json({ message: 'API NOT SUPPORTED!' });
    })

    .get(function (req, res) {
        var hand = ['king diamond', 'two heart'];
        res.send(hand);
    })


// on routes that end in /flop
// ----------------------------------------------------
router.route('/flop')

    .get(function (req, res) {
        var flop = ['Js', '3s', '4c'];
        res.send(flop);
    })

// ----------------------------------------------------
router.route('/turn')

    .get(function (req, res) {
        var turn = ['Th'];
        res.send(turn);
    })

// ----------------------------------------------------
router.route('/river')

    .get(function (req, res) {
        var river = [['Qd'], ['Player 6', '5h', '5d']];
        res.send(river);
    })

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);