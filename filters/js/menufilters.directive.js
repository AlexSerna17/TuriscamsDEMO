angular.module('filters')

.directive('menuFilters', function () {
	return {
		restrict: 'E',
		templateUrl: '../filters/templates/menufilters.html',
		controller: 'displayMenu',
		controllerAs: 'ctrl'
	}
});