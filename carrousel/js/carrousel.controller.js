angular.module('carrousel')
.controller('carrouselCtrl', function ($scope, carrouselService,$timeout) {

	$scope.carrouselService = function(){

		carrouselService.gestCameras()
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      		console.log($scope.pics);
      		console.log($scope.pics.name);
			  $scope.selectedStar = function(rating, index) {
			    console.log('Selected rating is : ', rating, ' and index is ', index);
			  };
      // $scope.menu = filtersData.cameras.menu;
      // $scope.kind = filtersData.cameras.kind;



    	});

	};

	$scope.carrouselService();
});
