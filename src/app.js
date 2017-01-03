'use strict';

var express = require('express'); 
var path = require('path');
var parser = require('body-parser'); 
// var apiRouter = require('./api');
var mailRouter = require('./mailer');

var app = express();

app.use(parser.json()); 

app.use('/', express.static('./public'));

// app.use('/api', apiRouter);

app.use('/mailer', mailRouter);

app.listen(1000, function() {
	console.log('Server is running on port 3000');
})
