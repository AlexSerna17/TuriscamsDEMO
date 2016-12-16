angular.module('filters')
.controller('displayFilters', function ($scope, filterService, $timeout, $ionicLoading) {

	$scope.filterService = function(){
    $scope.show($ionicLoading);// Muestra Spinner
		filterService.gestList("IETR")
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      $scope.menu = filtersData.cameras.menu;
      $scope.kind = filtersData.cameras.kind;
      console.log(filtersData );



    }).finally(function() {
        $scope.hide($ionicLoading);  // Oculpa Spinner
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
          filterService.gestList("IETR")
          .then(function(filtersData){
            $scope.pics = filtersData.cameras;
            $scope.menu = filtersData.cameras.menu;
            $scope.kind = filtersData.cameras.kind;
            console.log(filtersData );



          }).finally(function() {
              $scope.hide($ionicLoading);  
             $scope.$broadcast('scroll.refreshComplete');
           });
          // location.reload();
        }, 1250);
  };

  $scope.share = function(city,name,link){
   // window.plugins.socialsharing.share('Message, subject, image and link', 'The subject', 'https://www.google.nl/images/srpr/logo4w.png', 'http://www.x-services.nl');
   window.plugins.socialsharing.share('Cámara de '+name+' ubicada en '+ city, 'Turiscams','http://turiscams.com/v1/'+link+'/live.jpg', 'http://turiscams.com/web');
  }

  $scope.show = function() {
    $ionicLoading.show({
      template: ' <md-icon md-svg-src="css/icons/spinner-movil.svg" class="loader-turiscams-icon"></md-icon>'
    });
  };

  $scope.hide = function(){
      $ionicLoading.hide();
  };







	$scope.filterService();
});