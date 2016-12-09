angular.injector(['ng','map']).invoke(function(mapService){


		// Resolve promise from angular service.

		// mapService.markerData().then(function(response) {

		// var	markerInfo = response.data;
		// console.log(markerInfo);
		// return markerInfo;
			
		// });

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://turiscams.com/tkm/v1/map/marker/", false);
		xhr.send();
		var markerInfo = JSON.parse(xhr.response);
		
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

			var imageUrl = '../map/img/maker_tc.png';
    	var markerImage = new google.maps.MarkerImage(imageUrl,
        new google.maps.Size(60, 60));	


			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				icon: markerImage				
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
				zoom: 7,
				center: new google.maps.LatLng(markerInfo[0].Geolocation.longitude,  markerInfo[0].Geolocation.latitude),
				mapTypeControl: true,
				navigationControl: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				icon: ''
			}
			
			map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

			

			google.maps.event.addListener(map, 'click', function() {
				infowindow.close();
			});
			
           	console.log(markerInfo);
			console.log(markerInfo[0].Geolocation.longitude);
			// define array of locations
			 var markers = [
			 	[1, "Minneapolis", 44.970,-93.261],
			 	[2, "St Paul", 44.939,-93.106]
			 ];
			 console.log(markers[0][0]);
             console.log(markerss[0].position[0]);
			 titulo = 'hola homie';
			// extract data and  create markers
			for (var i = 0; i < markerInfo.length; i++) {
			  var point = new google.maps.LatLng( markerInfo[i].Geolocation.longitude,  markerInfo[i].Geolocation.latitude);
			  var marker = createMarker( point, "<div class='scrollFix'>" + markerInfo[i].City + ". " + markerInfo[i].State + 
												"<br/> "  + 
						"</br><img src='http://turiscams.com/v1/" + markerInfo[i].Url + "/live.jpg' width='150' height='100'/><br/><div class='star-ratings-css' title='.1000'></div><br/> </div>") ;
			}

            /*

            for (var i = 0; i < markers.length; i++) {
			  var point = new google.maps.LatLng( markers[i][2],  markers[i][3]);
			  var marker = createMarker( point, "<div class='scrollFix'>" + markers[i][0] + ". " 			+ markers[i][1] + 
												"<br/> " + "lat: " 		 + markers[i][2] + "</br> lng: " 	+  markers[i][3] + " </div>") ;
			}

            */

				
			// create a Marker Clusterer that clusters markers
			markerCluster = new MarkerClusterer(map, gmarkers);
			
		}  // end of initialize

		// ------------------------------------------------------------------------------- //
		// initial load event
		// ------------------------------------------------------------------------------- //		
		google.maps.event.addDomListener(window, 'load', initialize);
		google.maps.event.addDomListener(window, 'reload', initialize);
		google.maps.event.addDomListener(window, "resize", function() {
   		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center); 
		});
		
		

		
		

		});