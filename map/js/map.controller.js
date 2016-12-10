
angular.module('map', ['ngMap'])
.controller('mapController', function ($scope, NgMap) {

        NgMap.getMap().then(function (map) {
            $scope.map = map;
            $scope.initMarkerClusterer();
        });

        $scope.cities = [
            { id: 1, name: 'Oslo', pos: [59.923043, 10.752839] },
            { id: 2, name: 'Stockholm', pos: [59.339025, 18.065818] },
            { id: 3, name: 'Copenhagen', pos: [55.675507, 12.574227] },
            { id: 4, name: 'Berlin', pos: [52.521248, 13.399038] },
            { id: 5, name: 'Paris', pos: [48.856127, 2.346525] }
        ];
        


        $scope.initMarkerClusterer = function () {
            var markers = $scope.cities.map(function (city) {
                return $scope.createMarkerForCity(city);
            });
            var mcOptions = { imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m' };
            return new MarkerClusterer($scope.map, markers, mcOptions);
        };


        $scope.createMarkerForCity = function (city) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(city.pos[0], city.pos[1]),
                title: city.name
            });
            google.maps.event.addListener(marker, 'click', function () {
                $scope.selectedCity = city;
                $scope.map.showInfoWindow('myInfoWindow', this);
            });
            return marker;
        }

    });