'use strict';

var angular = require('angular');

angular.module('ntsApp').service('dataService', require('./data'));

angular.module('ntsApp').service('stringService', require('./stringService'));