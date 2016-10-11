'use strict';

var angular = require('angular');

angular.module('ntsApp', []);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');
console.log('Yes im working');


// configure routes
// myApp.config(function($routeProvider) {
// 	$routeProvider

// 	// route
// 	// .when('/', {
// 	// 	// templateUrl : 'views/newView.html',
// 	// 	// controller  : 'newController'
// 	// })

// });
