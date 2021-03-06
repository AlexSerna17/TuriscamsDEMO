// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('home', ['ionic', 'ionic-material', 'ngMaterial','ngAria','filters','menufilters','ngCookies','tabbar','map','carrousel','ietr','weather']);

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

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl',
        controller: 'userCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'displayFilters',
                controller: 'AppCtrl',
                controller: 'userCtrl'
               
            }
        }
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                // controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ietr', {
        url: '/ietr/:CameraID/:lon/:lat',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl',
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.cameras', {
        url: '/cameras',
        views: {
            'menuContent': {
                templateUrl: 'templates/cameras.html',
                controller: 'mapController'
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

    .state('app.tmp', {
        url: '/tmp',
        views: {
            'menuContent': {
                templateUrl: 'templates/tmp.html',
                // controller: 'ListsCtrl'
            }
        }
    })
    ;
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});

