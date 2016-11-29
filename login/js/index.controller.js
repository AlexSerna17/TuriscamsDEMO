angular.module('login')

.controller('indexCtrl',function ($scope, $compile, $element){
	
	// $scope.title = 'Home';
	// $scope.flag = 0;

	$scope.loadDirective = function(directiveName, title){

			$scope.title = title;
			var butonsDiv = document.getElementById("buttons");
		    butonsDiv.remove(butonsDiv);
		    var div = document.createElement("DIV");
		    div.id = 'directive-loader';
		    document.getElementById('inputs-container').appendChild(div);
			angular.element(document.getElementById('directive-loader')).append($compile("<" + directiveName + "></" + directiveName +">")($scope));
			return $scope.flag = 1;
		}
		
	$scope.getBack = function(flag){
			var directiveDiv = document.getElementById("directive-loader");
		    directiveDiv.remove(directiveDiv);
		    var div = document.createElement("DIV");
		    div.id = 'buttons';
		    document.getElementById('inputs-container').appendChild(div);
			angular.element(document.getElementById('buttons')).append($compile("<index-buttons></ index-buttons")($scope));
			return $scope.flag = 0;
		
		}



	$scope.resetPassDirective = function(directiveName, title){
			$scope.title = title;
			var directiveDiv = document.getElementById("directive-loader");
		    directiveDiv.remove(directiveDiv);

			var div = document.createElement("DIV");
		    div.id = 'directive-loader';
		    document.getElementById('inputs-container').appendChild(div);
			angular.element(document.getElementById('directive-loader')).append($compile("<" + directiveName + "></" + directiveName +">")($scope));
			return $scope.flag = 1;
	}	
	
	
});