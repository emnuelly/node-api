// import das funções que usamos
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
//a url usada junto com a porta e o banco usado (pode mudar caso haja senha no banco), passa um objeto de parametr
// const URI = 'mongodb://localhost:27017/nodeapi';
// const OPTS = { useNewUrlParser: true };
//cria a conexão com o banco e retorna o erro junto com
// mongoose.connect(URI, OPTS, function(err) {
//   if (err) { return console.error('falhou mermã, desisti não ' + err);}
// });

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//cria apos a crianção do banco
// faz o require das paginas atraves do import do requireDir
requireDir('./src/models/');

//Rotas: ele recebe todas as requisições
app.use('/api', require("./src/routes"));

//dizendo que a aplicação tem que ouvir a porta 3001 da web
app.listen(3001);
