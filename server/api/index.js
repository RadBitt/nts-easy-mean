'use strick';

var express = require('express');

var firebase = require('../database'); 

var router = express.Router(); 

var database = firebase.database();


// // REQ route to get all entries
router.get('/requests', function(req, res) {
	database.find({}, function(err, ntsRequests) {
		if(err) {
			return res.status(500).json({message: error.message});
		} else
			res.json({ntsRequests: ntsRequests}); 
	})
});

// // REQ route to get all entries
// router.get('/requests/status/:id', function(req, res) {
// 	database.find({}, function(err, ntsRequests) {
// 		if(err) {
// 			return res.status(500).json({message: error.message});
// 		} else
// 			res.json({ntsRequests: ntsRequests}); 
// 	})
// });

// // POST route to create new entries
router.post('/requests', function(req, res) {

	var ntsReq = req.body;

	ntsReq.date = Date.now();

	requestId = ntsReq.email + '/'

	firebase.database().ref('/requests/' + requestId).set({
	    date: ntsReq.date,
		email: ntsReq.email,
		password: ntsReq.passWord1,
		firstName: ntsReq.firstName,
		lastName: ntsReq.lastName,
		phoneNumber: ntsReq.phoneNumber,
		boatType: ntsReq.boatType,
		boatName: ntsReq.boatName,
		boatLoc: ntsReq.boatLoc,
		jobDesc: ntsReq.jobDesc,
		archived: ntsReq.archived
	});

});



// // PUT route to update entries
// router.put('/requests/:id', function(req, res) {
// 	var id = req.params.id;
// 	var ntsRequest = req.body;
// 	if(ntsRequest && ntsRequest._id !== id) {
// 		return res.status(500).json({err: "Ids don't match!"});
// 	}

// 	database.findByIdAndUpdate(id, ntsRequest, {new: true}, function(err, ntsRequest) {
// 		if(err) {
// 			return res.status(500).json({err: err.message});
// 		}
// 		res.json({'NTS_REQUEST': ntsRequest, message: "Request Updated"});	
// 	});
// });

// TODO: Add DELETE route to delete entries

module.exports = router;