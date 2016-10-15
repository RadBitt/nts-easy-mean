'use strict';

var NtsRequests = require('./models/ntsRequests.js');

var ntsRequestsArray = [
	{
		date: Date.now(),
		email: "boat1@fan.com",
		firstName: "Leonardo",
		lastName: "Hernandez",
		phoneNumber: "3103099440",
		boatType: "Merit 25",
		boatName: "Time Capsul",
		boatLoc: "MDR Slip 505",
		jobDes: "Fix Mah Boat Dude"
	},
	{
		date: Date.now(),
		email: "boat32@fan.com",
		firstName: "Jackson",
		lastName: "Warner",
		phoneNumber: "3106250266",
		boatType: "Enterprise",
		boatName: "Tonses",
		boatLoc: "My Drive Way",
		jobDes: "Varnish this shit dude."
	},
]

ntsRequestsArray.forEach(function(ntsRequest, index) {
	NtsRequests.find({email: ntsRequest.email}, function(err, ntsRequestsArray) {
		if(!err && !ntsRequestsArray.length) {
			NtsRequests.create({
				date: Date.now(),
				email: ntsRequest.email,
				firstName: ntsRequest.firstName,
				lastName: ntsRequest.lastName,
				phoneNumber: ntsRequest.phoneNumber,
				boatType: ntsRequest.boatType,
				boatName: ntsRequest.boatName,
				boatLoc: ntsRequest.boatLoc,
				jobDesc: ntsRequest.jobDesc,
				archived: false
			});
		}
	});
});