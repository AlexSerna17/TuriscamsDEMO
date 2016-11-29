angular.module('login')

.directive('indexButtons',function() {
  return {
	  
	restrict: 'E',  
    templateUrl : './login/templates/index-buttons.html',
    controllerAs : 'ctrl'
    
    
    }
    
    
    });