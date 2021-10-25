const express = require ('express');

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
        // Directorio público
        this.app.use(express.static('public'));
    }

    // rutas
    routes(){
        this.app.get('/',(req,res)=>{
            res.send('Hola');
        });
    }
    // para estar escuchando
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',process.env.PORT);
        });
    }

}

module.exports = Server;