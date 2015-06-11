// MEAN -> MongoDb, Express, Angular e Node

// módulos nativo do node
var http = require('http');
var querystring = require('querystring');
var cors = require('cors');
var request = require('request');

//Models
var Storage = require('./models/Storage');

// módulos que precisam ser instalados
var express = require('express');
var bodyParser = require('body-parser');
var app = new express();
var ejs = require('ejs');


// Será executado quando houver uma requisição
var server = http.createServer(app);

// Pega os dados de requisição do formulário post e transforma em objeto {}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Setand static como pública "ALIAS"
app.use('/static', express.static('./static'));


// Configurando as views
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');


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


// Inicia o servidor
server.listen(5000, '0.0.0.0', function(){
	console.log('Servidor iniciado');
});



