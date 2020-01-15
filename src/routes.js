//IMPORT DO MÓDULO ROUTER EXPRESS
const { Router } = require('express');

//IMPORT DOS CONTROLLERS
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//DEFININDO QUE A VARIAVEL ROUTES USARÁ O RETORNO DA FUNÇÃO ROUTER()
const routes = Router();

//ADD OS MÉTODOS HTTP
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);

//EXPORTANDO PARA OUTROS ARQUIVOS USAREM
module.exports = routes;