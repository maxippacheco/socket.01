class Sockets{

	constructor ( io ) {

		this.io = io;
		this.socketEvents();
	}

	socketEvents(){
		// on connection
		this.io.on('connection', ( socket ) => { 
			// listening event
			socket.on('mensaje-cliente', (payload) => {
				console.log(payload);
				this.io.emit('mensaje-from-server', payload);
			});
		});

	}

}

module.exports = Sockets;