
angular.module('filters')

.service('filterService', function($http){
                      
  this.gestList = function(kind){

        return $http.get('http://turiscams.com/tkm/v1/pins/').then(
            function (response) {
                return{
                    cameras:response.data,                    
                }

            });
    }

    // this.gestList = function(kind){

    //     return $http.get('https://patito-software.cloud.tyk.io/filters/'+kind).then(
    //         function (response) {
    //             return{
    //                 cameras:response.data,                    
    //             }

    //         });
    // }


    this.getMenu = function(){

        return $http.get('https://patito-software.cloud.tyk.io/filters/IETR').then(
            function (response) {
                return{
                    menu:response.data.menu,               
                    kind:response.data.kind,
                }

            });
    }


    
  
});







