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

angular
  .module('angfireApp', [
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .value('fbURL', 'https://bledsoe.firebaseio.com/')
  .factory('Product', function (fbURL, $firebaseArray){
    return $firebaseArray(new Firebase(fbURL));
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
