'use strict';
/*global Firebase */

/**
 * @ngdoc function
 * @name angfireApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angfireApp
 */

 var app = angular.module('angfireApp');


 app.controller('NavController', function ($scope, $location) {
 	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
   };
 });