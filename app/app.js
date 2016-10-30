'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');

angular.module('ntsApp', [ngRoute])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html'
        // controller: 'BookCtrl',
        // controllerAs: 'book'
      })
      .when('/request', {
        templateUrl: 'templates/request.html'
        // controller: 'ChapterCtrl',
        // controllerAs: 'chapter'
      })
      .when('/request/status', {
        templateUrl: 'templates/status.html'
        // controller: 'requestCtrl'
        // controllerAs: 'chapter'
      })
      .when('/about', {
        templateUrl: 'templates/about.html'
        // controller: 'ChapterCtrl',
        // controllerAs: 'chapter'
      });

    $locationProvider.html5Mode(true);
}])
.controller('mainCtrl', ['$route', '$routeParams', '$location','$scope', '$http', 'dataService', 'stringService',
  function mainCtrl($route, $routeParams, $location, $scope, $http, dataService, stringService) {

    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    $scope.reqStatus = false;
    $scope.message = {};
    $scope.ntsReq = {}; 

    $scope.saveRequest = function() {

      $scope.ntsReq.archived = false; 

      $http.post('/api/requests', $scope.ntsReq).then(function(res) {
        if (res.status == 200){
          $scope.reqStatus = true;
          $http.post('/mailer/request-submitted', $scope.ntsReq).then(function(res) {
            if (res.status == 200){
              // mail sent
            }
          });
        }
        $scope.message = stringService.postMessage($scope.reqStatus);
      });

    }

}]);

require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');

