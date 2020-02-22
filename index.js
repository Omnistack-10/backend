const express = require('express'); // criação e controle de rotas

const app = express(); // iniciando objeto para iniciar a aplicação

// rota principal
// a array function recebe dois parâmetros fixos
// request é a requisição e response é a reposta da resquisição
app.get('/', (request, response) => {
    return response.json({message: 'Hello Omnistack'});
}); 

app.listen(3333); // configurar uma porta para rodar a aplicação

