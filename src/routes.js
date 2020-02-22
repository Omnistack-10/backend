const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// a array function recebe dois parâmetros fixos
// request é a requisição e response é a reposta da resquisição
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index)

// exportas as rotas para a aplicação passa a reconhecer as rotas
module.exports = routes;