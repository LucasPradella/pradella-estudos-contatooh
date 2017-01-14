//Rotas

//quando usamos express load essa linha nao e mais necessaria
// var controller = require('../controllers/home')();

module.exports = function(app){
	var controller = app.controllers.home;
	app.get('/', controller.index);
}