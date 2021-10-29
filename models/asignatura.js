

const {Schema,model} = require('mongoose');

const AsignaturaSchema = Schema({
    codigo:{type:String,required:[true,'El codigo es obligatorio'],unique: true},
    nombre:{type:String,required:[true,'El nombre es obligatorio'],unique: true},
    hTeorica:{type:Number,required:[true,'las horas teorica es obligatoria']},
    hPractica:{type:Number,},
    grupTeoria:{type:Number},
    grupPractica:{type:Number},
});

// para no retornar la contraseña
AsignaturaSchema.methods.toJSON = function(){
    const {estado,__v,_id,...resto} = this.toObject();
    resto.uid = _id;
    return resto;
}

module.exports = model('Asignatura',AsignaturaSchema);