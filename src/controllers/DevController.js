//IMPORT DA BIBLIOTECA AXIOS PARA REQUISIÇÃO DE APIS
const axios = require('axios');
//IMPORT DO MODEL DEV
const Dev = require('../models/Dev');
//IMPORT DA FUNÇÃO PARA TRANSFORMAR UMA STRING EM ARRAY
const parseStringAsArray = require('../utils/parseStringAsArray');

//INDEX, SHOW, STORE, UPDATE, DESTROU
module.exports = {
    //MÉTODO INDEX : LISTAR TODOS
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    //MÉTODO STORE: INSERT
    async store (request, response) {
        //PEGO AS VARIAVEIS PASSADAS VIA BODY
        const { github_username, techs, latitude, longitude } = request.body;
        
        //VERIFICA DEV DUPLICADO, 'Dev = Model'
        let retDev = await Dev.findOne({ github_username });

        //SE O DEV NÃO FOR DUPLICADO
        if(!retDev) {
            //CONSULTANDO API DO GITHUB COM O PARAMETRO DE BUSCA GITHUB_USERNAME
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
                    
            //SE O NAME NÃO EXISTIR POR PADRÃO SERÁ O LOGIN
            const { name = login, avatar_url, bio } = apiResponse.data;

            //TRANSFORMO AS TECNOLOGIAS EM UM ARRY
            const techsArray = parseStringAsArray(techs);

            //1 longitude, 2 latitude
            //DEFINO A LOCATION, TYPE = TIPO DA LOCATION, LEMBRANDO QUE O MONGO SETÁ AS COORDENADAS COMO 1º LONGITUDE, 2º LATITUDE 
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            //SALVO NO MONGO
            retDev = await Dev.create({
                github_username, 
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
            
            //PARA VERIFICAR SE FOI SALVO É SÓ ACESSAR O MONGODB COMPASS
        }

        //RETORNO UM JSON DO RESULTADO
        return response.json(retDev);
    },

    //MÉTODO UPDATE = EDIT
    async update(){},

    //MÉTODO DESTROY = DELETE
    async destroy(){}
}