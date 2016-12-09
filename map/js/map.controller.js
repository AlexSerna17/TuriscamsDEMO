angular.module('map')
.controller('mapCtrl',function($scope, $state){
			// global "map" variable
		var map = null;

		// marker cluster variable
		var markerclusterer = null;

		// define infowindow
		var infowindow = new google.maps.InfoWindow();

		// arrays to hold copies of the markers
		var gmarkers = []; 

		// -----------------------------------------------------------------------
		// A function to create the marker and set up the event window function 
		// -----------------------------------------------------------------------
		function createMarker(latlng, info) {
			
			var marker = new google.maps.Marker({
				position: latlng,
				map: map				
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(info); 
				infowindow.open(map,marker);
				});

			// save the info (not used here)
			gmarkers.push(marker);
		}
		 
		// -----------------------------------------------------------------------
		// This function picks up the click and opens the corresponding info window
		// -----------------------------------------------------------------------
		function myclick(i) {
		  google.maps.event.trigger(gmarkers[i], "click");
		}

		// -----------------------------------------------------------------------
		// Initialize
		// -----------------------------------------------------------------------
		function initialize() {
		  
			// create the map
			var myOptions = {
				zoom: 8,
				center: new google.maps.LatLng(44.95,-93.215),
				mapTypeControl: true,
				navigationControl: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			
			map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
			google.maps.event.addListener(map, 'click', function() {
				infowindow.close();
			});
			  
			// define array of locations
			var markers = [
				[1, "Minneapolis", 44.970,-93.261],
				[2, "St Paul", 44.939,-93.106]
			];
			
			// extract data and  create markers
			for (var i = 0; i < markers.length; i++) {
			  var point = new google.maps.LatLng( markers[i][2],  markers[i][3]);
			  var marker = createMarker( point, "<div class='scrollFix'>" + markers[i][0] + ". " 			+ markers[i][1] + 
												"<br/> " + "lat: " 		 + markers[i][2] + "</br> lng: " 	+  markers[i][3] + " </div>") ;
			}
				
			// create a Marker Clusterer that clusters markers
			markerCluster = new MarkerClusterer(map, gmarkers);
			
		}  // end of initialize

		// ------------------------------------------------------------------------------- //
		// initial load event
		// ------------------------------------------------------------------------------- //		
		google.maps.event.addDomListener(window, 'load', initialize);
});

// .controller('markerController',function($scope, mapService){


// $scope.x = 'nada';

// $scope.marker = function(){

//     return mapService.markerData();

// }
// $scope.marker();

// });