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

 app.controller('MainCtrl', function ($scope, $location, productsBase, servCategory ) {
    // var productsRef = new Firebase('https://bledsoe.firebaseio.com/');

    // var products = $firebaseArray(productsRef);

    // // var products = $firebaseArray(productsRef);

  // Logic for dropdown menu
  

  $scope.currentCategory = servCategory.getName;

  $scope.oneAtATime = true;

  // Navigation on amusement page

  $scope.subview = "main";
  
  $scope.princess = function(){
    $scope.subview = "princess";
  };
  $scope.firestation = function(){
    $scope.subview = "firestation";
  };
  $scope.tigerbelly = function(){
    $scope.subview = "tigerbelly";
  };
  $scope.wackycastle = function(){
    $scope.subview = "wackycastle";
  };
  $scope.wackymini = function(){
    $scope.subview = "wackymini";
  };
  $scope.mainview = function(){
    $scope.subview = "main";
  };

  $scope.groups = [

    {
      title: 'Aerial Work Platforms, Ladders & Scaffolding',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Air Compressors & Air Tools',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Amusement & Party Rental',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Compaction Equipment',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Concrete & Masonry',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Drills & Power Tools',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Earthmoving Equipment',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Generators & Light Towers',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Heaters & Propane Equipment',
      content: [
      {id:1, name:'Grinders'},
      {id:2, name:'Polishers'},
      {id:3, name:'Tools'}
      ]
    },
    {
      title: 'Home Remodeling & Floor Care',
      content: [
      {id:1, name:'Drill item #1'},
      {id:2, name:'Drill item #2'},
      {id:3, name:'Drill item #3'}
      ]
    },
    {
      title: 'Jacks & Material Handling',
      content: [
      {id:1, name:'Floor item #1'}
      ]
    },
    {
      title: 'Lawn Equipment',
      content: [
      {id:1, name:'Generator item #1'}
      ]
    },
    {
      title: 'Moving Equipment',
      content: [
      {id:1, name:'Heating item #1'}
      ]
    },
    {
      title: 'Plumbing Tools & Sewer Equipment',
      content: [
      {id:1, name:'Equipment item #1'}
      ]
    },
    {
      title: 'Pressure Washer & Auto Scrubbers',
      content: [
      {id:1, name:'Hoisting item #1'}
      ]
    },
    {
      title: 'Surface Preparation',
      content: [
      {id:1, name:'Ladders item #1'}
      ]
    },
    {
      title: 'Trucks & Trailers',
      content: [
      {id:1, name:'Lawn item #1'}
      ]
    },
    {
      title: 'Vacuums, Blowers & Air Filtration',
      content: [
      {id:1, name:'Plumbing item #1'}
      ]
    },
    {
      title: 'Water Pumps',
      content: [
      {id:1, name:'Saws item #1'}
      ]
    }
  ];
  $scope.query = '';
  // $scope.currentCategory = "";

  $scope.searchEquip = function(equip){
    // $scope.currentCategory = "ladder";
    // $location.path( '/rental');
    // $scope.query = "ladder";
  }

  $scope.clearSearch = function(){
    $scope.searchForm.findEquip.$rollbackViewValue(); 
    $scope.query = '';
  }

  $scope.foo = function(title){
    alert(title);
  };

  $scope.setCurrentCategory = function(cat) {
    $scope.newCat = servCategory.setName(cat);
  };

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: false,
    isFirstDisabled: false
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



});


   //   };
   // });

