'use strict';

var firebase = require('firebase');

var config = {
  databaseURL: "https://nts-easy-mean.firebaseio.com/",
};

firebase.initializeApp(config);

var database = firebase.database();

module.exports = firebase; 

