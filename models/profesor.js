const { Schema, model } = require('mongoose');
/**
 * dedicacion tipo de contratacion
 * tope hora
 * cargo administrativo
 */
const ProfesorSchema = Schema({
    nombre:{type:String,required:[true,'El nombre es obligatorio']},
    cedula:{type:String,required:[true,'La cedula es obligatoria']},
    contratacion:{type:String,required:[true,'El tipo de contrato es obligatorio']},
    tope:{
        type:Number,
        default:0,
    },
    horaAsig:{
        type:Number,
        default:0,
    },
    estado:{
        type:Boolean,
        default:true,
    }
    
});

// para no retornar la contraseña
ProductoSchema.methods.toJSON = function(){
    const {estado,__v,_id,...resto} = this.toObject();
    resto.uid = _id;
    return resto;
}

module.exports = model('Profesor',ProfesorSchema);