const { response } = require('express');
const {Categoria} = require('../models');

const obtenerCategoria = (req, res = response) => {
    res.json({
        msg:'categoria GET'
    })
}
const obtenerCategoriaById = (req, res = response) => {
    res.json({
        msg:'categoria GET ID'
    })
}
const crearCategoria = async (req, res = response) => {
    const nombre = req.body.nombre.toUpperCase();
    // buscando si existe una categoria con ese nombre
    const categoriaDB = await Categoria.findOne({nombre});
    // console.log(!categoriaDB);
    if (categoriaDB) {
        return res.status(400).json({
            msg:`la categoria ${categoriaDB.nombre} ya existe`
        });
    }
    // creamos la data
    // como paso la validacion previa del JWT ya tenemos el usuario en la req
    const data = {
        nombre,
        usuario:req.usuario._id,
    }
    // creando la categoria
    const categoria = new Categoria(data);
    // guardando en la BD
    await categoria.save();
    res.status(201).json({ categoria });
}
const actualizarCategoria = (req, res = response) => {
    res.json({
        msg:'categoria PUT'
    })
}
const eliminarCategoria = (req, res = response) => {
    res.json({
        msg:'categoria Delete'
    })
}

module.exports = {
    obtenerCategoria,
    obtenerCategoriaById,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
}