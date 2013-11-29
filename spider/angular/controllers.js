'use strict';

/* Controllers */


angular.module('myApp.controllers', []).

controller('LoginCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is LoginCtrl');
    $scope.login = function (user) {

    }

}).
controller('RegisterCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is registerCtrl');

}).
controller('ForgotCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is ForgotCtrl');

}).
controller('DashboardCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is DashboardCtrl');

}).
controller('DocsCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is DocsCtrl');

}).
controller('SettingCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is SettingCtrl');

}).
controller('DocsCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is DocsCtrl');

}).
controller('ScheduleCtrl',function ($http, $scope, $location ,$window, $cookies) {
    console.log('This is ScheduleCtrl');

}).
controller('ProjectCtrl',function ($http, $scope, $location ,$window, $cookies,$routeParams) {
    console.log('This is ProjectCtrl');
    var current_project=$routeParams.current_project;
    console.log(current_project);
    $http.get('http://localhost:6800/listspiders.json?project='+current_project).then(function(response){
        console.log(response)
                //store to $scope.spiders
                $scope.spiders=response.data['spiders']
            }) 
    $scope.start = function (spider) {
        //var r='retailspiders'
        //var a='adairboutique'
        $http.post('http://localhost:6800/schedule.json',{project:'retailspiders',spider:'adairboutique'}).then(function(response) {
            console.log(response)
        })/*
        $http({
            method: 'POST',
            url: 'http://localhost:6800/schedule.json',
            data:{project:'retailspiders',spider:'adairboutique'},
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            console.log(response)
        })*/
    }
}).
controller('TopNavCtrl', function ($scope,$http) {
    $http.get('http://localhost:6800/listprojects.json').then(function (response) {
        console.log(response)
        $scope.projects=response.data['projects']
        $scope.current_project =  $scope.projects[0]
            //fetch spider of current
            $http.get('http://localhost:6800/listspiders.json?project=retailspiders').then(function(response){
                console.log(response)
                //store to $scope.spiders
                $scope.spiders=response.data['spiders']
            }) 
        })
        //chageProject(project)
        $scope.changeProject = function (project) {
            //set project as current project
            $scope.current_project=project
            //load spiders of current project
            $http.get('http://localhost:6800/listspiders.json?project='+project).then(function(response){
                console.log(response)
                //store to $scope.spiders
                $scope.spiders=response.data['spiders']
            }) 
        }
    })
