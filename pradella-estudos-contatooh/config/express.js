// config/express.js
var express = require('express');
var load = require('express-load')

/*comentario 1
 * liha comentada quando comecamos a utilizar express load
 * var home = require('../app/routes/home');*/

module.exports = function() {
	var app = express();

	// configuração de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	//configuracao ejs(template)
	app.set('view engine','ejs')
	app.set('views','./app/views')
	
	
	
	
	load('models',{cwd:'app'})
			.then('controllers')
			.then('routes')
			.into(app);

	
/* Veja comentario 1
 * 
 * 	home(app);
*/	return app;
};