const { response, request } = require("express");

const obtenerProfesor = (req=request,res=response) => {
    res.json({ msg:'GET Profesores' });
}
const obtenerProfesorPorID = (req=request,res=response) => {
    res.json({ msg:'GET ID Profesores' });
}
const crearProfesor = (req=request,res=response) => {
    res.json({ msg:'POST Profesores' });
}
const actualizarProfesor = (req=request,res=response) => {
    res.json({ msg:'PUT Profesores' });
}
const eliminarProfesor = (req=request,res=response) => {
    res.json({ msg:'DELETE Profesores' });
}

module.exports = {
    obtenerProfesor,
    obtenerProfesorPorID,
    crearProfesor,
    actualizarProfesor,
    eliminarProfesor,
}