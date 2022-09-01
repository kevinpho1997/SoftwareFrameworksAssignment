module.exports = {
    connect: function(io, PORT) {
        io.on('connection', (socket) => {
            console.log(`user connected on port: ${PORT}:${socket.id}`);
            // emit message to all sockets when message is received
            socket.on('message', (message) => {
                io.emit('message', message);
                console.log(message);
            })
        });
    }
}