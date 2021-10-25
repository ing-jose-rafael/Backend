const { Router } = require('express'); // para poder crear la constante router

const router = Router();

router.get('/',(req,res)=>{
    res.json({
        msg:'Peticion GET'
    });
});
router.put('/',(req,res)=>{
    res.json({
        msg:'Peticion PUT'
    });
});
router.delete('/',(req,res)=>{
    res.json({
        msg:'Peticion DELETE'
    });
});
router.post('/',(req,res)=>{
    res.status(201).json({
        msg:'Peticion Post'
    });
});

module.exports = router;