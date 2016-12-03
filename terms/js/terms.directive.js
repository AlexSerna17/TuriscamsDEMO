angular.module('terms')

.directive('termsdirective', function () {
	return {
		restrict: 'E',
		templateUrl: '/turislogin/terms/templates/terms.html',
		controller: 'termsCtrl',
		controllerAs: 'ctrl'
	}
});
