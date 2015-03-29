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

 app.controller('CategoryCtrl', [function () {

 	this.tab = 1;

 	this.selectTab = function(setTab){
 		this.tab = setTab;
 	};
 	this.isSelected = function(checkTab){
 		return this.tab === checkTab;
 	};
 });

 

