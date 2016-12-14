
angular.module('carrousel')

.service('carrouselService', function($http){

    this.gestCameras = function(){

        return $http.get('http://turiscams.com/tkm/v1/map/marker/mobile').then(
            function (response) {
                return{
                    cameras:response.data,                    
                }

            });
    }
  
});