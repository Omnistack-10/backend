const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// a array function recebe dois parâmetros fixos
// request é a requisição e response é a reposta da resquisição
routes.post('/devs', DevController.store);

// exportas as rotas para a aplicação passa a reconhecer as rotas
module.exports = routes;