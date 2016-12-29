angular.module('weather')
.controller('weatherCtrl', function ($scope, weatherService, $timeout, $ionicLoading, $http) {

console.log("HOLA");
	$scope.weatherService = function(){
		weatherService.getWeather()
		.then(function(weatherData){
      // console.log(filtersData );
    }).finally(function() {
     });


	};


	$scope.weatherService();
});