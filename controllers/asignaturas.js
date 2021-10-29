const { request, response } = require("express");

const obtenerAsignatura = (req=request, res=response) => {
    res.json({msg:'GET'});
}
const obtenerAsignaturaID = (req=request, res=response) => {
    res.json({msg:'GET ID'});
}
const crearAsignatura = (req=request, res=response) => {
    res.json({msg:'POST'});
}
const actualizarAsignatura = (req=request, res=response) => {
    res.json({msg:'PUT'});
}
const eliminarAsignatura = (req=request, res=response) => {
    res.json({msg:'DELETE'});
}
module.exports = {
    obtenerAsignatura,
    obtenerAsignaturaID,
    crearAsignatura,
    actualizarAsignatura,
    eliminarAsignatura,
}