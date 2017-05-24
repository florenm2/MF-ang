'use strict';

var purchaseHistory = {
    
  getOnePurchaseHistory: function(req, res, next){
    req.app.db.models.PurchaseHistory.findById(req).exec(function(err, ph) {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(ph);
      return res.status(200).json(ph);
    })
  },


  add : function(req, res){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      if (!req.body.orderNumber) {
        workflow.outcome.errfor.orderNumber = 'required';
      }
      
      if (workflow.hasErrors()) {
        return workflow.emit('response');
      }

      workflow.emit('createPH');
    });

    workflow.on('createPH', function() {
        var fieldsToSet = {
          account: {
            id: req.body.accountid
          },
          orderNumber: req.body.orderNumber 
        };
        req.app.db.models.PurchaseHistory.create(fieldsToSet, function(err, ph) {
          if (err) {
            return workflow.emit('exception', err);
          }

          workflow.purchasehistory = ph;
          workflow.emit('updateAccount');
        });
      });

    workflow.on('updateAccount', function() {
      var fieldsToSet = {
        purchaseHistoryLog: workflow.purchasehistory._id
      };
      var options = { new: true };

      req.app.db.models.Account.findByIdAndUpdate(req.user.roles.account.id, {$addToSet: fieldsToSet} , options, function(err, account) {
        if (err) {
          return workflow.emit('exception', err);
        }

        workflow.outcome.account = account;
        return workflow.emit('response');
      });
    });    

    workflow.emit('validate');
  }
};

module.exports = purchaseHistory;
