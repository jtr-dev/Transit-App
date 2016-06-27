'use strict';

/**
 * @ngdoc overview
 * @name transitApp
 * @description
 * # transitApp
 *
 * Main module of the application.
 */
angular
  .module('transitApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
