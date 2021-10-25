const { Router } = require('express'); // para poder crear la constante router
const { usuarioGet, usuarioPut,usuarioDelete, usuarioPost} = require('../controllers/usuario');

const router = Router();

router.get('/',usuarioGet); // mandando la referencia  de la funsion
router.post('/',usuarioPost);
router.put('/:id',usuarioPut);
router.delete('/',usuarioDelete);

module.exports = router;