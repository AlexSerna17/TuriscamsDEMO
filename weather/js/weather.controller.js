angular.module('weather')
.controller('weatherCtrl', function ($scope, weatherService, $http, $ionicSlideBoxDelegate) {

	$scope.weatherService = function(){
		weatherService.getWeather("22.7503118","-102.532292")
		.then(function(weatherData){
      console.log(weatherData.weather);
      // $scope.pics = filtersData.cameras;
      $scope.lat = $scope.lat || 22.7503118;
      $scope.long = $scope.long || -102.532292;      
      $scope.country = weatherData.weather.currently.country.short_name;
      $scope.state = weatherData.weather.currently.administrative_area_level_2.short_name;
      $scope.capital = weatherData.weather.currently.administrative_area_level_1.short_name;
      $scope.temperature = Math.round(weatherData.weather.currently.temperature);
      $scope.humidity = weatherData.weather.currently.humidity;
      $scope.wind_speed = weatherData.weather.currently.wind_speed;
      $scope.sunrise_time = weatherData.weather.currently.sunrise_time;
      $scope.sunset_time = weatherData.weather.currently.sunset_time;
      $scope.summary = weatherData.weather.currently.summary;
      $scope.icon = weatherData.weather.currently.icon;
      $scope.next_hours = weatherData.weather.next_hours; 

    }).finally(function() {

     });


	};


	$scope.weatherService();
});