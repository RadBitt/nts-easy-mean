'use strict';

var mongoose = require('mongoose');

var requestSchema = new mongoose.Schema({
	date: {type: Date, default: Date.now},
	email: {type: String, lowercase: true},
	firstName: String,
	lastName: String,
	phoneNumber: String,
	boatType: String,
	boatName: String,
	boatLoc: String,
	jobDesc: String,
	archived: Boolean
});

var model = mongoose.model('NtsRequests', requestSchema);

module.exports = model;