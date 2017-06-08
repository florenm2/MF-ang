'use strict';



var sendConfirmationEmail = function(req, res, options) {
  req.app.utility.sendmail(req, res, {
    from: req.app.config.smtp.from.name +' <'+ req.app.config.smtp.from.address +'>',
    to: options.email,
    subject: req.app.config.projectName,
    // textPath: 'test/test-text',
    htmlPath: 'test/test-html',
    // attachments: [options.pdf],
    // attachments: [
    // {data: base64String, encoded:true, name:"file.jpeg",type:"image/jpeg"},
    // ], 
    locals: {
      projectName: req.app.config.projectName,
      src: options.pdf
    },
    success: function() {
      options.onSuccess();
    },
    error: function(err) {
      console.log('Error Sending Email: '+ err);
      options.onError(err);
    }
  });
};

var purchaseHistory = {

  getOnePurchaseHistory: function(req, res, next){
    req.app.db.models.PurchaseHistory.findById(req).exec(function(err, ph) {
      if (err) {
        return next(err);
      }
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
        orderNumber: req.body.orderNumber,
        product: req.body.product,
        billingAddress: req.body.billingAddress,
        mailingAddress: req.body.mailingAddress,
        orderDate: req.body.orderDate,
        company: req.body.company,
        paymentMethod: req.body.paymentMethod,
        cost: {
          raw: req.body.cost.raw,
          shipping: req.body.cost.shipping,
          tax: req.body.cost.tax,
          total: req.body.cost.total
        }
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
        
        sendConfirmationEmail(req, res, {
          email: req.user.email,
          pdf: req.body.pdf,
          onSuccess: function() {
            return workflow.emit('response');
          },
          onError: function(err) {
            return next(err);
          }
        });
        
      });
    });


    workflow.emit('validate');
  },
  update: function(req, res, next){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      if (workflow.hasErrors()) {
        return workflow.emit('response');
      }

      workflow.emit('patchPH');
    });

    workflow.on('patchPH', function() {
      var fieldsToSet = {
        orderNumber: req.body.orderNumber,
        product: req.body.product,
        billingAddress: req.body.billingAddress,
        mailingAddress: req.body.mailingAddress,
        orderDate: req.body.orderDate,
        company: req.body.company,
        paymentMethod: req.body.paymentMethod,
        user: {
          name: req.user.roles.account.name
        },
        cost: {
          raw: req.body.cost.raw,
          shipping: req.body.cost.shipping,
          tax: req.body.cost.tax,
          total: req.body.cost.total
        }
      };
      var options = { select: 'company' , upsert: true };

      req.app.db.models.Address.update({"account.id" : req.user.roles.account.id}, fieldsToSet, options, function(err, address) {
        if (err) {
          return workflow.emit('exception', err);
        }

        workflow.outcome.address = address;
        return workflow.emit('response');
      });
    });

    workflow.emit('validate');
  }
};

module.exports = purchaseHistory;
