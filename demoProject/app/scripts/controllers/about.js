'use strict';

/**
 * @ngdoc function
 * @name demoProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demoProjectApp
 */
angular.module('demoProjectApp')
  .controller('AboutCtrl', function () {
    $scope.hello="hello";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
