const Usuario = require('../models/usuario');

// funcion para validar el email si existe
const emailExiste = async ( correo = '' )=>{
    const existeEmail = await Usuario.findOne({correo}).exec();
    if (existeEmail) throw new Error(`Ese correo ${correo}, ya está registrado`);
}
module.exports = {
    emailExiste
}