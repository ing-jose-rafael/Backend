const {Usuario,Role, Categoria, Producto} = require('../models');

// funcion para validar el email si existe
const emailExiste = async ( correo = '' )=>{
    const existeEmail = await Usuario.findOne({correo}).exec();
    if (existeEmail) throw new Error(`Ese correo ${correo}, ya está registrado`);
}
/** 
 * Válidando el rol
 */
const esRolValido = async (rol='')=>{
    const existeRol = await Role.findOne({rol}).exec();
    if (!existeRol) throw new Error(`El rol ${rol} no está registrado en la Base de Datos`);
}
/**
 * Validar que exista el ID
 */
const existeId=async(id='')=>{
    const existeID = await Usuario.findById(id).exec();
    if (!existeID) throw new Error(`El ${id} no existe en la BD`);
        
    
}
const existeIdCategoria=async(id='')=>{
    const existeID = await Categoria.findById(id).exec();
    if (!existeID) throw new Error(`El ${id} no existe en la BD`);
}
const existeProductoPorId=async(id='')=>{
    const existeID = await Producto.findById(id).exec();
    if (!existeID) throw new Error(`El ${id} no existe en la BD`);
}
module.exports = {
    emailExiste,
    esRolValido,
    existeId,
    existeIdCategoria,
    existeProductoPorId
}