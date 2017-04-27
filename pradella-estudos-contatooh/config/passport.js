var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
	
	var Usuario = mongoose.model('Usuario');
	
	// código anterior omitido
	passport.use(new GitHubStrategy({
		clientID : '7df09886d5b36da33051',
		clientSecret : 'e77395d52fb8265b17ff6d05bba9e4671046e28d',
		callbackURL : 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		
			Usuario.findOrCreate({
				"login" : profile.username
			}, {
				"nome" : profile.username
			}, function(erro, usuario) {
				if (erro) {
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			});
	}));
	
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});
	

	passport.deserializeUser(function(id, done) {
			Usuario.findById(id).exec().then(function(usuario) {
				done(null, usuario);
			});
	});
	
};