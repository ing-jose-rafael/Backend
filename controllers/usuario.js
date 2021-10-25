const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuarioGet = (req,res) => {
    const {limited} = req.query;
    res.json({
        msg:'Peticion GET',
        limited
    });
}
const usuarioPut = (req,res) => {
    const parames = req.params;
    
    res.json({
        msg:'Peticion PUT',
        parames

    });
}
const usuarioDelete = (req,res)=>{
    res.json({
        msg:'Peticion DELETE'
    });
}
const usuarioPost = async (req,res = response) => {

    const {nombre,correo,rol,password} = req.body;
    const usuario = new Usuario({nombre,correo,rol,password});

    //Encritar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en la DB
    await usuario.save();

    res.status(201).json({
        msg:'Peticion Post',
        usuario,
    });
}
// exportando las funciones
module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioDelete,
    usuarioPost
}