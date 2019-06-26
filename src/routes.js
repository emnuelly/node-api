/*******************************


    Arquivo resposavel pela criação
    de todos as rotas.


*******************************/

//imports
const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController.js");

/*CRIANDO UMA ROTA:
Toda vez que o usuario acessar a rota raiz, exibirá  que for feito.
esse get passa uma função que recebe dois parâmetros: req(requisição do servidor, contem os detalhes e informaçoes da requisição)
e res(a resposta que damos a requisição.) faz a requisição e o servidor dar uma resposta.
*/
//passando a rota e o metodo
routes.get('/products', ProductController.index);

//expotando pois será usada em outra pagina
module.exports = routes;
