// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('login', ['ngCookies','ionic', 'ionic-material', 'ngMaterial','ngMessages','validation.match','terms','facebook']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function( $mdGestureProvider ) {
          $mdGestureProvider.skipClickHijack();
      })
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/login/barlogin.html',
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login/loginButons.html',
                // controller: 'displayFilters',
            }
        }
    })

    .state('app.account', {
        url: '/login/account',
        views: {
            'menuContent': {
                templateUrl: 'templates/login/acoountTuris.html',
                // controller: 'displayFilters'
            }
        }
    })

    .state('app.resetPass', {
        url: '/login/account/resetPass',
        views: {
            'menuContent': {
                templateUrl: 'templates/login/resetPass.html',
                // controller: 'InkCtrl'
            }
        }
    })

    .state('app.register', {
        url: '/login/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/login/register.html',
                // controller: 'signupCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
