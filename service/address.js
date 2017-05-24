'use strict';

var address = {

  add: function(req, res){
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
      if (workflow.hasErrors()) {
        return workflow.emit('response');
      }

      workflow.emit('createAddress');
    });

    workflow.on('createAddress', function() {
        var fieldsToSet = {
          account: {
            id: req.body.accountid
          },
          addressLine1: req.body.addressLine1
        };
        req.app.db.models.Address.create(fieldsToSet, function(err, address) {
          if (err) {
            return workflow.emit('exception', err);
          }

          workflow.address = address;
          workflow.emit('updateAccount');
        });
      });

    workflow.on('updateAccount', function() {
      var fieldsToSet = {
        addressLog: workflow.address._id
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
  },
  update: function(req, res, next){
      var workflow = req.app.utility.workflow(req, res);

      workflow.on('validate', function() {
        // if (!req.body.first) {
        //   workflow.outcome.errfor.first = 'required';
        // }

        // if (!req.body.last) {
        //   workflow.outcome.errfor.last = 'required';
        // }

        if (workflow.hasErrors()) {
          return workflow.emit('response');
        }

        workflow.emit('patchAddress');
      });

      workflow.on('patchAddress', function() {
        var fieldsToSet = {
          type: req.body.type,
          addressLine1: req.body.addressLine1,
          addressLine2: req.body.addressLine2,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          country: req.body.country,
          company: req.body.company,
          phone: req.body.phone,
          phone2: req.body.phone2,
          search: [
            req.body.first,
            req.body.middle,
            req.body.last,
            req.body.company,
            req.body.phone,
            req.body.zip
          ]
        };
        var options = { select: 'company phone zip' };

        req.app.db.models.Address.findByIdAndUpdate(req.body.mailingAddress, fieldsToSet, options, function(err, address) {
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

module.exports = address;
