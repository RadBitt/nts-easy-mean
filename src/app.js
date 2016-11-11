'use strict';

var express = require('express'); 
var parser = require('body-parser'); 
var apiRouter = require('./api');
var mailRouter = require('./mailer');

var app = express();

app.use(parser.json()); 

app.use('/', express.static('public'));

app.use('/request', express.static('public/index.html'));

app.use('/request/success', express.static('public/index.html'));

app.use('/about', express.static('public/index.html'));

app.use('/api', apiRouter);

app.use('/mailer', mailRouter);

app.listen(3000, function() {
	console.log('Server is running on port 3000');
})
