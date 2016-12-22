angular.module('ietr')

.directive('cameraHome', function () {
	return {
		restrict: 'E',
		templateUrl: 'ietr/templates/ietr.home.html',
		controller: 'refreshCtrl',
		controllerAs: 'ctrl'
	}
});