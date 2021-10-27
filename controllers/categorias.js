const { response } = require('express');

const categoriaGet = (req, res = response) => {
    res.json({
        msg:'categoria GET'
    })
}
const categoriaGetById = (req, res = response) => {
    res.json({
        msg:'categoria GET ID'
    })
}
const categoriaPost = (req, res = response) => {
    res.json({
        msg:'categoria POST'
    })
}
const categoriaPut = (req, res = response) => {
    res.json({
        msg:'categoria PUT'
    })
}
const categoriaDelete = (req, res = response) => {
    res.json({
        msg:'categoria Delete'
    })
}

module.exports = {
    categoriaGet,
    categoriaGetById,
    categoriaPost,
    categoriaPut,
    categoriaDelete,
}