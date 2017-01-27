angular.module('contatooh').controller('ContatosController',
		function($scope, $resource) {

			$scope.contatos = [];

/*			$scope.total = 0;
			$scope.incrementa = function() {
				$scope.total++;
			};
*/
			$scope.filtro = '';


			var Contato = $resource('/contatos/:id');
		
			function buscaContatos(){
					Contato.query(function(contatos) {
						$scope.contatos = contatos;
					}, function(erro) {
						console.log("Nao foi possivel obter a listar de contatos");
						console.log(erro);
					});
			} 
			buscaContatos();
			

		});
