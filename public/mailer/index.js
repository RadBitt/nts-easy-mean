'use strick';

var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* ============== Request Created by Client ================ */
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
	        res.sendStatus(200);
	    };
	});
});

/* ============== Estimate Created by Admin ================ */
router.post('/estimate-created', function(req, res) { // handle the route at yourdomain.com/sayHello

	var estimate = req.body;

	console.log(estimate);

	var adminOptions = {
		from: 'leonardo.117h@gmail.com', // sender address
    to: 'leo@radbitt.com', // list of receivers
    subject: 'You created a new estimate - Nautical Tech Services', // Subject line
    html: 'Your client has been notified of the new estimate.'
	}

	var clientOptions = {
    from: 'leonardo.117h@gmail.com', // sender address
    to: estimate.email, // list of receivers
    subject: 'Estimate Recieved - Nautical Tech Services', // Subject line
    html: estimate.displayName + '<br>An estimate has been created based on your request.'
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
	      res.sendStatus(200);
	  };
	});

	transporter.sendMail(adminOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.sendStatus(200);
	    };
	});
}); 

/* ============== Invoice Created by Admin ================ */
router.post('/invoice-created', function(req, res) { // handle the route at yourdomain.com/sayHello

	var vessel = req.body;

	console.log(vessel);

	var adminOptions = {
		from: 'leonardo.117h@gmail.com', // sender address
    to: 'leo@radbitt.com', // list of receivers
    subject: 'You created a new invoice - Nautical Tech Services', // Subject line
    html: 'Your client has been notified of the new invoice.'
	}

	var clientOptions = {
    from: 'leonardo.117h@gmail.com', // sender address
    to: vessel.email, // list of receivers
    subject: 'Invoice Recieved - Nautical Tech Services', // Subject line
    html: vessel.displayName + '<br>An invoice has been created based on your estimate.'
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
	      res.sendStatus(200);
	  };
	});

	transporter.sendMail(adminOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.sendStatus(200);
	    };
	});
}); 

/* ============== Vessel Created by Client ================ */
router.post('/vessel-created', function(req, res) { // handle the route at yourdomain.com/sayHello

	var vessel = req.body;

	console.log(vessel);

	var adminOptions = {
		from: 'leonardo.117h@gmail.com', // sender address
    to: 'leo@radbitt.com', // list of receivers
    subject: 'New Vessel- Nautical Tech Services', // Subject line
    html: 'Your client has created a new vessel.'
	}


	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'leonardo.117h@gmail.com', // Your email id
            pass: 'gmai802L' // Your password
        }
    });

	transporter.sendMail(adminOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.sendStatus(200);
	    };
	});
});

/* ============== Estimate viewed by Client ================ */
router.post('/estimate-viewed', function(req, res) { // handle the route at yourdomain.com/sayHello

	var adminOptions = {
		from: 'leonardo.117h@gmail.com', // sender address
    to: 'leo@radbitt.com', // list of receivers
    subject: 'Estimate Approved - Nautical Tech Services', // Subject line
    html: 'Your client has viewed the estimate.'
	}

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'leonardo.117h@gmail.com', // Your email id
            pass: 'gmai802L' // Your password
        }
    });

	transporter.sendMail(adminOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.sendStatus(200);
	    };
	});
}); 

/* ============== Estimate approved by Client ================ */
router.post('/estimate-approved', function(req, res) { // handle the route at yourdomain.com/sayHello

	var adminOptions = {
		from: 'leonardo.117h@gmail.com', // sender address
    to: 'leo@radbitt.com', // list of receivers
    subject: 'Estimate Approved - Nautical Tech Services', // Subject line
    html: 'Your client has approved the estimate.'
	}

	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'leonardo.117h@gmail.com', // Your email id
            pass: 'gmai802L' // Your password
        }
    });

	transporter.sendMail(adminOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.sendStatus(200);
	    };
	});
}); 


module.exports = router; 