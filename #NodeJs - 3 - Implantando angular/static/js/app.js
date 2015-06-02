var app = angular.module('app', []);

app.controller('controller1', ['$scope', '$http', function($scope, $http){
	
	$scope.albuns = [];

	// Resposta da requisição
	function success(data){
		console.log(data);
		$scope.albuns = data.discography.item;
	}	

	$scope.procurar = function(){
		var nomeArtista = $scope.artista;
		var uri = 'http://www.vagalume.com.br/'+nomeArtista+'/discografia/index.js';
		// Fazendo requisição
		$http.get(uri)
		.success(success);
	};

	$scope.fecharModal = function(){
		var mask = document.getElementsByClassName('mask')[0];
		mask.classList.remove('show');
	};
	$scope.buscarMusicas = function(index){
		var mask = document.getElementsByClassName('mask')[0];
		mask.classList.add('show');
		$scope.discoSelecionado = $scope.albuns[index].discs[0];
	};

}]);


