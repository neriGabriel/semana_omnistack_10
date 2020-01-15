//IMPORT DO MONGOOSE
const mongoose = require('mongoose');

//IMPORT DO SCHEMA POINTS
const PointSchema = require('./utils/PointSchema');


//DEFINIÇÃO DA 'ENTIDADE' DEVSCHEMA
const DevSchema = new mongoose.Schema({
    name:            String,
    github_username: String,
    bio:             String,
    avatar_url:      String,
    techs:           [String], //-> vetor de strings
    location:        {
        type: PointSchema,
        index: '2dsphere'
    }
});

//EXPORTANDO A ENTIDADE DEV
module.exports = mongoose.model('Dev', DevSchema);
