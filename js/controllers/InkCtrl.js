app.controller('InkCtrl', function ($scope, $stateParams, ionicMaterialInk, $ionicSlideBoxDelegate) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
	$scope.oculto = "ietr";
    $scope.showElement = function(element) {
    	$scope.oculto = element;

    }

    	$scope.mouseoverWideDiv = function() {
		    $ionicSlideBoxDelegate.enableSlide(false);
		};

		$scope.mouseleaveWideDiv = function() {
		    $ionicSlideBoxDelegate.enableSlide(true);
		};
		$scope.nextSlide = function() {
		   $ionicSlideBoxDelegate.next();
		};
		$scope.previusSlide = function() {
		   $ionicSlideBoxDelegate.previous();
		};

});