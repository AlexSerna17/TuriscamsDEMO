angular.module('login')


.controller('signupCtrl',function(loginService, $scope){
					    
	$scope.register = function (name,password, email, password_conf, conditions) {
	
		// Evaluation if the password don't match.
	
		if($scope.password_conf != $scope.password){
			
						$scope.show = true;
					    $scope.type = "danger";
						$scope.text = "Las contraseñas no coinciden.";
					    //Timeout to hide the alert automatically
					    
					    $scope.close_alert = function(index) {
						    
						    $scope.show = false;
						  
						  };
						  
						 $scope.pass = 0;
			
		}else{
			$scope.pass = 1
		}
		
		
		if($scope.conditions != true){
			
			alert('Atención \n Lee y acepta los Términos y Condiciones para continuar');
		}
		else{
			$scope.con = 1;	
		}
		
		// Verify that the password match and terms are acepted to proceed with the sign up.
		if($scope.pass == 1 && $scope.con == 1){
			
			loginService.signup($scope.email, $scope.password, $scope.name);
			
		}
	
	
	}

					
});