const express = require('express'); // criação e controle de rotas

const app = express(); // iniciando objeto para iniciar a aplicação

// app.use() é uma regra que vai ser válido por todas as regras da aplicação
// aplicação agora vai entender requições com corpo no formato json
app.use(express.json())

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmtros
// Query Params: request.query (Filtros, ordenação, paginação, ...)
//               muito usado: GET. 
//               Ex: /users?pesquisar=Batatinha
// Route Params: request.params (Identificar uma recurso na alteração ou remoção)
//               muito usado: PUT, DELETE
//               Ex: /user/1
// Body: request.body (Dados para criação ou alteração de um registro)
//       muito usado: POST

// rota principal
// a array function recebe dois parâmetros fixos
// request é a requisição e response é a reposta da resquisição
app.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Hello' });
});

app.listen(3333); // configurar uma porta para rodar a aplicação

