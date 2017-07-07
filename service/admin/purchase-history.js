'use strict';

// public api
var purchaseHistory = {
  find: function (req, res, next) {
    req.query.limit = req.query.limit ? parseInt(req.query.limit, null) : 20;
    req.query.page = req.query.page ? parseInt(req.query.page, null) : 1;
    req.query.sort = req.query.sort ? req.query.sort : '_id';
    req.query.product = req.query.product ? req.query.product : '';
    req.query.orderDate = req.query.orderDate ? req.query.orderDate : '';
    req.query.search = req.query.search ? req.query.search : '';
    req.query.orderNumber = req.query.orderNumber ? req.query.orderNumber : '';
    req.query.datespan1 = req.query.datespan1 ? req.query.datespan1 : '';
    req.query.datespan2 = req.query.datespan2 ? req.query.datespan2 : '';

    var filters = {};
    if (req.query.orderNumber) {
      filters.orderNumber = new RegExp('^.*?' + req.query.orderNumber + '.*$', 'i');
    }

    if (req.query.product) {
      filters.product = req.query.product;
    }

    if (req.query.search) {
      filters.search = new RegExp('^.*?'+ req.query.search +'.*$', 'i');
    }

    if (req.query.datespan1 && req.query.datespan2) {
      filters.orderDate = {"$gte": req.query.datespan1, "$lte": req.query.datespan2};
    }

    req.app.db.models.PurchaseHistory.pagedFind({
      filters: filters,
      keys: 'orderNumber orderDate cost company user account',
      limit: req.query.limit,
      page: req.query.page,
      sort: req.query.sort
    }, function (err, results) {
      if (err) {
        return next(err);
      }
      results.filters = req.query;
      res.status(200).json(results);
    });
  },
  tally: function (req, res, next) {
    req.app.db.models.PurchaseHistory.aggregate([
     {$group:
       {
         _id: 
         {
           day: {$dayOfMonth: "$orderDate"},
           month: {$month: "$orderDate"}, 
           year: {$year: "$orderDate"}
         }, 
         total: {$sum: "$cost.raw"},
         count: {$sum: 1}
       }
     },
     {$sort: {count: 1}}
     ],
     function(err, results){
      if(err){
        return res.json({error: err.message})
      }
      else{
        return res.json(results)
      }
    })
  },

  findEverything: function (req, res, next) {
    req.app.db.models.PurchaseHistory.aggregate([
      {$group:
       {
         _id: "$user.id", purchases: { $push: "$$ROOT" } }
      },
     {$lookup:
       {
        from: "accounts",
        localField: "account.id",
        foreignField: "_id",
        as: "Accounts"
       }
     }
     
     ],
     function(err, results){
      if(err){
        return res.json({error: err.message})
      }
      else{
        return res.json(results)
      }
    })
  },

  create: function (req, res, next) {
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function () {
      // if (!req.body.username) {
      //   workflow.outcome.errors.push('Please enter a username.');
      //   return workflow.emit('response');
      // }

      // if (!/^[a-zA-Z0-9\-\_]+$/.test(req.body.username)) {
      //   workflow.outcome.errors.push('only use letters, numbers, -, _');
      //   return workflow.emit('response');
      // }

      workflow.emit('duplicatePHCheck');
    });

    workflow.on('duplicatePHCheck', function () {
      req.app.db.models.PurchaseHistory.findOne({orderNumber: req.body.orderNumber}, function (err, ph) {
        if (err) {
          return workflow.emit('exception', err);
        }

        if (user) {
          workflow.outcome.errors.push('That order number is already taken.');
          return workflow.emit('response');
        }

        workflow.emit('createPH');
      });
    });

    workflow.on('createPH', function () {
      var fieldsToSet = {
        //account.name: req.body.account,
        orderNumber: req.body.orderNumber,
        search: [
        req.body.orderNumber
        ]
      };
      req.app.db.models.User.create(fieldsToSet, function (err, ph) {
        if (err) {
          return workflow.emit('exception', err);
        }

        workflow.outcome.record = ph;
        return workflow.emit('response');
      });
    });

    workflow.emit('validate');
  },

  read: function(req, res, next){
    req.app.db.models.PurchaseHistory.findById(req.params.id).exec(function(err, phDetail) {
      if (err) {
        return next(err);
      }
      res.status(200).json(phDetail);
    });
  },

  update: function(req, res, next){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      // if (!req.body.isActive) {
      //   req.body.isActive = 'no';
      // }

      // if (!req.body.username) {
      //   workflow.outcome.errfor.username = 'required';
      // }
      // else if (!/^[a-zA-Z0-9\-\_]+$/.test(req.body.username)) {
      //   workflow.outcome.errfor.username = 'only use letters, numbers, \'-\', \'_\'';
      // }

      // if (!req.body.email) {
      //   workflow.outcome.errfor.email = 'required';
      // }
      // else if (!/^[a-zA-Z0-9\-\_\.\+]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z0-9\-\_]+$/.test(req.body.email)) {
      //   workflow.outcome.errfor.email = 'invalid email format';
      // }

      if (workflow.hasErrors()) {
        return workflow.emit('response');
      }

      workflow.emit('duplicatePHCheck');
    });

    workflow.on('duplicatePHCheck', function() {
      req.app.db.models.PurchaseHistory.findOne({ orderNumber: req.body.orderNumber, _id: { $ne: req.params.id } }, function(err, ph) {
        if (err) {
          return workflow.emit('exception', err);
        }

        if (ph) {
          workflow.outcome.errfor.username = 'order number already taken';
          return workflow.emit('response');
        }

        //workflow.emit('duplicateEmailCheck');
        workflow.emit('patchPH');
      });
    });

    // workflow.on('duplicateEmailCheck', function() {
    //   req.app.db.models.User.findOne({ email: req.body.email.toLowerCase(), _id: { $ne: req.params.id } }, function(err, user) {
    //     if (err) {
    //       return workflow.emit('exception', err);
    //     }

    //     if (user) {
    //       workflow.outcome.errfor.email = 'email already taken';
    //       return workflow.emit('response');
    //     }

    //     workflow.emit('patchUser');
    //   });
    // });

    workflow.on('patchPH', function() {
      var fieldsToSet = {
        orderNumber: req.body.orderNumber,
        orderDate: req.body.orderDate,
        //email: req.body.email.toLowerCase(),
        search: [
        req.body.orderNumber,
        req.body.orderDate
        ]
      };
      var options = { new: true }; //so the user returned is the updated not original doc

      req.app.db.models.PurchaseHistory.findByIdAndUpdate(req.params.id, fieldsToSet, options, function(err, ph) {
        if (err) {
          return workflow.emit('exception', err);
        }
        workflow.emit('patchAccount', ph);
      });
    });

    // workflow.on('patchAdmin', function(user) {
    //   if (user.roles.admin) {
    //     var fieldsToSet = {
    //       user: {
    //         id: req.params.id,
    //         name: user.username
    //       }
    //     };
    //     req.app.db.models.Admin.findByIdAndUpdate(user.roles.admin, fieldsToSet, function(err, admin) {
    //       if (err) {
    //         return workflow.emit('exception', err);
    //       }

    //       workflow.emit('patchAccount', user);
    //     });
    //   }
    //   else {
    //     workflow.emit('patchAccount', user);
    //   }
    // });

    workflow.on('patchAccount', function(ph) {
      var fieldsToSet = {
        purchaseHistoryLog: req.params.id
      };
      var options = { new: true };

      req.app.db.models.Account.findByIdAndUpdate(req.user.roles.account.id, {$addToSet: fieldsToSet}, options, function(err, account) {
        if (err) {
          return workflow.emit('exception', err);
        }

          //workflow.emit('populateRoles', user);
          workflow.emit('response');
        });
    });

    // workflow.on('populateRoles', function(user) {
    //   user.populate('roles.admin roles.account', 'name.full', function(err, populatedUser) {
    //     if (err) {
    //       return workflow.emit('exception', err);
    //     }

    //     workflow.outcome.user = populatedUser;
    //     workflow.emit('response');
    //   });
    // });

    workflow.emit('validate');
  },

  delete: function(req, res, next){
    //can delete workflow stuff
    //
    //
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {

      workflow.emit('deletePH');
    });

    workflow.on('deletePH', function(err) {
      req.app.db.models.PurchaseHistory.findByIdAndRemove(req.params.id, function(err, ph) {
        if (err) {
          return workflow.emit('exception', err);
        }

        workflow.emit('response');
      });
    });

    workflow.emit('validate');
  }
};
module.exports = purchaseHistory;