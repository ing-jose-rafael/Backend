const {Router} = require('express');
const { obtenerProfesor, obtenerProfesorPorID, crearProfesor, actualizarProfesor, eliminarProfesor } = require('../controllers/profesores');

const router = Router();

router.get('/',obtenerProfesor);
router.get('/:id',obtenerProfesorPorID);
router.post('/',crearProfesor);
router.put('/:id',actualizarProfesor);
router.delete('/:id',eliminarProfesor);

module.exports = router;