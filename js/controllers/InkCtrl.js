app.controller('InkCtrl', function ($scope, $stateParams, ionicMaterialInk, $ionicSlideBoxDelegate) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
	$scope.oculto = "ietr";
    $scope.showElement = function(element) {
    	$scope.oculto = element;

    }

    	

});