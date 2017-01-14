//Rotas
/*
 * Necessario apenas quando nao utilizamos express load
 * var controller = require('../controllers/home')();
 * */

module.exports = function(app){
	var controller = app.controllers.home;
	app.get('/', controller.index);

}