const { Router } = require('express');
const { buscar } = require('../controllers/buscar');

const router = Router();

router.get('/',buscar);

module.exports = router;