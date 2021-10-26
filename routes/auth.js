const { Router } = require('express'); // para poder crear la constante router
const { check } = require('express-validator');
const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.post('/login',[
    check('correo','El correo no válido').isEmail(),
    check('password','El correo es obligatorio').notEmpty(),
    validarCampos
],login);
/**
 * Ruta de autenticacion de Google Sign In
 */
router.post('/google',[
    check('id_token','id_token es necesario').notEmpty(),
    validarCampos
],googleSignIn);

module.exports = router;