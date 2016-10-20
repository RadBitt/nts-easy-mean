'use strict';

var express = require('express'); 
var parser = require('body-parser'); 
var router = require('./api');

var app = express();

require('./database'); 
require('./seed');

app.use(parser.json()); 

app.use('/', express.static('public'));

app.use('/request', express.static('public/index.html'));

app.use('/request/success', express.static('public/index.html'));

app.use('/about', express.static('public/index.html'));

app.use('/api', router); 

app.listen(3000, function() {
	console.log('Server is running on port 3000');
})
