const {Schema, model} = require('mongoose');
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
const CategoriaSchema = Schema({
    nombre: {
        Type:String,
        required:[true,'El nombre es obligatorio']
    },
    estado:{
        Type: Boolean,
        default: true,
        required: [true,'El estado es obligatorio'],
    },
    usuario:{
        Type: Schema.Types.ObjectId,
        ref:'Usuario',
        required: [true,'El usuario es obligatorio'],
    }
});

module.exports = model('Categoria',CategoriaSchema);