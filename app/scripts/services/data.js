'use strict';

function dataService ($http) {

  this.getNtsReqs = function(cb) {
    $http.get('/api/requests').then(cb);
  };

  this.getNtsRequest = function(cb) {
    $http.get('/api/requests/status/:id').then(cb); 
  }

  // this.deleteTodo = function(todo) {
  //   if (!todo._id) {
  //     return $q.resolve();
  //   }
  //   return $http.delete('/api/todos/' + todo._id).then(function() {
  //     console.log("I deleted the " + todo.name + " todo!");
  //   });
  // };

}

module.exports = dataService;