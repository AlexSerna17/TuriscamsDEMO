angular.module('tabbar')


.controller('tabCtrl',function($scope){
					    
	$scope.menuItems = [
	{
		'tittle':'Inicio',
		'icon': 'turis-home',
		'url': '#/app/home',
	},{
		'tittle':'Càmaras',
		'icon': 'turis-cameralocation',
		'url': '#app/components',
	},{
		'tittle':'Reservas',
		'icon': 'turis-reservations',
		'url': '#app/lists',
	},{
		'tittle':'Buscar',
		'icon': 'turis-search',
		'url': '#/search',
	},{
		'tittle':'Màs',
		'icon': 'turis-shareios',
		'url': '#/terms',
	}];
	$scope.setActive = function(menuItem) {
   	 	$scope.activeMenu = menuItem;
   	 	// console.log(menuItem);
 	}

					
});