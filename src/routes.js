const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

// a array function recebe dois parâmetros fixos
// request é a requisição e response é a reposta da resquisição
routes.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    // metodo trim remove espaços antes e depois de uma string
    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    // função para salvar Dev
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
    });

    return response.json(dev);
});

// exportas as rotas para a aplicação passa a reconhecer as rotas
module.exports = routes;