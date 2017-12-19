/**
 * A web nodeJS app listening port 8014, built using express + ejs templates + bootstrap for style definitions that serves 3 urls 
 * 
 * Dependencies; node installed, express and ejs npm packages installed
 * 
 * Start the app
 * node hello_express_usingTemplateengine_ejs
 */
var express = require('express');
var myPowers = require('./common/util/math/myPower.js');

var app = express();

app.set('views', './src/views');
app.engine('html', require('ejs').renderFile);

// routes
// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Exam Section 2' },
        name: 'Sama',
        lastname: 'Rahim'
    };
    res.render('pages/home.ejs', data2template);
});

// set records route
app.get('/square', function(req, res) {
    var inpNum = 2;
    var resultNumber = myPowers.toSquare(inpNum);
    var data2template = {
        head: { title: 'Square page' },
        inpNum: inpNum,
        resultNumber: resultNumber
    };

    res.render('pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var inpNum = 3;
    var resultNumber = myPowers.toCube(inpNum)


    var data2template = {
        head: { title: 'Cube page' },
        inpNum: inpNum,
        resultNumber: resultNumber
    }

    res.render('pages/cube.ejs', data2template);
});

app.get('/Power', function(req, res) {
    var inpNum = 2;
    var resultNumber = myPowers.toPower(inpNum);
    var data2template = {
        head: { title: 'Power Page' },
        inpNum: inpNum,
        resultNumber: resultNumber
    };

    res.render('pages/power.ejs', data2template);
});



app.get('/about', function(req, res) {

    res.status(200).render('pages/about.html');
});


app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(9015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});