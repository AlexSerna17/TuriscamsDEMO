
angular.module('carrousel')

.service('carrouselService', function($http){

    this.gestCameras = function(){

        return $http.get('https://patito-software.cloud.tyk.io/filters/IETR').then(
            function (response) {
                return{
                    cameras:response.data,                    
                }

            });
    }
  
});