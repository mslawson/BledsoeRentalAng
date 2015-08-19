'use strict';
/*global Firebase */

/**
 * @ngdoc overview
 * @name angfireApp
 * @description
 * # angfireApp
 *
 * Main module of the application.
 */

var app = angular.module('angfireApp', 
  [
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'firebase'
  ]);

app.factory('productsBase', ['$firebaseArray',
    function ($firebaseArray){

      var ref = new Firebase('https://bledsoe.firebaseio.com/');

      return $firebaseArray(ref);
    }
]);

// app.config(function config($stateProvider){
//     $stateProvider
//       .state("index", {
//         url: '',
//         templateUrl: 'views/home.html',
//         controller: 'MainCtrl'
//       });
//  });

app.service('servCategory', function servCategory(){
  var catName = "";
  this.getName = function(){
    return catName;
  };
  this.setName = function (name){
    catName = name;
    return catName;
  };


});

app.service('servEquipment', function servEquipment(){
  var equipName = "";
  this.getEquip = function(){
    return equipName;
  };
  this.setEquip = function(name){
    equipName = name;
    return equipName;
  };
});

app.config(function ($routeProvider, $locationProvider) {

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $routeProvider
      // Main pages
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/rental', {
        templateUrl: 'views/rental.html',
        controller: 'MainCtrl'
      })
      .when('/amusement', {
        templateUrl: 'views/amusement.html',
        controller: 'MainCtrl'
      })
      .when('/propane', {
        templateUrl: 'views/propane.html',
        controller: 'MainCtrl'
      })
      .when('/ucart', {
        templateUrl: 'views/ucart.html',
        controller: 'MainCtrl'
      })
      // Advertisements
      .when('/ad-lawn', {
        templateUrl: 'views/advertisements/ad-lawn.html',
        controller: 'HomeCtrl'
      })
      .when('/ad-refinish', {
        templateUrl: 'views/advertisements/ad-refinish.html',
        controller: 'MainCtrl'
      })
      .when('/ad-carpet', {
        templateUrl: 'views/advertisements/ad-carpet.html',
        controller: 'MainCtrl'
      })
      .when('/ad-a600', {
        templateUrl: 'views/advertisements/ad-a600.html',
        controller: 'MainCtrl'
      })
      .when('/ad-dirtdragon', {
        templateUrl: 'views/advertisements/ad-dirtdragon.html',
        controller: 'MainCtrl'
      })
      .when('/ad-windsor-carpet', {
        templateUrl: 'views/advertisements/ad-windsor-carpet.html',
        controller: 'MainCtrl'
      })
      .when('/ad-iscrub', {
        templateUrl: 'views/advertisements/ad-iscrub.html',
        controller: 'MainCtrl'
      })
      // Bounce Houses
      .when('/bounce-princess', {
        templateUrl: 'views/bounce-princess.html',
        controller: 'HomeCtrl'
      })
      // Store Locations
      .when('/store-lsn',{
        templateUrl: 'views/lsn.html',
        controller: 'HomeCtrl'
      })
      .when('/store-lss',{
        templateUrl: 'views/lss.html',
        controller: 'HomeCtrl'
      })
      .when('/store-ola',{
        templateUrl: 'views/olathe.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      
  });
