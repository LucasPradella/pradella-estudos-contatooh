//controller

// valos adicionar uma lista em memoria, logo vamos refatorar para buscar essas informacoes de uma base . 
 var contatos= [
	 {_id : 1, nome : "java", email : "java@pradella.com.br"},
	 {_id : 2, nome : "scala", email : "scalaa@pradella.com.br"},
	 {_id : 3, nome : "nodejs", email : "nodejs@pradella.com.br"},
	 {_id : 4, nome : "javaScript", email : "JavaScript@pradella.com.br"}
 ]


module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};

	
	controller.obtemContato = function(req, res){
		console.log(req.params.id);

		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		
		contato ? 
			res.json(contato): res.status(404).send('contato nao encontrado');
		};
		
	return controller;
  };