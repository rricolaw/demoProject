(function(){
  'use strict';

  angular
    .module('demoProjectApp', [
    ]).controller('wordController', function($scope,$http) {

    $scope.hello ="johnson";

    alert("Hi nishant");

    $http.get('word.json').success(function(response){

      $scope.myWords = response;
      
      console.log(response);

    });
  });
})();
