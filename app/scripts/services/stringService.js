'use strict';

function stringService() {

	this.postMessage = function(bool) {

		var message = {
			reqStatus: '',
			kindWords: ''
		};

		if (bool) {
			message.reqStatus = 'Thank you';
			message.kindWords = 'Our team has recieved your request and will reply via the Email provided shortly.';
		} else {
			message.reqStatus = 'We\'re sorry';
			message.kindWords = 'something went wrong.';
		}

		return message;
	};
	
}

module.exports = stringService;