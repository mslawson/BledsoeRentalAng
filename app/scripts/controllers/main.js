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


angular.module('angfireApp')
  .controller('MainCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
  	var productsRef = new Firebase('https://bledsoe.firebaseio.com/');

  	$scope.products = $firebaseArray(productsRef);
  	
	}

]);	


  	// $scope.product = Product;
   //  $scope.add = function() {
   //   var save = Product.$add({
   //    productName: $scope.productName,
   //    cost: $scope.cost
   //   });

   //   $scope.productName = '';
   //   $scope.cost = '';

   //   if(save) {
   //    alert('saved successfully');
   //   } else {
   //    alert('something went wrong');
   //   }
   // 	};
   // });
 

