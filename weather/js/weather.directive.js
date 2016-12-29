angular.module('weather')

.directive('weather', function () {
	return {
		restrict: 'E',
		templateUrl: 'weather/templates/today.html',
		scope: {
          lat: '=',
          long: '=',
        },
		controller: 'weatherCtrl',
		controllerAs: 'ctrl'
	}
});