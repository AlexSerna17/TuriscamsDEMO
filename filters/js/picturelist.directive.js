angular.module('filters')

.directive('listFilters', function () {
	return {
		restrict: 'E',
		templateUrl: 'filters/templates/listfilters.html',
		controller: 'displayFilters',
		controllerAs: 'ctrl'
	}
});