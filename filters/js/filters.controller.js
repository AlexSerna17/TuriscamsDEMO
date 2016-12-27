angular.module('filters')
.controller('displayFilters', function ($scope, filterService, $timeout, $ionicLoading, $http) {


       $scope._list = [];
       $scope.list = [];
     var from = 0;
     var adds = 0;
     $scope.populateList = function() {
         populateLists();
     }
     $scope.canWeLoadMoreContent = function() {
         return ($scope._list.length >= $scope.list.length) ? false : true;
     }
     populateLists();

     function populateLists() {
         filterService.gestList("IETR").then(function(data){
            console.log(data);
             $scope.list = Object.keys(data.cameras);
             var limit = from + 4;
             for (var i = from; i <= limit; i++) {
                 $scope._list.push({
                     attr: data.cameras[$scope.list[i]]["attr"],
                     Name: data.cameras[$scope.list[i]]["Name"],
                     City: data.cameras[$scope.list[i]]["City"],
                     State: data.cameras[$scope.list[i]]["State"],
                     Url: data.cameras[$scope.list[i]]["Url"],
                     Reference_Url_Mobile: data.cameras[$scope.list[i]]["Reference_Url_Mobile"],
                     heigth: Math.random() * (300 - 200) + 200,
                 });
                 from = i;
             }
             $scope.$broadcast('scroll.infiniteScrollComplete');
         });
        $scope.$broadcast('scroll.refreshComplete'); //Checar si esta bien colocado aquí
     }


	$scope.filterService = function(){
    $scope.show($ionicLoading);// Muestra Spinner
		filterService.gestList("IETR")
		.then(function(filtersData){
			$scope.pics = filtersData.cameras;
      $scope.menu = filtersData.cameras.menu;
      $scope.kind = filtersData.cameras.kind;
      // console.log(filtersData );



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

  //   $scope.doRefresh = function() {
  //     $timeout(function() {
  //         filterService.gestList("IETR")
  //         .then(function(filtersData){
  //           $scope.pics = filtersData.cameras;
  //           $scope.menu = filtersData.cameras.menu;
  //           $scope.kind = filtersData.cameras.kind;
  //           console.log(filtersData );



  //         }).finally(function() {
  //             $scope.hide($ionicLoading);  
  //            $scope.$broadcast('scroll.refreshComplete');
  //          });
  //         // location.reload();
  //       }, 1250);
  // };

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



$scope.openInAppBrowser = function(link){
 window.open(link,'_blank','location=no'); 
};
 






	$scope.filterService();
});