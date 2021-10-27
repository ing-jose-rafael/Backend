const { Router } = require('express'); // para poder crear la constante router
const { check } = require('express-validator');
const { obtenerCategoria, obtenerCategoriaById, crearCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categorias');
// const { login, googleSignIn } = require('../controllers/auth');
const { validarJWT, validarCampos } = require('../middleware');

const router = Router();

/**
 * Ruta para obtener las categorias - publico
 */
router.get('/',obtenerCategoria);
/**
 * Ruta para obtener una categorias por Id - publico
 */
router.get('/:id',obtenerCategoriaById);
/**
 * Ruta crear categoria - 
 * privado: personas con token válido
 */
router.post('/',[
    validarJWT,
    check('nombre','El nombre es obligatorio').notEmpty(),
    validarCampos
],crearCategoria);
/**
 * Ruta actualizar categoria - 
 * privado: personas con token válido
 */
router.put('/:id',actualizarCategoria);
/**
 * Ruta eleiminat categoria - 
 * privado: solo ADMIN_ROLE 
 */
router.delete('/:id',eliminarCategoria);

module.exports = router;