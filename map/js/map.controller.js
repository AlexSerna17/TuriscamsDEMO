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

        // console.log(pinData[0].Geolocation.latitude);
 

// .controller('mapController', function ($scope, NgMap, $timeout) {

// 	  $scope.doRefresh = function() {
//       $timeout(function() {
//           $scope.$broadcast('scroll.refreshComplete');
//           location.reload();
//         }, 1250);
//   };


        NgMap.getMap().then(function (map) {
            $scope.map = map;
            $scope.initMarkerClusterer();
        });

        // $scope.cities = [
        //     { id: 1, name: 'Oslo', pos: [59.923043, 10.752839] },
        //     { id: 2, name: 'Stockholm', pos: [59.339025, 18.065818] },
        //     { id: 3, name: 'Copenhagen', pos: [55.675507, 12.574227] },
        //     { id: 4, name: 'Berlin', pos: [52.521248, 13.399038] },
        //     { id: 5, name: 'Paris', pos: [48.856127, 2.346525] }
        // ];

        // $scope.cities = [

        //     {id: pinData[0]._id.$id, name: pinData[0].City, pos: [pinData[0].Geolocation.longitude,pinData[0].Geolocation.latitude]},
        //     {id: pinData[1]._id.$id, name: pinData[1].City, pos: [pinData[1].Geolocation.longitude,pinData[1].Geolocation.latitude]},
        //     {id: pinData[2]._id.$id, name: pinData[2].City, pos: [pinData[2].Geolocation.longitude,pinData[2].Geolocation.latitude]},
            

        // ];     

        $scope.cities = pinData;
        console.log($scope.cities);


        $scope.initMarkerClusterer = function () {
            var markers = $scope.cities.map(function (city) {
                return $scope.createMarkerForCity(city);
            });
            var mcOptions = { imagePath: 'map/img/m', };
            return new MarkerClusterer($scope.map, markers, mcOptions);
        };


        $scope.imageUrl = '/map/img/maker_tc.png';
    	$scope.markerImage = new google.maps.MarkerImage($scope.imageUrl,new google.maps.Size(60, 60));

        $scope.createMarkerForCity = function (city) {
            console.log(city.pos[0]);
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
        

// angular.module('map')
// .controller('mapCtrl',function($scope, $state,$http,$timeout){

//   $scope.doRefresh = function() {
//       $timeout(function() {
//           $scope.$broadcast('scroll.refreshComplete');
//           location.reload();
//         }, 1250);
//   };

// 		// global "map" variable
// 		var xhr = new XMLHttpRequest();
// 		xhr.open("GET", "http://turiscams.com/tkm/v1/map/marker/", false);
// 		xhr.send();
// 		var markerInfo = JSON.parse(xhr.response);
		
// 		var map = null;

// 		// marker cluster variable
// 		var markerclusterer = null;

// 		// define infowindow
// 		var infowindow = new google.maps.InfoWindow();

// 		// arrays to hold copies of the markers
// 		var gmarkers = []; 

// 		// -----------------------------------------------------------------------
// 		// A function to create the marker and set up the event window function 
// 		// -----------------------------------------------------------------------
// 		function createMarker(latlng, info) {
			
// 			var imageUrl = '../map/img/maker_tc.png';
//     		var markerImage = new google.maps.MarkerImage(imageUrl,
//         	new google.maps.Size(60, 60));	


// 			var marker = new google.maps.Marker({
// 				position: latlng,
// 				map: map,
// 				icon: markerImage				
// 			});

// 			google.maps.event.addListener(marker, 'click', function() {
// 				infowindow.setContent(info); 
// 				infowindow.open(map,marker);
// 				});

// 			// save the info (not used here)
// 			gmarkers.push(marker);
// 		}
		 
// 		// -----------------------------------------------------------------------
// 		// This function picks up the click and opens the corresponding info window
// 		// -----------------------------------------------------------------------
// 		function myclick(i) {
// 		  google.maps.event.trigger(gmarkers[i], "click");
// 		}

// 		// -----------------------------------------------------------------------
// 		// Initialize
// 		// -----------------------------------------------------------------------
// 		function initialize() {
		  
// 			// create the map
// 			var myOptions = {
// 				zoom: 8,
// 				center: new google.maps.LatLng(markerInfo[0].Geolocation.longitude,  markerInfo[0].Geolocation.latitude),
// 				mapTypeControl: true,
// 				navigationControl: true,
// 				mapTypeId: google.maps.MapTypeId.ROADMAP
// 			}
			
// 			map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
// 			google.maps.event.addListener(map, 'click', function() {
// 				infowindow.close();
// 			});
			  
// 			// define array of locations
// 			var markers = [
// 				[1, "Minneapolis", 44.970,-93.261],
// 				[2, "St Paul", 44.939,-93.106]
// 			];
			
// 			// extract data and  create markers
// 			for (var i = 0; i < markerInfo.length; i++) {
// 			  var point = new google.maps.LatLng( markerInfo[i].Geolocation.longitude,  markerInfo[i].Geolocation.latitude);
// 			  var marker = createMarker( point, "<div class='scrollFix'>" + markerInfo[i].City + ". " + markerInfo[i].State + 
// 												"<br/> "  + 
// 						"</br><img src='http://turiscams.com/v1/" + markerInfo[i].Url + "/live.jpg' width='150' height='100'/><br/><div class='star-ratings-css' title='.1000'></div><br/> </div>") ;
// 			}
				
// 			// create a Marker Clusterer that clusters markers
// 			markerCluster = new MarkerClusterer(map, gmarkers);
			
// 		}  // end of initialize

// 		// ------------------------------------------------------------------------------- //
// 		// initial load event
// 		// ------------------------------------------------------------------------------- //		
// 		google.maps.event.addDomListener(window, 'load', initialize);
// });

// .controller('markerController',function($scope, mapService){


// $scope.x = 'nada';

// $scope.marker = function(){

//     return mapService.markerData();

// }
// $scope.marker();

// });

