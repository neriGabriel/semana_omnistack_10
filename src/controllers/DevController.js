const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


//index, show, store, update, destroy
module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        
        //verifica dev duplicado Dev = model
        let retDev = await Dev.findOne({ github_username });

        if(!retDev) {
            //consultando a api do github
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
                    
            //se name n existir por padrão o name será o login
            const { name = login, avatar_url, bio } = apiResponse.data;

            //transformo em array
            const techsArray = parseStringAsArray(techs);

            //1 longitude, 2 latitude
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            //salvo no mongo
            retDev = await Dev.create({
                github_username, 
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            //se quiser verificar é só acessar o mongodb compass
        }

        
        return response.json(retDev);
    },

    async update(){},

    async destroy(){}
}