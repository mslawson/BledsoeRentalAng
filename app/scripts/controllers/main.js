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

// Logic for dropdown menu
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

// logic for products

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
 

