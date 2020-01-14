const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy
module.exports = {
    async index(request, response) {
        const { latitude, longitude, tecnologias} = request.query;

        const techsArray = parseStringAsArray(tecnologias);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json(devs);
    },

}