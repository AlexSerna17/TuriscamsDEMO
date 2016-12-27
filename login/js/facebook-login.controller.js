angular.module('facebook')

.controller('facebookCtrl',function($scope,$http,$cookies,$q,$ionicPopup, $timeout, $ionicLoading){
	
	// Create function to display the loader if user selects Facebook login
	$scope.show = function() {
		$ionicLoading.show({
			template: ' <md-icon md-svg-src="css/icons/spinner-movil.svg" class="loader-turiscams-icon"></md-icon>'
		});
	};	


	$scope.facebook_login = function(){
		
	
	console.log("FACEBOOK!");
		openFB.init({appId: '1744883549167965'});
		openFB.login(
                function(response) {
                    if(response.status === 'connected') {

					// Console Log to display facebook response.	
                    //    console.log(response['authResponse']['accessToken']);
                       var fb_access_token = response['authResponse']['accessToken'];
                       $scope.show($ionicLoading);
                       var url = "http://turiscams.com/tkm/v1/users/facebook/";
				
						$http({
							
							method : 'POST',
							url : url,
							headers: { 'Content-Type': 'application/json'},
							data: { fb_access_token: fb_access_token }

							}).then(function successCallback(response){
								
								
							// Create a object to save retrivied user data and set in cookie.
							// console.log(response);	
							var user_data = {
								
								user_id: response.data.user_id._id.$id,
								email: response.data.user_id.email,
								username: response.data.user_id.user_details.name,
								profile_pic: response.data.user_id.user_details.profile_url,
								cover_pic: response.data.user_id.user_details.cover
							};
							
								$cookies.putObject('user_data', user_data, {path: "/"});
								window.location.href = "home.html";

							}, function errorCallback(response){
								$ionicLoading.hide();
								console.log(response);
								
								
							});	
                       
                 
                       
                       
                    } else {
                         console.log('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_actions'});
		
				


	}
	
	
	
});