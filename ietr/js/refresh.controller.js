angular.module('ietr', ['ngMap'])


.service('refreshService',function($http){

    this.markerData = function(){
	
	 var url = "http://turiscams.com/tkm/v1/map/marker/mobile";
	
			return $http({
							
							method : 'GET',
							url : url
							}).success(function(response){
							
							// Create a object to save retrivied user data and set in cookie.
                          //  console.log(response['57bb551c8b6c6b9a23dfe813'].Geolocation.latitude);
                            
							// console.log( response);
								return response;
								
							}).error(function(response){
								


							}); 
							
		
							}
	
})


.controller('refreshCtrl', function ($scope,mapService,$timeout,$http,$interval) {

    $scope.imageURL = 'img/perfil.jpg'; 

         
            var c=0;
            $interval(function(){
            $scope.imageURL = 'http://turiscams.com/v1/webcams/zacatecas/live.jpg' + '?' + c;
            console.log(c);
            c++
            },5000); 




            // $timeout(function () {
            //         $scope.imageURL = 'http://turiscams.com/v1/webcams/zacatecas/live.jpg' + '?' + new Date().getTime();
            //         // $scope.intervalFunction();
            //     }, 1500);

            // $scope.intervalFunction = function () {
            //     $timeout(function () {
            //         $scope.imageURL = 'http://turiscams.com/v1/webcams/zacatecas/live.jpg'; 
            //         $scope.intervalFunction();
            //     }, 1500)
            // };

            // $scope.intervalFunction();
});