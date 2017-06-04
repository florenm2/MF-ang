'use strict';

//public api
var products = {

  getAllProducts: function(req, res){
    req.app.db.models.Product.find({}).exec(function(err, productList) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(productList);
    })
  },
  getAllProductsPublic: function(req, res){
    req.app.db.models.Product.find({}, {title:1, price:1, _id:0 }).exec(function(err, productList) {
      if (err) {
        return next(err);
      }

      //update the Views database
      var now = new Date;
      var currentDate = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
        0, 0, 0, 0);

        var fieldsToSearch = {
          date: currentDate
        };
        var fieldsToSet = {
          $inc: {"apiCalls": 1}
        };

        req.app.db.models.View.update(fieldsToSearch, fieldsToSet, {upsert: true}, function(err, view) {
          if (err) {
            return workflow.emit('exception', err);
          }

          workflow.view = view;
          return workflow.emit('response');
        });

      return res.status(200).json(productList);
    })
  },
  getAllProductsFilteredPublic: function(req, res){
    req.app.db.models.Product.find({"type" : req.params.type}, {title:1, price:1, _id:0 }).exec(function(err, productList) {
      if (err) {
        return next(err);
      }

      //update the Views database
      var now = new Date;
      var currentDate = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
        0, 0, 0, 0);

        var fieldsToSearch = {
          date: currentDate
        };
        var fieldsToSet = {
          $inc: {"apiCalls": 1}
        };

        req.app.db.models.View.update(fieldsToSearch, fieldsToSet, {upsert: true}, function(err, view) {
          if (err) {
            return workflow.emit('exception', err);
          }

          workflow.view = view;
          return workflow.emit('response');
        });


      return res.status(200).json(productList);
    })
  }
};

module.exports = products;
