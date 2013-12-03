'use strict';

function log(data){
    console.log(JSON.stringify(data))
}
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers','myApp.services', 'ngCookies', 'notifications']).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        });
        $routeProvider.when('/signup', {
            templateUrl: 'templates/signup.html',
            controller: 'RegisterCtrl'
        });
        $routeProvider.when('/forgot', {
            templateUrl: 'templates/forgot.html',
            controller: 'ForgotCtrl'
        });
        $routeProvider.when('/dashboard', {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
        });
        $routeProvider.when('/docs', {
            templateUrl: 'templates/documentation.html',
            controller: 'DocsCtrl'
        });
        $routeProvider.when('/setting', {
            templateUrl: 'templates/setting.html',
            controller: 'SettingCtrl'
        });
        $routeProvider.when('/activity', {
            templateUrl: 'templates/activitylog.html',
            controller: 'ActivityCtrl'
        });
        $routeProvider.when('/schedule', {
            templateUrl: 'templates/schedule.html',
            controller: 'ScheduleCtrl'
        });
        $routeProvider.when('/project', {
            templateUrl: 'templates/project.html',
            controller: 'ProjectCtrl'
        });
        $routeProvider.when('/prjctlist', {
            templateUrl: 'templates/proList.html',
            controller: 'ProjectListCtrl'
        });
        $routeProvider.when('/plans', {
            templateUrl: 'templates/plans.html',
            controller: 'PlanCtrl'
        });
        $routeProvider.when('/payment', {
            templateUrl: 'templates/payment.html',
            controller: 'PayCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
])

.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
])
.config(function($httpProvider) {
        var numLoadings = 0;
        var loadingScreen = $('<div style="position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;background-color:white;background-color:rgba(255,255,255,0.6);"><div style="position:absolute;top:45%;left:45.5%;font-size:4em;text-align:center"><img src="img/ajax-loader.gif" alt="" /></div></div>')
            .appendTo($('body')).hide();
       $httpProvider.responseInterceptors.push(function() {
            return function(promise) {
                numLoadings++;
                loadingScreen.show();
                var hide = function(r) { if (!(--numLoadings)) loadingScreen.hide(); return r; };
                return promise.then(hide, hide);
            };
        });
    })
.factory('Base64', function () {
        var keyStr = 'ABCDEFGHIJKLMNOP' +
            'QRSTUVWXYZabcdef' +
            'ghijklmnopqrstuv' +
            'wxyz0123456789+/' +
            '=';
        return {
            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },

            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";

                } while (i < input.length);

                return output;
            }
        };
    }).factory('Auth', function (Base64, $cookieStore, $http) {
    // initialize to whatever is in the cookie, if anything
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('authdata');

    return {
        setCredentials: function (username, password) {
            var encoded = Base64.encode(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
            $cookieStore.put('authdata', encoded);
        },
        clearCredentials: function () {
            document.execCommand("ClearAuthenticationCache");
            $cookieStore.remove('authdata');
            $http.defaults.headers.common['Authorization'] = 'Basic ';
        }
    };
})
.run(function($rootScope, $location, $anchorScroll, $routeParams, $window, $cookies) {

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
            $location.hash($routeParams.scrollTo);
            $anchorScroll();
        },
        $rootScope.location = $location
    );
});
