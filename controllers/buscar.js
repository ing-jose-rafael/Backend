const { response } = require("express");

const buscar = (req,res=response)=>{
    res.json({
        msg:'buscar'
    });
}

module.exports = {buscar}