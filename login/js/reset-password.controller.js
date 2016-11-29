angular.module('login')


.controller('resetCtrl',function(loginService3, $scope){
	

	$scope.reset_pass = function (email) {
	
		
	loginService3.resetPassword($scope.email);
			
	
	}
	
	
					
});