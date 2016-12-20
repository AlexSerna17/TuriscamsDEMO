angular.module('map', ['ngMap'])


.service('mapService',function($http){

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
	this.dataBinding = function(z){

		var x = z + 3;

		return x;


	}
})


.controller('mapController', function ($scope, NgMap,mapService,filterService) {

    mapService.markerData().success(function(pinData){

        NgMap.getMap().then(function (map) {
            $scope.map = map;
            $scope.initMarkerClusterer();
        });

        /* Example of data of the scope cities.
        $scope.cities = [
            { id: 1, name: 'Oslo', pos: [59.923043, 10.752839] },
            { id: 2, name: 'Stockholm', pos: [59.339025, 18.065818] },
            { id: 3, name: 'Copenhagen', pos: [55.675507, 12.574227] },
            { id: 4, name: 'Berlin', pos: [52.521248, 13.399038] },
            { id: 5, name: 'Paris', pos: [48.856127, 2.346525] }
        ];
        */
           

        $scope.cities = pinData;
        


        $scope.initMarkerClusterer = function () {
            var markers = $scope.cities.map(function (city) {
                return $scope.createMarkerForCity(city);
            });
            var mcOptions = { imagePath: 'map/img/m', };
            return new MarkerClusterer($scope.map, markers, mcOptions);
        };


        $scope.imageUrl = 'map/img/maker_tc.png';
    	$scope.markerImage = new google.maps.MarkerImage($scope.imageUrl,new google.maps.Size(60, 60));

        $scope.createMarkerForCity = function (city) {
            // console.log(city.pos[0]);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(city.pos[0], city.pos[1]),
                title: city.name,
                icon: $scope.markerImage	
            });
            google.maps.event.addListener(marker, 'click', function () {
                $scope.selectedCity = city;
                $scope.map.showInfoWindow('myInfoWindow', this);
            });
            return marker;
        }

    });

    }); // End of service of pinData