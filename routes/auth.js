const { Router } = require('express'); // para poder crear la constante router
const { login } = require('../controllers/auth');

const router = Router();

router.post('/login',login);

module.exports = router;