// config/express.js
var express = require('express');
var load = require('express-load');

// comentario 1: removemos essa variavel de ambiente, quando comecamos a usar express load
//var home = require('../app/routes/home');



module.exports = function() {
	var app = express();

	// configuração de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	//configuracao ejs(template)
	app.set('view engine','ejs')
	app.set('views','./app/views')
	
	

	load('models',{cwd: 'app'})
			.then('controllers')
			.then('routers')
			.into(app)
	
	return app;
};