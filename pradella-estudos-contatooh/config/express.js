// config/express.js
var express = require('express');
var load = require('express-load')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

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
	
	//add capitulo 8 autenticação
	app.use(cookieParser());
	app.use(session({ secret: 'homem avestruz',	resave: true, saveUninitialized: true}));
	
	app.use(passport.initialize());
	app.use(passport.session());
		
	
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