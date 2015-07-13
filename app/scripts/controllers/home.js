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

 app.controller('HomeCtrl',function($scope, $location, servCategory) {  

 	$scope.category = servCategory.getName;
 	// $scope.newCat = "first";

 	$scope.setCategory = function(cat) {
    $scope.newCat = servCategory.setName(cat);
    $location.path( '/rental');
  };

 });



		// $scope.countService = testService.getCount;
  //    $scope.clickS = function () {
  //       $scope.countS = testService.incrementCount();
  //   };