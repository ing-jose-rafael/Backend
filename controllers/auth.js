const { response } = require('express');

const login = async (req,resp=response) => {
    resp.json({
        msg:'Ruta auth POST'
    });
}

module.exports = { login }