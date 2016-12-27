angular.module('login')

.service('loginService2',function($http, $cookies,$q,$ionicPopup, $timeout, $ionicLoading){
	
	this.login = function(username,password){
	this.show($ionicLoading);// Muestra Spinner	
	 var url = "http://turiscams.com/tkm/v1/users/"+ username + "/" + password + "/21/22/";
	
			return $http({
							
				method : 'GET',
				url : url,
				headers: { 'Authorization': '58486f4ce6be2b0001d166ca0ddf2faf3e3c4f5c4456db8628aa3a3b'},
				}).success(function(response){
				
				// Create a object to save retrivied user data and set in cookie.
				var user_data = {
					
					user_id: response._id.$id,
					email: response.email,
					username: response.user_details.name,
					profile_pic: response.user_details.profile_pic
					
				};
				
					$cookies.putObject('user_data', user_data, {path: "/"});
					window.location.href = "home.html"

				}).error(function(response){
					$ionicLoading.hide();
					console.log(username);
					console.log(password);

					 navigator.notification.alert('El correo electrónico o contraseña no son correctos',null,'Se ha producido un error','Aceptar');
				}); 
				

				}

		  this.show = function() {
		    $ionicLoading.show({
		      template: ' <md-icon md-svg-src="css/icons/spinner-movil.svg" class="loader-turiscams-icon"></md-icon>'
		    });
		  };		
						
});