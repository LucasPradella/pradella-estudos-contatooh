var mongoose = require('mongoose');
//isso abilita a visualização no console
mongoose.set('debug',true);
module.exports = function(uri) {
//   mongoose.connect(uri); linha de baixo foi adicionada, caso queira abrir um pool de conexão mair, o default é 5
	mongoose.connect(uri, { server: { poolSize: 15 }});
	
	
	mongoose.connection.on('connected', function() {
		console.log('Mongoose! Conectado em ' + uri);
		});
		mongoose.connection.on('disconnected', function() {
		console.log('Mongoose! Desconectado de ' + uri);
		});
		mongoose.connection.on('error', function(erro) {
		console.log('Mongoose! Erro na conexão: ' + erro);
		});
		
		
	
	process.on('SIGINT', function() {
			mongoose.connection.close(function() {
			console.log('Mongoose! Desconectado pelo término da aplicação');
			
			// 0 indica que a finalização ocorreu sem erros
			process.exit(0);
			
			});
		});
}