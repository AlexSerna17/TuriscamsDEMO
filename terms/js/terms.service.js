
angular.module('terms')

.service('termsService',function($http){
    

    this.getTerms = function(){

        return $http.get('http://turiscams.com/tkm/v1/terms_conditions/1').then(
            function (response) {
            	
                // console.log(response.data);
                return response.data.text_terms;
            });
    }                         

    this.postAdvertising = function(advertisingData){


        var url = "http://turiscams.com/tkm/v1/contact/ads";
				
						$http({
							
							method : 'POST',
							url : url,
							headers: { 'Content-Type': 'application/json'},
							data:  advertisingData 

							}).then(function successCallback(response){
								
								
								// Create a object to save retrivied user data and set in cookie.
							console.log(response);	
							
								
							}, function errorCallback(response){

								//alert('El usuario ya existe.');
								//navigator.notification.alert('Este correo electrónico ya está registrado',null,'Se ha producido un error','Aceptar');
							});	



    }

	this.contactUs = function(name,email,message){
	
	 var url = "http://turiscams.com/tkm/v1/contact/"+ name + "/" + email + "/"+ message + "/hartlink@gmail.com";
	
			return $http({
							
							method : 'GET',
							url : url
							}).success(function(response){
							
							return response;
								
							}).error(function(response){
								
								//window.alert('El correo electrónico o contraseña son incorrectos','Hola','Acepetar');
								//console.error('Gists error', response.status, response.data);
								// navigator.notification.alert('El correo electrónico o contraseña no son correctos',null,'Se ha producido un error','Aceptar');
							}); 
							
		
							}
                                                 
                        
})

    

                            
                        
