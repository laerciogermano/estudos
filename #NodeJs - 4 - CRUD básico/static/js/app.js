var app = angular.module('app', []);

app.controller('controller1', ['$scope', '$http', function($scope, $http){
	$scope.message = 'Hello World';
	console.log('Controlador 1');
}]);


