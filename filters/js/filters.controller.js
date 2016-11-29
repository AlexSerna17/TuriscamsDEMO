angular.module('filters')
.controller('displayFilters', function ($scope, filterService) {

	$scope.filterService = function(){

		filterService.gestList("IETR")
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      $scope.menu = filtersData.cameras.menu;
      $scope.kind = filtersData.cameras.kind;
      console.log(filtersData );


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

	$scope.filterService();
});