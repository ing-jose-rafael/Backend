const {Router} = require('express');
const { obtenerAsignatura, obtenerAsignaturaID, crearAsignatura, actualizarAsignatura, eliminarAsignatura } = require('../controllers/asignaturas');

const router = Router();

router.get('/',obtenerAsignatura);
router.get('/:id',obtenerAsignaturaID);
router.post('/',crearAsignatura);
router.put('/:id',actualizarAsignatura);
router.delete('/:id',eliminarAsignatura);

module.exports = router