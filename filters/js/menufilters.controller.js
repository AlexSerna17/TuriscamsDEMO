angular.module('filters')
.controller('displayMenu', function ($scope, filterService) {
	$scope.isOpen = false;
	$scope.filterService = function(){
		filterService.getMenu()
		.then(function(filtersMenuData){
            $scope.menu = filtersMenuData.menu;
            $scope.kind = filtersMenuData.kind;

		});
	};

	$scope.filterService();
});