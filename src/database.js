'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://nts-easy-mean/nts-requests', function(err) {

	if(err) {
		console.log('Failed connecting to MongoDB');
	} else {
		console.log('Connected to MongoDb'); 
	}

});

