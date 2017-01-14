//controller

// valos adicionar uma lista em memoria, logo vamos refatorar para buscar essas informacoes de uma base . 
 var contatos= [
	 {_id : 1, nome : "java", email : "java@pradella.com.br"},
	 {_id : 1, nome : "scala", email : "scalaa@pradella.com.br"},
	 {_id : 1, nome : "nodejs", email : "nodejs@pradella.com.br"},
	 {_id : 1, nome : "javaScript", email : "JavaScript@pradella.com.br"}
 ]


module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	return controller;

}