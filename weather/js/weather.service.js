
angular.module('weather')

.service('weatherService', function($http){
                      
  this.getWeather = function(lat,long){
  		// console.log('http://turiscams.com/tkm/v1/weather/'+lat+'/'+long);
  		// console.log("http://turiscams.com/tkm/v1/weather/22.7503118/-102.532292");
        return $http.get('http://turiscams.com/tkm/v1/weather/'+lat+'/'+long).then(
            function (response) {
                // console.log(response.data);
                return{
                    weather:response.data,               
                }

            });
    }
  
});
