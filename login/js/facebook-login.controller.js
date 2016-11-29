angular.module('login')


.controller('facebookCtrl',function(loginService, $scope){
	
	$scope.facebook_login = function(){
		
	
	loginService.facebook();	
		
		
	}
	
	
	
})