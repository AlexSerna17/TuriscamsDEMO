angular.module('map')

.service('mapService',function($http){

    this.markerData = function(){
	
	 var url = "http://turiscams.com/tkm/v1/map/marker/";
	
			return $http({
							
							method : 'GET',
							url : url
							}).success(function(response){
							
							// Create a object to save retrivied user data and set in cookie.
                          //  console.log(response['57bb551c8b6c6b9a23dfe813'].Geolocation.latitude);
                            
							return response;
							//	return data;
								
							}).error(function(response){
								


							}); 
							
		
							}
	this.dataBinding = function(z){

		var x = z + '3';

		return x;


	}




});