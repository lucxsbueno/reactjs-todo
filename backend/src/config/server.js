//  O body-parser analisa o pedido e o converte
//  em um formato a partir do qual você pode facilmente
//  extrair informações relevantes que possa precisar.
const bodyParser = require('body-parser');

//  Servidor web
const express = require('express');

//  Instância do express para startar o servidor
const server = express();

//  Permissões de cabeçalho de requisição
const allowCors = require('./cors');

//  Aplicando (configurando) midllewares para requisição
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.use(allowCors);

//  PORTA
const port = 3003;

server.listen(port, function (params) {
    console.log(`server running on port: localhost:${port}.`);
})

module.exports = server;