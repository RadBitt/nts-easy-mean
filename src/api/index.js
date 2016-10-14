'use strick';

var express = require('express');

var requests = require('../../mock/mock.json');

var router = express.Router(); 


router.get('/requests', function(req, res) {
	res.json({requests: requests}); 
});

// TODO: Add post route to create new entries

// TODO: Add PUT route to update entries

// TODO: Add DELETE route to delete entries

module.exports = router;