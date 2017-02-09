'use strick';

var express = require('express');

var nodemailer = require('nodemailer');

var router = express.Router();

router.post('/request-submitted', function(req, res) { // handle the route at yourdomain.com/sayHello

	var ntsReq = req.body;

	console.log(ntsReq);

	var adminOptions = {
		from: 'leonardo.117h@gmail.com', // sender address
	    to: 'leo@radbitt.com', // list of receivers
	    subject: 'New Request Recieved -Nautical Tech Services', // Subject line
	    html: 'From:' + ntsReq.displayName + 
	    	  '<br>Job Description: ' + ntsReq.jobDesc
	}

	var clientOptions = {
	    from: 'leonardo.117h@gmail.com', // sender address
	    to: ntsReq.email, // list of receivers
	    subject: 'Request Recieved -Nautical Tech Services', // Subject line
	    html: 'Your request has been recieved by Nautical Tech Services. Thank you'
	};

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'leonardo.117h@gmail.com', // Your email id
            pass: 'gmai802L' // Your password
        }
    });

	transporter.sendMail(clientOptions, function(error, info){
	  if(error){
	      console.log(error);
	      res.json({yo: 'error'});
	  }else{
	      console.log('Message sent: ' + info.response);
	  };
	});

	transporter.sendMail(adminOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	    };
	});
}); 

module.exports = router; 