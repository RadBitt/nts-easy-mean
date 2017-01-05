'use strict';

var express = require('express'); 
var path = require('path');
var parser = require('body-parser'); 
// var apiRouter = require('./api');
var mailRouter = require('./mailer');

var app = express();
var port = 1000;
var publicPath = path.resolve(__dirname, '../public');

console.log(publicPath);

app.use(parser.json()); 

app.use(express.static(publicPath));

// app.use('/api', apiRouter);

app.use('/mailer', mailRouter);

app.listen(port, function() {
	console.log('Server is running on port ' + port);
})
