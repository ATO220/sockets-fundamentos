   var socket = io();
        // "on" Escuchar
        socket.on('connect', function(){
            console.log('conectado al servidor');
        });
        socket.on('disconnect', function(){
            console.log('perdimos conexion con el servidor');
            
        });
        //"emit" Enviar informacion
        socket.emit('enviarMensaje', {
            mensaje : 'Hola server'
        }, function(resp){
            console.log('respuesta server : ', resp);
        });

        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor : ', mensaje);            
        });