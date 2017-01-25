angular.module('contatooh').controller('ContatosController', 
		function($scope){
			$scope.total = 0;
			$scope.incrementa = function(){
				$scope.total++;
			}
			
			
			$scope.contatos = [
				{
			    	"_id":1,
				    "nome":"Contato Java",
				    "email":"java@email.com.br"
				},
				{
			    	"_id":2,
				    "nome":"Contato scala",
				    "email":"scala@email.com.br"
				},
				{
			    	"_id":3,
				    "nome":"Contato JavaScript",
				    "email":"javaScript@email.com.br"
				}
			]
	
});