// MEAN -> MongoDb, Express, Angular e Node

// módulos nativo do node
var http = require('http');
var querystring = require('querystring');

// módulos que precisam ser instalados
var express = require('express');
var bodyParser = require('body-parser');
var app = new express();
var ejs = require('ejs');


// Será executado quando houver uma requisição
var server = http.createServer(app);

// Pega os dados de requisição do formulário post e transforma em objeto {}
app.use(bodyParser.urlencoded({
    extended: true
}));


// Configurando as views
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');



app.get('/', function(req, res){
	res.end('Você está na index');
});

app.get('/login', function(req, res){
	res.render('index');
});

app.post('/login', function(req, res){
	var login = req.body.login;
	var password = req.body.password;
	if(login == 'admin' && password == 'admin')
		res.end('Login efetuado com sucesso.');
	else
		res.end('Login ou password incorreto');
});

app.get('*', function(){
	res.end('Página não encontrada');
});

// Inicia o servidor
server.listen(5000, '127.0.0.1', function(){
	console.log('Servidor iniciado');
});



