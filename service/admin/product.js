'use strict';

var product = {
  find: function(req, res, next){

    var filters = {};

    req.app.db.models.Product.pagedFind({
      filters: filters,
      keys: 'title type size price priceHistory',
      limit: req.query.limit,
      page: req.query.page,
      sort: req.query.sort
    }, function(err, results) {
      if (err) {
        return next(err);
      }

      results.filters = req.query;
      res.status(200).json(results);
    });
  },

  read: function(req, res, next){
    req.app.db.models.Product.findById(req.params.id).exec(function(err, product) {
      if (err) {
        return next(err);
      }
      res.status(200).json(product);
    });
  },

  create: function(req, res, next){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      if (!req.user.roles.admin.isMemberOf('root')) {
        workflow.outcome.errors.push('You may not create statuses.');
        return workflow.emit('response');
      }

      if (!req.body.title) {
        workflow.outcome.errors.push('A name is required.');
        return workflow.emit('response');
      }

      workflow.emit('duplicateProductCheck');
    });

    workflow.on('duplicateProductCheck', function() {
      req.app.db.models.Product.findById(req.app.utility.slugify(req.body.title)).exec(function(err, product) {
        if (err) {
          return workflow.emit('exception', err);
        }

        if (product) {
          workflow.outcome.errors.push('That status+pivot is already taken.');
          return workflow.emit('response');
        }

        workflow.emit('createProduct');
      });
    });

    workflow.on('createProduct', function() {
      var fieldsToSet = {
        _id: req.app.utility.slugify(req.body.title),
        title: req.body.title
      };

      req.app.db.models.Product.create(fieldsToSet, function(err, product) {
        if (err) {
          return workflow.emit('exception', err);
        }

        workflow.outcome.product = product;
        return workflow.emit('response');
      });
    });

    workflow.emit('validate');
  },

  update: function(req, res, next){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      if (!req.user.roles.admin.isMemberOf('root')) {
        workflow.outcome.errors.push('You may not update statuses.');
        return workflow.emit('response');
      }
      workflow.emit('patchProduct');
    });


    workflow.on('patchProduct', function() {
      var fieldsToSet = {
        price: req.body.price
      };

      var fieldsToAdd = {
        priceHistory:
        {
           date:  req.body.date,
           oldPrice: req.body.oldPrice,
           newPrice:    req.body.price
        }
      };

      var fields = {
        $set: fieldsToSet,
        $addToSet: fieldsToAdd
      };
      var options = { new: true };

      req.app.db.models.Product.findByIdAndUpdate(req.params.id, fields, options, function(err, product) {
        if (err) {
          return workflow.emit('exception', err);
        }
        workflow.outcome.product = product;
        return workflow.emit('response');
      });
    });

    workflow.emit('validate');
  },

  delete: function(req, res, next){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      if (!req.user.roles.admin.isMemberOf('root')) {
        workflow.outcome.errors.push('You may not delete statuses.');
        return workflow.emit('response');
      }

      workflow.emit('deleteProduct');
    });

    workflow.on('deleteProduct', function(err) {
      req.app.db.models.Product.findByIdAndRemove(req.params.id, function(err, product) {
        if (err) {
          return workflow.emit('exception', err);
        }

        workflow.emit('response');
      });
    });

    workflow.emit('validate');
  }
};
module.exports = product;