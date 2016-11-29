angular.module('login')

.directive('userSignup',function() {
  return {
	  
	restrict: 'E',  
    templateUrl : './login/templates/user-signup.html',
    controllerAs : 'ctrl'
    
    
    }
    
    
    });