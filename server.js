const express = require('express'); // importanto o express que retorna uma função
//chamando a função que foi importada
const app = express();

//toda vez que o usuario acessar a rota raiz, exibirá  que for feito.
// esse get passa uma função que recebe dois parâmetros: req(requisição do servidor, contem os detalhes e informaçoes da requisição)  
//e res(a resposta que damos a requisição.) faz a requisição e o servidor dar uma resposta.
app.get('/', (req, res) => {
    res.send('HELLOOOOW')
});



//dizendo que a aplicação tem que ouvir a porta 3001 da web
app.listen(3001);