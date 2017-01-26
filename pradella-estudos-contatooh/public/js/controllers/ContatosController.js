angular.module('contatooh').controller('ContatosController',
		function($scope, $http) {

			$scope.contatos = [];

			$scope.total = 0;

			$scope.filtro = '';

			$scope.incrementa = function() {
				$scope.total++;
			};

			$http.get('/contatos')
				.then(function(data) {
					$scope.contatos = data;
				}),function(result) {
					console.log("Nao foi possivel obter a lista de contatos");
					console.log(result);
			};
			
		});
