const { Router } = require('express'); // para poder crear la constante router
const { check } = require('express-validator');

const { usuarioGet, usuarioPut,usuarioDelete, usuarioPost} = require('../controllers/usuario');
const {emailExiste, esRolValido,existeId} = require('../helpers/db-validators');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router();

router.get('/',usuarioGet); // mandando la referencia  de la funsion
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','Correo no válido').isEmail(),
    check('correo').custom(emailExiste),
    check('password','El password debe ser más de 5 letras').isLength({min:5}).not().isEmpty(),
    check('rol').custom(esRolValido), 
    
    validarCampos
],usuarioPost);
/**
 * para actualizar se ouede quitar la validacion del rol
 * */
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeId),
    check('rol').custom(esRolValido),
    check('rol').custom(esRolValido), 
    validarCampos
],usuarioPut);

router.delete('/',usuarioDelete);

module.exports = router;