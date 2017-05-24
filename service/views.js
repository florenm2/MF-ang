'use strict';

var views = {
    
  addHomePageView : function(req, res){
    var workflow = req.app.utility.workflow(req, res);
    var now = new Date;
    var currentDate = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
      0, 0, 0, 0);

    workflow.on('addView', function() {
        var fieldsToSearch = {
          date: currentDate
        };
        var fieldsToSet = {
          $inc: {"homePageViews": 1}
        };

        req.app.db.models.View.update(fieldsToSearch, fieldsToSet, {upsert: true}, function(err, view) {
          if (err) {
            return workflow.emit('exception', err);
          }

          workflow.view = view;
          return workflow.emit('response');
        });

      });

    workflow.emit('addView');
  },
  addCartView : function(req, res){
    var workflow = req.app.utility.workflow(req, res);
    var now = new Date;
    var currentDate = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), 
      0, 0, 0, 0);

    workflow.on('addView', function() {
        var fieldsToSearch = {
          date: currentDate
        };
        var fieldsToSet = {
          $inc: {"cartViews": 1}
        };

        req.app.db.models.View.update(fieldsToSearch, fieldsToSet, {upsert: true}, function(err, view) {
          if (err) {
            return workflow.emit('exception', err);
          }

          workflow.view = view;
          return workflow.emit('response');
        });

      });

    workflow.emit('addView');
  },
  //  : function(req, res){
  //   var workflow = req.app.utility.workflow(req, res);

  //   workflow.on('getAll', function() {

  //       req.app.db.models.View.find({}, function(err, view) {
  //         if (err) {
  //           return workflow.emit('exception', err);
  //         }

  //         workflow.view = view;
  //         return workflow.emit('response');
  //       });


  //     });

  //   workflow.emit('getAll');
  // },
  getRecentViewCount: function(req, res, next){
    req.app.db.models.View.find().exec(function(err, view) {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log(view);
      return res.status(200).json(view);
    })
  }


};

module.exports = views;
