'use strict';

var express = require('express'); 
var path = require('path');
var parser = require('body-parser'); 
var mailRouter = require('./mailer');
// var apiRouter = require('./api');

var app = express();
var port = 8080;
var publicPath = path.resolve(__dirname, '../html');

console.log(publicPath);

app.use(parser.json()); 

app.use(express.static(publicPath));

app.get('*', function(req, res) {
	res.sendFile('index.html', {root: publicPath});
})

app.use('/mailer', mailRouter);

// app.use('/api', apiRouter);

app.listen(port, function() {
	console.log('Server is running on port ' + port);
})
