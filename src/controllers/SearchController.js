//IMPORT DO MODELO DEV
const Dev = require('../models/Dev');

//IMPORT DA FUNÇÃO PARA TRANSFORMAR UMA STRING EM ARRAY
const parseStringAsArray = require('../utils/parseStringAsArray');

//INDEX, SHOW, STORE, UPDATE, DESTROY

//EXPORT COM DEFINIÇÃO INSIDE
module.exports = {

    //MÉTODO INDEX = LISTAR TODOS A PARTIR DE PARAMETROS DE BUSCA
    async index(request, response) {
        //PEGO AS VARIAVEIS PASSADAS VIA PARAMETRO QUERY
        const { latitude, longitude, tecnologias} = request.query;

        //TRANSFORMANDO AS TECNOLOGIAS SEPARADAS POR VIRGULA EM ARRAY
        const techsArray = parseStringAsArray(tecnologias);

        //PROCURANDO OS DEVS PELO MODEL DO MONGOOSE
        const devs = await Dev.find({
            /*  FILTROS  */
            //FILTRAR PELO CAMPO TEC, $IN VARIAVEL DE AMBIENTE MONGO = QUANDO TIVER
            techs: {
                $in: techsArray
            },
            //FILTRAR PELA LOCATION, $NEAR VARIAVEL DE AMBIENTE MONGO PARA GEOLOCALIZACAO = PERTO DE
            location: {
                $near: {
                    //TIPO DE INFORMAÇÃO PROCURADA, E PARAMETROS DE BUSCA
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    //DISTANCIA MAXIMA DE RANGE
                    $maxDistance: 10000,
                },
            },
        });
        
        //RETORNANDO A RESPOSTA COMO JSON
        return response.json(devs);
    },

}