'use strict';
/*global Firebase */

/**
 * @ngdoc function
 * @name angfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angfireApp
 */

var app = angular.module('angfireApp');

app.controller('MainCtrl', ['$scope','productsBase', function ($scope, productsBase) {
  	// var productsRef = new Firebase('https://bledsoe.firebaseio.com/');

  	// var products = $firebaseArray(productsRef);

  	// // var products = $firebaseArray(productsRef);

  	$scope.products = productsBase;

  	$scope.addProduct = function(){
  		var addp = $scope.products.$add({
  			productName: $scope.productName,
  			cost: $scope.cost
  		});

  		$scope.productName = '';
  		$scope.cost = '';

  		if(addp){
  			window.alert('saved');
  		}else{
  			window.alert('failed');
  		}
  	};

	}]);

    
   // 	};
   // });
 

