angular.module('login')



.service('loginService',function($http, $cookies){
	
	this.signup = function(email, password, name){
		

		
		var url = "http://turiscams.com/tkm/v1/users/";
				
						$http({
							
							method : 'POST',
							url : url,
							headers: { 'Content-Type': 'application/json'},
							data: { email: email, password: password, user_details: {name: name, profile_pic: "../uploads/users_profile/default_profile_pic.jpg"} }

							}).then(function successCallback(response){
								
								
								// Create a object to save retrivied user data and set in cookie.
							console.log(response);	
							var user_data = {
								
								user_id: response.data.id,
								email: response.data.email,
								username: response.data.username,
								profile_pic: response.data.profile_pic
								
							};
							
								console.log(user_data);
							
								$cookies.putObject('user_data', user_data, {path: "/"});

								location.href = "home/index.html"
								
							}, function errorCallback(response){

								//alert('El usuario ya existe.');
								navigator.notification.alert('Este correo electrónico ya está registrado',null,'Se ha producido un error','Aceptar');
							});	
				
			
		}
	
});