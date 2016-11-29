angular.module('login')

.controller('loginCtrl',function(loginService2, $scope){
	
	$scope.inputType = 'password';
	  // Hide & show password function
	  $scope.hideShowPassword = function(){
	    if ($scope.inputType == 'password')
	      $scope.inputType = 'text';
	    else
	      $scope.inputType = 'password';
	  };

	$scope.login_details = function (username,password) {		
	return loginService2.login($scope.email,$scope.password);
		
	
	}
	
	
					
});