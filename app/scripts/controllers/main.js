'use strict';
/*global Firebase */

/**
 * @ngdoc function
 * @name angfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angfireApp
 */
// angular.module('angfireApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

var app = angular.module('angfireApp');

app.controller('MainCtrl', ['$scope','productsBase', function ($scope, productsBase) {
  	// var productsRef = new Firebase('https://bledsoe.firebaseio.com/');

  	// var products = $firebaseArray(productsRef);

  	// // var products = $firebaseArray(productsRef);

  	$scope.products = productsBase;

  	$scope.addProduct = function(){
  		$scope.products.$add({
  			productName: $scope.productName,
  			cost: $scope.cost
  		});
  	};

	}]);

    
   // 	};
   // });
 

