angular.module('login')

.directive('userLogin',function() {
  return {
	  
	restrict: 'E',  
    templateUrl : './login/templates/user-login.html',
    controllerAs : 'ctrl'
    
    
    }
    
    
    });