angular.module('ietr', [])

.service('refreshService',function($http){

    this.cameraData = function(){
	
	 var url = "http://turiscams.com/tkm/v1/pins/single/57bb551c8b6c6b9a23dfe813";
	
			return $http({
							
							method : 'GET',
							url : url
							}).success(function(response){

								return response;
								
							}).error(function(response){
								

							}); 
							
		
							}	
})