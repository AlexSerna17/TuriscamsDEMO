angular.module('login')



.service('loginService3',function($http, $cookies, $ionicPopup, $timeout){
	
	this.resetPassword = function(email){
	
		var url = "http://turiscams.com/tkm/v1/users/reset/"+ email;
		return $http({
							
			method : 'GET',
			url : url
			}).success(function(response){

				var alertPopup = $ionicPopup.alert({
					title: 'Hecho',
					template: 'Te hemos enviado un correo electrónico con tu contraseña',
					okType: 'button-alerts'
				}); 							
			}).error(function(response){
				var alertPopup = $ionicPopup.alert({
					title: 'Se ha producido un error',
					template: 'El correo electrónico no es válido',
					okType: 'button-alerts'
				});							
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