'use strict';

var appPath = process.cwd();
var Storage = require(appPath + '/models/Storage');

module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	});

	app.post('/api/album/create', function(req, res){
		var params = req.body;
		Storage.add(params);
		res.end('Adicionado com sucesso');
	});

	app.get('/api/album/get/:nome', function(req, res){
		var nome = req.params.nome;
		var album = Storage.get(nome);
		res.json(album);
	});

	app.get('/api/album/remove/:nome', function(req, res){
		var nome = req.params.nome;
		Storage.del(nome);
		res.end('Removido com sucesso');
	});

	app.get('/api/album/getall', function(req, res){
		var all = Storage.getAll();
		res.json(all);
	});

};