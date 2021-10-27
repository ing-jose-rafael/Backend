
/**
 * como va lucir categoria en la DB
 */
/**
 *  {
 *      nombre: 'Nombre categoria',
 *      estado: true o false, 
 *      usuario: usuario
 *  }
 * ******************************************************************************
 * `CategoriaSchema` contenie el esquema de las categorias donde 
 ** `nombre` será string y obligatorio
 ** `estado` será boleano, por default `true` cuando se crea 
 ** `usuario` será de tipo Usuario, tiene que estar referenciado por un Usuario 
 */
const { Schema, model } = require('mongoose');
const CategoriaSchema = Schema({
    nombre: {
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true,
    },
    estado:{
        type: Boolean,
        default: true,
        required: [true,'El estado es obligatorio'],
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: [true,'El usuario es obligatorio'],
    }
});

module.exports = model('Categoria',CategoriaSchema);