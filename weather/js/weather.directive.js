angular.module('weather')

.directive('weather', function () {
	return {
		restrict: 'E',
		templateUrl: 'weather/templates/today.html',
		controller: 'displayMenu',
		controllerAs: 'ctrl'
	}
});