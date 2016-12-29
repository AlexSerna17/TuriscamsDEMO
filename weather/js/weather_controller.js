/*
	Date: 5/Ago/2016
	Empresa: TI Consulting
	Created By: José Alejandro Salas Serna. - Developer
	Description: Recibe latitude y longitude de cámara y manda llamar el API de weather y muestra el clima
	Last Modification Date: 11 Ago 2016 By José Alejandro Salas Serna (Frontend weather )
*/

var weather = angular.module('weather', ['ionic']);

	weather.directive('weather', [function() {
  return {
    templateUrl : 'weather/templates/today.html',
    controllerAs : 'ctrl',
    controller : ['$attrs', '$scope', '$http', function($attrs, $scope, $http, $ionicSlideBoxDelegate) {
		

    

		$scope.latitude = "22.7503118";
		$scope.longitude = "-102.532292";

		$http.get("http://turiscams.com/tkm/v1/weather/" + $scope.latitude +"/"+  $scope.longitude ).then(function(response) {
			//$scope.content = response.status;
			$data = angular.fromJson(response.data);

			
			$scope.country = $data.currently.country.short_name;
			$scope.state = $data.currently.administrative_area_level_2.short_name;
			$scope.capital = $data.currently.administrative_area_level_1.short_name;
			$scope.temperature = Math.round($data.currently.temperature);
			$scope.humidity = $data.currently.humidity;
			$scope.wind_speed = $data.currently.wind_speed;

			$scope.sunrise_time = $data.currently.sunrise_time;
			$scope.sunset_time = $data.currently.sunset_time;
			$scope.summary = $data.currently.summary;
			$scope.icon = $data.currently.icon;

			$scope.next_hours = $data.next_hours;
			console.log(new Date().getHours());
			console.log(new Date().getMinutes());
			console.log(new Date().getSeconds());
			console.log($data.next_hours);
		
			$scope = $data.currently.;
			
		});

	 
	 }]
  
  }

}]);
