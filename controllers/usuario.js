const { response } = require('express');
const usuarioGet = (req,res) => {
    res.json({
        msg:'Peticion GET'
    });
}
const usuarioPut = (req,res)=>{
    res.json({
        msg:'Peticion PUT'
    });
}
const usuarioDelete = (req,res)=>{
    res.json({
        msg:'Peticion DELETE'
    });
}
const usuarioPost = (req,res)=>{
    res.status(201).json({
        msg:'Peticion Post'
    });
}
// exportando las funciones
module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioDelete,
    usuarioPost
}