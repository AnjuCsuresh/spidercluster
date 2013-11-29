'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers', 'ngCookies']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'templates/login.html', controller: 'LoginCtrl'});
        $routeProvider.when('/signup', {templateUrl: 'templates/signup.html', controller: 'RegisterCtrl'});
        $routeProvider.when('/forgot', {templateUrl: 'templates/forgot.html', controller: 'ForgotCtrl'});
        $routeProvider.when('/dashboard', {templateUrl: 'templates/dashboard.html', controller: 'DashboardCtrl'});
        $routeProvider.when('/docs', {templateUrl: 'templates/documentation.html', controller: 'DocsCtrl'});
        $routeProvider.when('/setting', {templateUrl: 'templates/setting.html', controller: 'SettingCtrl'});
        $routeProvider.when('/activity', {templateUrl: 'templates/activitylog.html', controller: 'ActivityCtrl'});
        $routeProvider.when('/schedule', {templateUrl: 'templates/schedule.html', controller: 'ScheduleCtrl'}); 
        $routeProvider.when('/project/:current_project', {templateUrl: 'templates/project.html', controller: 'ProjectCtrl'});       
        $routeProvider.otherwise({redirectTo: '/'});
    }])

    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
    ])

    .run(function ($rootScope, $location, $anchorScroll, $routeParams,$window,$cookies) {

        $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
                $location.hash($routeParams.scrollTo);
                $anchorScroll();
            },
            $rootScope.location = $location
        );
    });

