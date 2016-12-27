angular.module('login')



.service('loginService3',function($http, $cookies, $ionicPopup, $timeout,$ionicLoading){
	
	this.resetPassword = function(email){
		$ionicLoading.show({
		      template: ' <md-icon md-svg-src="css/icons/spinner-movil.svg" class="loader-turiscams-icon"></md-icon>'
		    });
		var url = "http://turiscams.com/tkm/v1/users/reset/"+ email;
		return $http({
							
			method : 'GET',
			url : url
			}).success(function(response){
				navigator.notification.alert('Te hemos enviado un correo electrónico con tu contraseña',null,'Hecho','Aceptar');
				window.location.href = '#/app/login/account';
				$ionicLoading.hide();							
			}).error(function(response){
				$ionicLoading.hide();
				navigator.notification.alert('El correo electrónico no es válido',null,'Se ha producido un error','Aceptar');

								
			}); 
		
		
	}
	
	
	
	
});
