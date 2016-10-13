'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');

angular.module('ntsApp', [ngRoute])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'templates/home.html'
        // controller: 'BookCtrl',
        // controllerAs: 'book'
      })
      .when('/request', {
        templateUrl: 'templates/request.html'
        // controller: 'ChapterCtrl',
        // controllerAs: 'chapter'
      })
      .when('/about', {
        templateUrl: 'templates/about.html'
        // controller: 'ChapterCtrl',
        // controllerAs: 'chapter'
      });

    $locationProvider.html5Mode(true);
}])
.controller('appBodyControl', ['$route', '$routeParams', '$location',
  function appBodyControl($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}]);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');

