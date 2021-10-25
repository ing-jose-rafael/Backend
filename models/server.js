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
        this.app.get('/api',(req,res)=>{
            res.json({
                msg:'Peticion GET'
            });
        });
        this.app.put('/api',(req,res)=>{
            res.json({
                msg:'Peticion PUT'
            });
        });
        this.app.delete('/api',(req,res)=>{
            res.json({
                msg:'Peticion DELETE'
            });
        });
        this.app.post('/api',(req,res)=>{
            res.status(201).json({
                msg:'Peticion Post'
            });
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