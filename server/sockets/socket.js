const {io} = require('../server');
io.on('connection', (client) => {
    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //Escuchar cliente
    client.on('enviarMensaje', (data,callback) => {
        console.log('mensaje', data);

        client.broadcast.emit('enviarMensaje', data);
        // if(mensaje.usuario){
        //     callback({
        //         resp: {ok: true}
        //     });
        // }else{
        //     callback({
        //         resp: {
        //             ok: false,
        //             err: 'falta usuario'
        //         }
        //     });
        // }
    });

    client.emit('enviarMensaje', {
        usuario : 'Admin',
        mensaje : 'hola soy el servidor gatillo'
    });
});