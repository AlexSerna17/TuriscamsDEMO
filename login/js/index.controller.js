angular.module('login')
.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background': 'transparent url(' + value +') no-repeat center center fixed',
                'background-size': 'cover'
            });
        });
    };
})
.controller('indexCtrl',function ($scope, $timeout,$interval){

	
	$scope.image = "img/fondo1.jpg";
	var imagenes=new Array(
		        'img/fondo1.jpg',
		        'img/fondo2.jpg',
		        'img/fondo3.jpg',
		        'img/fondo4.jpg',
		        'img/fondo5.jpg',
		        'img/fondo6.jpg',
		        'img/fondo7.jpg'
		    );

	$scope.imagenes;
	$interval(callAtInterval, 5000);

	function callAtInterval() {
    	var index=Math.floor((Math.random()*imagenes.length));
    	$scope.image = imagenes[index];
	}
		 
		    
	
});
