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

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
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
      .when('/ad-lawn', {
        templateUrl: 'views/advertisements/ad-lawn.html',
        controller: 'MainCtrl'
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
      .otherwise({
        redirectTo: '/'
      });
  });
