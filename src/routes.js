const { Router } = require('express');

const routes = Router();

// rota principal
// a array function recebe dois parâmetros fixos
// request é a requisição e response é a reposta da resquisição
routes.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Hello' });
});

// exportas as rotas para a aplicação passa a reconhecer as rotas
module.exports = routes;