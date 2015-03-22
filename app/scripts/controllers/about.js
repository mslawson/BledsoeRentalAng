'use strict';

/**
 * @ngdoc function
 * @name angfireApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angfireApp
 */
angular.module('angfireApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
