angular.module('filters')
.controller('displayFilters', function ($scope, filterService,$timeout) {

	$scope.filterService = function(){

		filterService.gestList("IETR")
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      $scope.menu = filtersData.cameras.menu;
      $scope.kind = filtersData.cameras.kind;
      console.log(filtersData );



    }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });

            $scope.changeItem= function(item, index){
				$scope.selected = index; 

                filterService.gestList(item)
                .then(function(filtersData){
                    $scope.pics = filtersData.cameras;
                    $scope.menu = filtersData.cameras.menu;
                    $scope.kind = filtersData.cameras.kind;

                });
            }

	};

    $scope.doRefresh = function() {
      $timeout(function() {
          console.log("SI JALO");
          $scope.$broadcast('scroll.refreshComplete');
          // location.reload();
          $scope.filterService();
        }, 1250);
  };

	$scope.filterService();
});