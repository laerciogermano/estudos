'use strict';

var ejs = require('ejs');
var bodyParser = require('body-parser');
var express = require('express');
var appPath = process.cwd();

module.exports = function(app){
	
	// Pega os dados de requisição do formulário post e transforma em objeto {}
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// Setand static como pública "ALIAS"
	app.use('/static', express.static('./static'));


	// Configurando as views
	app.set('view engine', 'html');
	app.engine('html', ejs.renderFile);
	app.set('views', appPath + '/views');
};