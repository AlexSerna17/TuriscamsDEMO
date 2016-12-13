angular.module('carrousel')
.controller('displayFilters', function ($scope, carrouselService,$timeout) {

	$scope.carrouselService = function(){

		carrouselService.gestCameras()
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      console.log($scope.pics );
      // $scope.menu = filtersData.cameras.menu;
      // $scope.kind = filtersData.cameras.kind;



    });

	};

	$scope.carrouselService();
});
