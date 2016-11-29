/// <reference path="../../typings/tsd.d.ts"/>
angular.module('login')
.config(function ($compileProvider){
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function($routeProvider){

    $routeProvider
    .when('/',{

        templateURL: 'login/templates/index-buttons.html'

    })
    .otherwise({redirectTo:'/'});
    
});