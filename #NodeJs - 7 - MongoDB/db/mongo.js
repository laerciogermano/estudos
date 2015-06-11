'use strict';

var mongoose = require('mongoose');


module.exports = function(){
	var db = mongoose.connect('mongodb://localhost/meubolachao');
	var conn = mongoose.connection;

	conn.on('open', function(){
		console.log('Conexão com o mongoDB bem sucedida');
	});
};