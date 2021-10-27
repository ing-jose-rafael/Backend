const { Router } = require('express'); // para poder crear la constante router
const { check } = require('express-validator');
const { categoriaPost, categoriaGet, categoriaPut, categoriaGetById, categoriaDelete } = require('../controllers/categorias');
// const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

/**
 * Ruta para obtener las categorias - publico
 */
router.get('/',categoriaGet);
/**
 * Ruta para obtener una categorias por Id - publico
 */
router.get('/:id',categoriaGetById);
/**
 * Ruta crear categoria - 
 * privado: personas con token válido
 */
router.post('/',categoriaPost);
/**
 * Ruta actualizar categoria - 
 * privado: personas con token válido
 */
router.put('/:id',categoriaPut);
/**
 * Ruta eleiminat categoria - 
 * privado: solo ADMIN_ROLE 
 */
router.delete('/:id',categoriaDelete);

module.exports = router;