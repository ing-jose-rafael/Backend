const { response } = require('express');
const bcryptjs = require('bcryptjs');

const { Usuario } = require('../models');

const login = async (req,res=response) => {
    const {  correo, password } = req.body;
    try {
        // Verificar si el email existe
        const usuario = await Usuario.findOne({correo}).exec();
        if (!usuario) {
            // no existe el usuario en la BD
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - correo'
            });    
        }
        // Verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - estado: false'
            }); 
        }
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password ); // true o false
        if (!validPassword) {
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - Password'
            }); 
        }

        res.json({
            msg:'Ruta auth POST',
            validPassword
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = { login }