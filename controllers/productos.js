const { response } = require('express');

const obtenerProdutos = (req, res=response)=>{
    res.json({msg:'GET Controller'});
}
const obtenerProdutosPorId = (req, res=response)=>{
    res.json({msg:'GET por id Controller'});
}
const crearProduto = (req, res=response)=>{
    res.json({msg:'POST Controller'});
}
const editarProduto = (req, res=response)=>{
    res.json({msg:'PUT Controller'});
}
const eliminarProduto = (req, res=response)=>{
    res.json({msg:'DELETE Controller'});
}

module.exports={obtenerProdutos,obtenerProdutosPorId,crearProduto,editarProduto,eliminarProduto}