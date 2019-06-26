//import
const mongoose = require('mongoose');

//variavel que recebe o objeto que cria os campos salvos no campo
const ProductSchema = new mongoose.Schema({
  //o produto tem um titulo do tipo string
    title: {
        type: String,
        required: true,
    },
    // descrição
    description: {
        type: String,
        required: true,
    },
    // link que vai dá para o produto
    url: {
        type: String,
        required: true,
    },
    //se preenche automaticamente, e salva a data atual da craiaçao de cada produto
    createdAt: {
      type: Date,
      default: Date.now,
    }
});

//codigo usado para resgitrar um model, ou seja, criar uma tabela no banco de dados
mongoose.model('Product', ProductSchema);
