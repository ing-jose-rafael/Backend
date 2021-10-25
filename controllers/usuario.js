const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuarioGet = async (req,res) => {
    const {limited=10,desde = 0} = req.query;
    const usuarios = await Usuario.find()
        .skip( Number( desde ) )    
        .limit(Number(limited))
        .exec();
    res.json({
        msg:'Peticion GET',
        limited,desde,usuarios
    });
}
const usuarioPut = async (req,res) => {
    const {id} = req.params;
    const {_id,google,password,correo,...resto} = req.body;
    //TODO: mirar como se actuliza el correo
    const usuario = await Usuario.findByIdAndUpdate(id,resto,{ new: true } );
    res.json({
        usuario

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

    //Encriptar la contraseña
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