angular.module('contatooh').controller('ContatosController',
		function($scope, Contato) {

			$scope.contatos = [];
			
			$scope.mensagem = {texto: ''};
			

/*			$scope.total = 0;
			$scope.incrementa = function() {
				$scope.total++;
			};
*/
			$scope.filtro = '';

/* deletado quando iniciamos a utilizacao do contatoService*
			var Contato = $resource('/contatos/:id');*/
		
			function buscaContatos(){
					Contato.query(function(contatos) {
						$scope.contatos = contatos;
						$scope.mensagem = {};
					}, function(erro) {
						$scope.mensagem = {
								texto: "Nao foi possivel obter a listar de contatos"
						}
						console.log(erro);
					});
			} 
			buscaContatos();
			
			
/*		$scope.remove = (function(contato) {
			var promise = Contato.delete({id: contato._id}).$promise;
			promise
				.then(buscaContatos)
				.cath(function(erro){
					console.log("Não foi possivel remover o contato")
					console.log(erro)
				})
			
			console.log(contato)
		});*/

			$scope.remove = function(contato) {
				Contato.delete({id: contato._id},
						buscaContatos,
						function(erro) {
							$scope.mensagem = {
									texto: "Nao foi possivel remover o contatos"
							}
						console.log(erro);
				});
		};		
			

	});
