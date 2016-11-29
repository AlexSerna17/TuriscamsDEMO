angular.module('login')

.directive('resetPassword',function() {
  return {
	  
	restrict: 'E',  
    templateUrl : './login/templates/reset-password.html',
    controllerAs : 'ctrl'
    
    
    }
    
    
    });