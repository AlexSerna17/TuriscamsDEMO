angular.module('carrousel')

.directive('carrouselCameras', function () {
	return {
		restrict: 'E',
		templateUrl: 'carrousel/templates/carrousel.html',
		controller: 'carrouselCtrl',
		controllerAs: 'ctrl'
	}
});