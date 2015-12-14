(function(){
  'use strict';

  angular
    .module('demoProjectApp', [

    ]).controller('wordController', function($scope,$http) {

    $http.get('http://localhost:3000/employee').success(function(response){

      $scope.employees = response;

      console.log(response);

    });
  });
})();
