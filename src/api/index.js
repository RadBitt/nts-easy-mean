'use strick';

var express = require('express');

var NtsRequests = require('../models/ntsRequests')
// var ntsRequests = require('../../mock/mock.json');

var router = express.Router(); 

router.get('/requests', function(req, res) {
	NtsRequests.find({}, function(err, ntsRequests) {
		if(err) {
			return res.status(500).json({message: error.message});
		} else
			res.json({ntsRequests: ntsRequests}); 
	})
	
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update entries

// TODO: Add DELETE route to delete entries

module.exports = router;