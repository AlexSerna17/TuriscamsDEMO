angular.module('login')



.service('loginService3',function($http, $cookies){
	
	this.resetPassword = function(email){
	
		var url = "http://turiscams.com/tkm/v1/users/reset/"+ email;
		
				$http({
					
					method : 'GET',
					url : url,
					headers: { 'Content-Type': 'application/json'}
					}).then(function successCallback(response){
						
						console.log(response);

						//alert("Hecho. Te hemos enviado un correo electrónico con tu contraseña");
						navigator.notification.alert('Te hemos enviado un correo electrónico con tu contraseña',null,'Hecho','Aceptar');
						document.location.reload();
						
					}, function errorCallback(response){

						//alert('El correo electrónico no es valido.');
						navigator.notification.alert('El correo electrónico no es válido',null,'Se ha producido un error','Aceptar');
					});	
		
	}
	
	
	
	
});