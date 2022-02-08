
// servidor express
const express = require('express');
const app = express();

// servidor de sockets
const server = require('http').createServer(app);

// configuracion del socket server
// const io = require('socket.io')(server);

// Archivos estáticos
app.use( express.static(__dirname + '/public') );

// // conexion
io.on('connection', ( socket ) => { 

	socket.emit('mensaje-bienvenida', { 
		msg: 'Bienvenido al server',
		fecha: new Date()
	});

	socket.on('mensaje-cliente', (payload) => {
		console.log(payload);

		// socket => solo el socket que emitio el mensaje
		// io => cliente global, se lo envia en tiempo global a todos
		io.emit('mensaje-from-server', payload);
	});
});

server.listen(8080, () => {
	console.log('Servidor corriendo');
});