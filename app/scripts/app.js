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
      .when('/ad-lawn', {
        templateUrl: 'views/ad-lawn.html',
        controller: 'MainCtrl'
      })
      .when('/ad-refinish', {
        templateUrl: 'views/ad-refinish.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
