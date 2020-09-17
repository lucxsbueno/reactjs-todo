//  Servirá para o mapeamento dos objetos javascript
//  para os documentos que vão para o mongo e
//  serve para a conexão com o mongo também. 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/todo');
