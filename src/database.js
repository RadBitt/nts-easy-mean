'use strict';

var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyD-ZmgYyQLWfuk028K0xo_lUjaGiB4BnG0",
    authDomain: "nts-easy-mean.firebaseapp.com",
    databaseURL: "https://nts-easy-mean.firebaseio.com",
    storageBucket: "nts-easy-mean.appspot.com",
    messagingSenderId: "879989092818"
 };

firebase.initializeApp(config);

module.exports = firebase; 

