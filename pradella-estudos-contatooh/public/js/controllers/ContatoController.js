angular.module('contatooh').controller('ContatoController',
		function($scope, $routeParams, $resource) {
			console.log($routeParams.contatoId);

			
			var Contato = $resource('/contatos/:id');

			Contato.get({id : $routeParams.contatoId}, function(contato) {
				$scope.contato = contato;
			}, function(erro) {
				$scope.mensagem = {
					texto : 'Não foi possível obter o contato.'
				};
				console.log(erro);
			});
			
			
			$scope.salva = function(){
				$scope.contato.$save()
					.then(function(){
						$scope.mensagem = {texto:"Salvo com sucesso"}
						
						$scope.contato = new Contato();
					})
					.catch(function(erro){
						$scope.mensagem = {texto:"nao foi possivel salvar"}
					});
			};
			
		});
