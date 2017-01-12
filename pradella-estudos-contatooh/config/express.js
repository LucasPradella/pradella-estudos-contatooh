// config/express.js
var express = require('express');

module.exports = function() {
	var app = express();

	// configuração de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	//configuracao ejs(template)
	app.set('view engine','ejs')
	app.set('views','./app/views')
	
	return app;
};