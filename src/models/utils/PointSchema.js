//IMPORT DO MONGOOSE
const mongoose = require('mongoose');

//CRIANDO UM MODELO DE SCHEMA
const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

//EXPORTANDO O MODELO POINTSCHEMA
module.exports = PointSchema;