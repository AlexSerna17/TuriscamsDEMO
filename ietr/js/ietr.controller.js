angular.module('ietr')

.service('refreshService',function($http){

    this.cameraData = function(id){
	
	 var url = "http://turiscams.com/tkm/v1/pins/single/" + id;
	
			return $http({
							
							method : 'GET',
							url : url
							}).success(function(response){

								return response;
								
							}).error(function(response){
								

							}); 
							
		
							}	
})


.controller('ietrCtrl', function ($scope,refreshService,$interval,$stateParams) {
    $scope.id = $stateParams.CameraID;
    console.log($scope.id);

    refreshService.cameraData($scope.id).success(function(ietrData){

            $scope.name = ietrData.Name;
            $scope.short = ietrData.Short_Description;
            $scope.reservation = ietrData.Reference_Url_Mobile;
            $scope.imageURL = 'http://turiscams.com/v1/' + ietrData.Url + 'live.jpg'; 

            var c=0;
            $interval(function(){
                $scope.imageURL = 'http://turiscams.com/v1/' + ietrData.Url + 'live.jpg' + '?' + c;
                // console.log(c);
                c++
            },5000); 


    });



});