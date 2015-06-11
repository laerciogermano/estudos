var app = angular.module('app', []);

app.controller('controller1', ['$scope', '$http', function($scope, $http){
	$scope.objSubmit = {};
	$scope.objProcurar = {};

	$scope.albuns = [];


	$scope.listarPorNome = function(){
		$http.get('/api/album/get/'+ $scope.objProcurar.nome)
		.success(function(data){
			if(!data) return;
			$scope.albuns = [data];
		});
	};

	$scope.listarTodos = function(){
		$http.get('/api/album/getall')
		.success(function(data){
			console.log(data);
			$scope.albuns = data;
		});
	};

	$scope.removerPorNome = function(nome){
		$http.get('/api/album/remove/'+nome)
		.success(function(data){
			console.log(data);
			$scope.listarTodos();
		});
	};

	$scope.submit = function(){
		$http.post('/api/album/create', $scope.objSubmit)
		.success(function(data){
			$scope.listarTodos();
		})
		.error(function(){
			console.log('houve alguim erro');
		});

		$scope.objSubmit = {};
	};

}]);


