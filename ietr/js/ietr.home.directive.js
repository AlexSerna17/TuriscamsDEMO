angular.module('ietr')

.directive('cameraHome', function () {
	return {
		restrict: 'E',
		templateUrl: 'ietr/templates/ietr.home.html',
		controller: 'refreshCtrl',
		controllerAs: 'ctrl'
	}
})
.directive('cameraIetr', function () {
	return {
		restrict: 'E',
		templateUrl: 'ietr/templates/ietr.ietr.html',
		controller: 'ietrCtrl',
		controllerAs: 'ctrl'
	}
});