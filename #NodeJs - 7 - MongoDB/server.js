// MEAN -> MongoDb, Express, Angular e Node

// módulos nativo do node
var http = require('http');

// módulos que precisam ser instalados
var express = require('express');
var app = new express();

// Será executado quando houver uma requisição
var server = http.createServer(app);

// Configuraço
require('./config/express')(app);

// Modelo Album
require('./models/Album')();

// Route
require('./routes/route')(app);

// db
require('./db/mongo')();

// Inicia o servidor
server.listen(5000, '0.0.0.0', function(){
	console.log('Servidor iniciado');
});

