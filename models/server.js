const express = require ('express');
var cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //paths de rutas
        this.paths = {
            auth: '/api/auth',
        }

        // Middleware
        this.middlewares();

        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );
        // Directorio público
        this.app.use(express.static('public'));

    }

    // rutas
    routes(){
        // middleware condicional pasa por la ruta
        this.app.use('/api/usuarios',require('../routes/usuario'));
    }
    // para estar escuchando
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',process.env.PORT);
        });
    }

}

module.exports = Server;