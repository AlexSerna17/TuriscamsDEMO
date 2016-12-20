angular.module('carrousel')
.controller('carrouselCtrl', function ($scope, carrouselService,$timeout,$ionicLoading) {

	$scope.carrouselService = function(){
		$scope.show($ionicLoading);// Muestra Spinner
		carrouselService.gestCameras()
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      		// console.log($scope.pics);
      		// console.log($scope.pics.name);
			  $scope.selectedStar = function(rating, index) {
			    console.log('Selected rating is : ', rating, ' and index is ', index);
			  };
      // $scope.menu = filtersData.cameras.menu;
      // $scope.kind = filtersData.cameras.kind;



    	}).finally(function() {
	        $scope.hide($ionicLoading);  // Oculpa Spinner
	     });

	};

	  $scope.show = function() {
    $ionicLoading.show({
      template: ' <md-icon md-svg-src="css/icons/spinner-movil.svg" class="loader-turiscams-icon"></md-icon>'
    });
  };

  $scope.hide = function(){
      $ionicLoading.hide();
  };


	$scope.carrouselService();
});
