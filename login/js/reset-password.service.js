angular.module('login')



.service('loginService3',function($http, $cookies, $ionicPopup, $timeout){
	
	this.resetPassword = function(email){
	
		var url = "http://turiscams.com/tkm/v1/users/reset/"+ email;
		return $http({
							
			method : 'GET',
			url : url
			}).success(function(response){

				// var alertPopup = $ionicPopup.alert({
				// 	title: 'Hecho',
				// 	template: 'Te hemos enviado un correo electrónico con tu contraseña',
				// 	 okText: 'Aceptar',
				// 	okType: 'button-alerts'
				// }); 
				navigator.notification.alert('Te hemos enviado un correo electrónico con tu contraseña',null,'Hecho','Aceptar');
				window.location.href = '#/app/login/account';							
			}).error(function(response){
				navigator.notification.alert('El correo electrónico no es válido',null,'Se ha producido un error','Aceptar');
				// var alertPopup = $ionicPopup.alert({
				// 	title: 'Se ha producido un error',
				// 	template: 'El correo electrónico no es válido',
				// 	 okText: 'Aceptar',
				// 	okType: 'button-alerts'
				// });							
			}); 
		
		
	}
	
	
	
	
});

// var alertPopup = $ionicPopup.alert({
// 							title: 'Hecho',
// 							template: 'Te hemos enviado un correo electrónico con tu contraseña',
// 							okType: 'button-alerts'
// 						}); 




// var alertPopup = $ionicPopup.alert({
// 							title: 'Se ha producido un error',
// 							template: 'El correo electrónico no es válido',
// 							okType: 'button-alerts'
// 						}); 