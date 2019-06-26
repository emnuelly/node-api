// import das funções que usamos
const express = require('express'); 
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
//a url usada junto com a porta e o banco usado (pode mudar caso haja senha no banco), passa um objeto de parametr
const URI = 'mongodb://localhost:27017/nodeapi';
const OPTS = { useNewUrlParser: true };

mongoose.connect(URI, OPTS, function(err) {
  if (err) { return console.error('failed' + err);}
}); 


/*CRIANDO UMA ROTA: Toda vez que o usuario acessar a rota raiz, exibirá  que for feito.
esse get passa uma função que recebe dois parâmetros: req(requisição do servidor, contem os detalhes e informaçoes da requisição)  
e res(a resposta que damos a requisição.) faz a requisição e o servidor dar uma resposta.
*/
app.get('/', (req, res) => {
    //passando uma resposta para a requisição
    res.send('cansadissima')
});



//dizendo que a aplicação tem que ouvir a porta 3001 da web
app.listen(3001);