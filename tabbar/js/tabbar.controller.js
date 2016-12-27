angular.module('tabbar')


.controller('tabCtrl',function($scope, $ionicScrollDelegate){

	 $scope.scrollTop = function() {
    	$ionicScrollDelegate.scrollTop([true]);
  	 };
			
	$scope.activeMenu = "Inicio";		    
	$scope.menuItems = [
	{
		'tittle':'Inicio',
		'icon': 'turis-home',
		'url': '#/app/home',
	},{
		'tittle':'Cámaras',
		'icon': 'turis-cameralocation',
		'url': '#app/cameras',
	},{
		'tittle':'Reservas',
		'icon': 'turis-reservations',
		'url': '#app/lists',
	},{
		'tittle':'Buscar',
		'icon': 'turis-search',
		'url': '#/search',
	},{
		'tittle':'Más',
		'icon': 'turis-shareios',
		'url': '#/terms',
	}];
	$scope.setActive = function(menuItem) {
   	 	$scope.activeMenu = menuItem;
   	 	// console.log(menuItem);
 	}

					
});