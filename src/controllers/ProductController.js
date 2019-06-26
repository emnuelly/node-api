/************************

Controller criada para manipular as models

************************/

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//exportando objetos que possuem funçõels
module.exports = {
  async index(req, res){
    //buscando registros n banco de dados e salvando em products
    const products = await Product.find();

    //retorna em json
    return res.json(products);
  }

};
