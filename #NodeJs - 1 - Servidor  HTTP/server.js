// MEAN -> MongoDb, Express, Angular e Node

// módulo nativo do node
var http = require('http');
var querystring = require('querystring');

// Será executado quando houver uma requisição
var server = http.createServer(function(request, response){
	var url = request.url;
	var method = request.method;

	// Rota /
	if(url == '/' && method == 'GET'){
		response.end('Você está na index');
	}
	// Rota /login método GET
	else if(url == '/login' && method == 'GET'){
		/*
		<form action="/login" method="POST">
			<input type="text" name="login" />
			<input type="password" name="password" />
			<input type="submit" value="Enviar" />
		</form>
		*/
		response.setHeader("Content-Type", "text/html");
		response.write('<form action="/login" method="POST">');
		response.write('<input type="text" name="login" />');
		response.write('<input type="password" name="password" />');
		response.write('<input type="submit" value="Enviar" />');
		response.write('</form>');
		response.end();
	}

	// Rota /login método POST
	else if(url == '/login' && method == 'POST'){
		// request.on('data' ... ); Evento que dispara
		// quando os dados do formulário
		// são enviados

		var data = '';
		request.on('data', function(buffer){
			data += buffer.toString();
		});

		request.on('end', function(){
			// login=algumacoisa&password=algumacoisa
			var query = data;
			// query -> {login : 'algumacoisa', password: 'algumacoisa'}
			var queryObj = querystring.parse(query);
			if(queryObj.login == 'admin' && queryObj.password == 'admin')
				response.end('Login efetuado com sucesso.');
			else
				response.end('Login ou password incorreto');	
		});

	}
	// Rota não configurada
	else{
		response.end('Página não encontrada');
	}
});

// Inicia o servidor
server.listen(5000, '127.0.0.1', function(){
	console.log('Servidor iniciado');
});



