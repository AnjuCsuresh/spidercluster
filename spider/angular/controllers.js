'use strict';

/* Controllers */


angular.module('myApp.controllers', []).

controller('LoginCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is LoginCtrl');
    $scope.login = function(user) {

    }

}).
controller('RegisterCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is registerCtrl');

}).
controller('ForgotCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is ForgotCtrl');

}).
controller('DashboardCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is DashboardCtrl');

}).
controller('DocsCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is DocsCtrl');

}).
controller('SettingCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is SettingCtrl');

}).
controller('DocsCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is DocsCtrl');

}).
controller('ScheduleCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is ScheduleCtrl');

}).
controller('PlanCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is PlanCtrl');

}).
controller('PayCtrl', function($http, $scope, $location, $window, $cookies) {
    log('This is PayCtrl');

}).
controller('ProjectCtrl', function(Auth,$http,$notification, $scope, $location, $window,$cookieStore, $cookies, $routeParams) {
    var prjct
    prjct=$cookies.project
    console.log(prjct)
    $scope.spiders=[]
    $scope.name="Run"
    $scope.data={}
    Auth.setCredentials('manu','manu')
    $http.get('http://localhost:6800/listspiders.json?project=' + prjct).then(function(response) {
        //console.log(response.data)
        //store to $scope.spiders
        
        for (var i=0;i<response.data['spiders'].length;i++) {
            //console.log(response.data['spiders'][i])
            $scope.spiders.push({
                name:response.data['spiders'][i],
                run:false,
                lastJobid:null
            })
        }
    })
    $scope.$on("data", function() {
        prjct=$cookies.project
        $scope.spiders=[]
        $http.get('http://localhost:6800/listspiders.json?project=' + prjct).then(function(response) {
            console.log(response.data)
        //store to $scope.spiders
        
        for (var i=0;i<response.data['spiders'].length;i++) {
            //console.log(response.data['spiders'][i])
            $scope.spiders.push({
                name:response.data['spiders'][i],
                run:false,
                lastJobid:null
            })
        }
    })
    })
    $scope.start = function(spider) {
        $scope.selectedSpider=spider
        $http.post('http://localhost:6800/schedule.json', $.param({
            project: prjct,
            spider: spider.name
        })).then(function(response) {
            console.log(response)
            if(response.data.status=='ok'){
                $notification.success('' +spider.name, 'Running with jobid' + response.data.jobid);
                spider.run=true
                spider.lastJobid=response.data.jobid
            }
            else{
                $scope.n = notifyError()
            }

            console.log(spider)
        })
    }
    $scope.stop = function(spider) {
        console.log(prjct)
        $http.post('http://localhost:6800/cancel.json', $.param({
            project: prjct,
            job: spider.lastJobid
        })).then(function(response) {
            console.log(response)
            if(response.data.status=='ok'){
                $notification.success('' +spider.name, 'Stoped');
                spider.run=false
            }
            else{
                $scope.n = notifyError()
            }
            
        })
    }

}).
controller('ProjectListCtrl', function($http, $scope, $location, MessageBus, $window,$cookieStore, $cookies,Auth) {
    log('This is ProjectListCtrl');
    Auth.setCredentials('manu','manu')
    $http.get('http://localhost:6800/listprojects.json').then(function(response) {
        log(response)
        $scope.projects = response.data['projects']
    })
    $scope.proList = function(project) {
        $cookies.project= project;
        $location.path('/project');
        MessageBus.broadcast("datapro");
    }
}).
controller('TopNavCtrl', function($scope,$cookieStore,MessageBus,$cookies,$window,$location,$http,Auth) {
    Auth.setCredentials('manu','manu')
    var pro
    $scope.$on("datapro", function() {
        pro=$cookies.project
        console.log(pro)
        $http.get('http://localhost:6800/listprojects.json').then(function(response) {
            log(response)
            $scope.projects = response.data['projects']
            $scope.current_project = pro
        //fetch spider of current
        $http.get('http://localhost:6800/listspiders.json?project='+$scope.current_project).then(function(response) {
            log(response)
            //store to $scope.spiders
            $scope.spiders = response.data['spiders']
        })
    })
    })
    $http.get('http://localhost:6800/listprojects.json').then(function(response) {
        log(response)
        $scope.projects = response.data['projects']
        $scope.current_project = $scope.projects[0]
        //fetch spider of current
        $http.get('http://localhost:6800/listspiders.json?project='+$scope.current_project).then(function(response) {
            log(response)
            //store to $scope.spiders
            $scope.spiders = response.data['spiders']
        })
    })
    //chageProject(project)
    $scope.changeProject = function(project) {
        
        //set project as current project
        $scope.current_project = project
        $cookies.project= project;
        //console.log($cookies.project)
        MessageBus.broadcast("data");
        //load spiders of current project
        $http.get('http://localhost:6800/listspiders.json?project=' + $scope.current_project).then(function(response) {
            log(response)
            //store to $scope.spiders
            $scope.spiders = response.data['spiders']
        })
    }
})
