angular.module('facebook')

.service('loginService2',function($http, $cookies){
	
	this.facebook = function(){
		
		console.log("FACEBOOK!");
		openFB.init({appId: '128116853951759'});
		openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                       // alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                       //location.href = 'home';
                       console.log(response['authResponse']['accessToken']);
                       var fb_access_token = response['authResponse']['accessToken'];
                       
                       var url = "http://turiscams.com/tkm/v1/users/facebook/";
				
						$http({
							
							method : 'POST',
							url : url,
							headers: { 'Content-Type': 'application/json'},
							data: { fb_access_token: fb_access_token }

							}).then(function successCallback(response){
								
								
								// Create a object to save retrivied user data and set in cookie.
							console.log(response);	
							var user_data = {
								
								user_id: response.data.user_id._id.$id,
								email: response.data.user_id.email,
								username: response.data.user_id.user_details.name,
								profile_pic: response.data.user_id.user_details.profile_url
								
							};
							
								console.log(user_data);
							
								$cookies.putObject('user_data', user_data, {path: "/"});

								location.href = "home"
								
							}, function errorCallback(response){

								console.log(response);
								//alert('El usuario ya existe.');
								
							});	
                       
                       
                       
                       
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_actions'});
		
		
	}	
	
})

.controller('facebookCtrl',function(loginService2, $scope,$http,$cookies){
	
	$scope.facebook_login = function(){
		
	
	console.log("FACEBOOK!");
		openFB.init({appId: '1744883549167965'});
		openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                       // alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                       //location.href = 'home';
                       console.log(response['authResponse']['accessToken']);
                       var fb_access_token = response['authResponse']['accessToken'];
                       
                       var url = "http://turiscams.com/tkm/v1/users/facebook/";
				
						$http({
							
							method : 'POST',
							url : url,
							headers: { 'Content-Type': 'application/json'},
							data: { fb_access_token: fb_access_token }

							}).then(function successCallback(response){
								
								
								// Create a object to save retrivied user data and set in cookie.
							console.log(response);	
							var user_data = {
								
								user_id: response.data.user_id._id.$id,
								email: response.data.user_id.email,
								username: response.data.user_id.user_details.name,
								profile_pic: response.data.user_id.user_details.profile_url
								
							};
							
								console.log(user_data);
							
								$cookies.putObject('user_data', user_data, {path: "/"});

								//location.href = "home"
								 window.location.href = "home.html";
							}, function errorCallback(response){

								console.log(response);
								//alert('El usuario ya existe.');
								
							});	
                       
                       
                       
                       
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_actions'});
		
		
	}
	
	
	
});