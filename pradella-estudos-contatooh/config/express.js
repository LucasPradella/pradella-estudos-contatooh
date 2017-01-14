// config/express.js
var express = require('express');
var bodyParser = require('body-parser')
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
	
	//middleware body-parse
	app.set(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	
		
	
	load('models',{cwd:'app'})
			.then('controllers')
			.then('routes')
			.into(app);

	
/* Veja comentario 1
 * 
 * 	home(app);
*/	
	
	return app;
};