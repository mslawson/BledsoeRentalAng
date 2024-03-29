'use strict';
/*global Firebase */

var app = angular.module('angfireApp');

app.controller('dropdownController', ['$scope', function ($scope) {

  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Concrete & Masonry',
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

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: true
  };
}]);