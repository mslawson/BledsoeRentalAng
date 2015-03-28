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
      .otherwise({
        redirectTo: '/home'
      });
  });
