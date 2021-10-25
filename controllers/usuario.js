const { response } = require('express');
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
const usuarioPost = (req,res) => {
    const body = req.body;
    res.status(201).json({
        msg:'Peticion Post',
        body
    });
}
// exportando las funciones
module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioDelete,
    usuarioPost
}