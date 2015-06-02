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

// Setand static como pública "ALIAS"
app.use('/static', express.static('./static'));


// Configurando as views
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');



app.get('/', function(req, res){
	res.render('index');
});


// Inicia o servidor
server.listen(5000, '127.0.0.1', function(){
	console.log('Servidor iniciado');
});



