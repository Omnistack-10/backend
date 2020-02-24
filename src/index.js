const express = require('express'); // criação e controle de rotas
const mongoose = require('mongoose'); // criação do objeto para banco de dados
const cors = require('cors');
const http = require('http'); // fazer que a aplicação responda a requições http e as requições websockets
const routes = require('./routes'); // importantando as rotas

const app = express(); // iniciando objeto para iniciar a aplicação
const server = http.Server(app); // extrai da aplicação express, o servidor http, que está fora da aplicação express

// https://account.mongodb.com/account/login
mongoose.connect('mongodb+srv://maycon:semsenha@cluster0-nbq7g.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use() é uma regra que vai ser válido por todas as regras da aplicação
// aplicação agora vai entender requições com corpo no formato json
app.use(cors());
app.use(express.json())
app.use(routes);


server.listen(3333); // configurar uma porta para rodar a aplicação

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
