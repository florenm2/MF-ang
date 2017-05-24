'use strict';

var products = {
    
  getAllProducts: function(req, res){
    req.app.db.models.Product.find({}).exec(function(err, productList) {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(productList);
      return res.status(200).json(productList);
    })
  }
  };

module.exports = products;
