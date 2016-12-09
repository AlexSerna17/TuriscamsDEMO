angular.module('map')

.directive('mapLayout',function(mapService) {
  return {
	  
	restrict: 'E',  
    template : '<div id="map-canvas"></div>',
   scope: {},
    link: function (scope, element, attrs) {
       
      scope.r = mapService.dataBinding(attrs.name);
      console.log(scope.r); 
      // scope.addAppointment = function(){
      //   console.log('Adding...');
      //   mapService.dataBinding();
      // }

      scope.test = function(){

        var l = 'que';
        return l;

      }

    }
  };
    
    
    });