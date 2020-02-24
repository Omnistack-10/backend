const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    // adicionado um eventListen, ouvindo um evento de conexão 
    // toda vez que um usuário conectar a aplicação, via protocolo websocket
    // a aplicação recebe um objeto socket
    io.on('connection', socket => {
        console.log(socket.id);
    })
};