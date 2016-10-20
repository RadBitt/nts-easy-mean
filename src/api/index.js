'use strick';

var express = require('express');

var NtsRequests = require('../models/ntsRequests')
// var ntsRequests = require('../../mock/mock.json');

var router = express.Router(); 

// REQ route to get all entries
router.get('/requests', function(req, res) {
	NtsRequests.find({}, function(err, ntsRequests) {
		if(err) {
			return res.status(500).json({message: error.message});
		} else
			res.json({ntsRequests: ntsRequests}); 
	})
});

// REQ route to get all entries
router.get('/requests/status/:id', function(req, res) {
	NtsRequests.find({}, function(err, ntsRequests) {
		if(err) {
			return res.status(500).json({message: error.message});
		} else
			res.json({ntsRequests: ntsRequests}); 
	})
});

// POST route to create new entries
router.post('/requests', function(req, res) {
	var ntsReq = req.body;
	NtsRequests.create(ntsReq, function(err, ntsReq) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json(ntsReq);
	});
});

// PUT route to update entries
router.put('/requests/:id', function(req, res) {
	var id = req.params.id;
	var ntsRequest = req.body;
	if(ntsRequest && ntsRequest._id !== id) {
		return res.status(500).json({err: "Ids don't match!"});
	}

	NtsRequests.findByIdAndUpdate(id, ntsRequest, {new: true}, function(err, ntsRequest) {
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'NTS_REQUEST': ntsRequest, message: "Request Updated"});	
	});
});

// TODO: Add DELETE route to delete entries

module.exports = router;