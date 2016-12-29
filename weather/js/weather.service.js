
angular.module('weather')

.service('weatherService', function($http){
                      
  this.getWeather = function(){

        return $http.get('http://turiscams.com/tkm/v1/weather/22.7503118/-102.532292').then(
            function (response) {
                console.log(response);
                console.log("HOLAIS");
                return{
                    country:response.currently.country.short_name,                 
                }

            });
    }
  
});
