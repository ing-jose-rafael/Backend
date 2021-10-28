const {Router} = require('express');
const { check } = require('express-validator');
const { obtenerProdutos, crearProduto, obtenerProdutosPorId, eliminarProduto, editarProduto } = require('../controllers/productos');

const router = Router();
/**
 * Ruta para obtener todos los productos - publico
 */
router.get('/',obtenerProdutos);
/**
 * Ruta para obtener un producto por Id - publico
 */
router.get('/:id',obtenerProdutosPorId);
/**
 * Ruta para crear un producto - publico
 */
router.post('/',crearProduto);
/**
 * Ruta actualizar producto - 
 * privado: personas con token válido
 */
router.put('/:id',editarProduto);
/**
 * Ruta eliminar producto - 
 * privado: solo ADMIN_ROLE 
 */
router.delete('/:id',eliminarProduto);



module.exports = router;