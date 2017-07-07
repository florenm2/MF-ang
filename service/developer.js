// 'use strict';
// // public api
// var developer = {
//   find: function(req, res, next){
//     req.query.search = req.query.search ? req.query.search : '';
//     req.query.limit = req.query.limit ? parseInt(req.query.limit, null) : 20;
//     req.query.page = req.query.page ? parseInt(req.query.page, null) : 1;
//     req.query.sort = req.query.sort ? req.query.sort : '_id';

//     var filters = {};
//     if (req.query.search) {
//       filters.search = new RegExp('^.*?'+ req.query.search +'.*$', 'i');
//     }

//     req.app.db.models.Developer.pagedFind({
//       filters: filters,
//       keys: 'name.full',
//       limit: req.query.limit,
//       page: req.query.page,
//       sort: req.query.sort
//     }, function(err, results) {
//       if (err) {
//         return next(err);
//       }

//       results.filters = req.query;
//       res.status(200).json(results);
//     });
//   },

//   create: function(req, res, next){
//     var workflow = req.app.utility.workflow(req, res);

//     workflow.on('validate', function() {
//       if (!req.body['name.full']) {
//         workflow.outcome.errors.push('Please enter a name.');
//         return workflow.emit('response');
//       }

//       workflow.emit('createdeveloper');
//     });

//     workflow.on('createdeveloper', function() {
//       var fieldsToSet = {
//         name: {
//           first: req.body.first,
//           middle: req.body.middle,
//           last: req.body.last,
//           full: req.body.first +' '+ req.body.last
//         }
//       };
//       fieldsToSet.search = [
//         fieldsToSet.name.first,
//         fieldsToSet.name.middle,
//         fieldsToSet.name.last
//       ];

//       req.app.db.models.Developer.create(fieldsToSet, function(err, dev) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         workflow.outcome.record = dev;
//         return workflow.emit('response');
//       });

//     workflow.on('patchUser', function() {
//       req.app.db.models.User.findByIdAndUpdate(workflow.user._id, { 'roles.developer': req.params.id }).exec(function(err, user) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }
//         workflow.emit('patchdeveloper');
//       });
//     });

//     workflow.on('patchdeveloper', function(callback) {
//       req.app.db.models.Developer.findByIdAndUpdate(req.params.id, { user: { id: workflow.user._id, name: workflow.user.username } }, { new: true }).exec(function(err, admin) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//           workflow.outcome.developer = developer;
//           workflow.emit('response');
//         });
//       });


//     });

//     workflow.emit('validate');
//   },

//   // read: function(req, res, next){
//   //   var outcome = {};

//   //   var getAccount = function(callback) {
//   //     req.app.db.models.Account.find({}, 'name').sort('name').exec(function(err, adminGroups) {
//   //       if (err) {
//   //         return callback(err, null);
//   //       }

//   //       outcome.adminGroups = adminGroups;
//   //       return callback(null, 'done');
//   //     });
//   //   };

//   //   var getRecord = function(callback) {
//   //     req.app.db.models.Admin.findById(req.params.id).populate('groups', 'name').exec(function(err, record) {
//   //       if (err) {
//   //         return callback(err, null);
//   //       }

//   //       outcome.record = record;
//   //       return callback(null, 'done');
//   //     });
//   //   };

//   //   var asyncFinally = function(err, results) {
//   //     if (err) {
//   //       return next(err);
//   //     }

//   //     res.status(200).json(outcome);
//   //   };

//   //   require('async').parallel([getAdminGroups, getRecord], asyncFinally);
//   // },

//   update: function(req, res, next){
//     var workflow = req.app.utility.workflow(req, res);

//     workflow.on('validate', function() {
//       if (workflow.hasErrors()) {
//         return workflow.emit('response');
//       }

//       workflow.emit('patchdeveloper');
//     });

//     workflow.on('patchdeveloper', function() {
//       var fieldsToSet = {
//         name: {
//           first: req.body.first,
//           middle: req.body.middle,
//           last: req.body.last,
//           full: req.body.first +' '+ req.body.last
//         },
//         search: [
//           req.body.first,
//           req.body.middle,
//           req.body.last
//         ]
//       };

//       var options = { new: true };
//       req.app.db.models.Developer.findByIdAndUpdate(req.params.id, fieldsToSet, options, function(err, admin) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         Developer.populate('groups', 'name', function(err, dev) {
//           if (err) {
//             return workflow.emit('exception', err);
//           }

//           workflow.outcome.developer = dev;
//           workflow.emit('response');
//         });
//       });
//     });

//     workflow.emit('validate');
//   },

  
//   linkUser: function(req, res, next){
//     var workflow = req.app.utility.workflow(req, res);

//     workflow.on('verifyUser', function(callback) {
//       req.app.db.models.User.findOne({ username: req.body.newUsername }).exec(function(err, user) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         if (!user) {
//           workflow.outcome.errors.push('User not found.');
//           return workflow.emit('response');
//         }
//         else if (user.roles && user.roles.developer && user.roles.developer !== req.params.id) {
//           workflow.outcome.errors.push('User is already linked to a different developer account.');
//           return workflow.emit('response');
//         }

//         workflow.user = user;
//         workflow.emit('duplicateLinkCheck');
//       });
//     });

//     workflow.on('duplicateLinkCheck', function(callback) {
//       req.app.db.models.Developer.findOne({ 'user.id': workflow.user._id, _id: { $ne: req.params.id } }).exec(function(err, dev) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         if (dev) {
//           workflow.outcome.errors.push('Another developer is already linked to that user.');
//           return workflow.emit('response');
//         }

//         workflow.emit('patchUser');
//       });
//     });

//     workflow.on('patchUser', function() {
//       req.app.db.models.User.findByIdAndUpdate(workflow.user._id, { 'roles.developer': req.params.id }).exec(function(err, user) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }
//         workflow.emit('patchdeveloper');
//       });
//     });

//     workflow.on('patchdeveloper', function(callback) {
//       req.app.db.models.Developer.findByIdAndUpdate(req.params.id, { user: { id: workflow.user._id, name: workflow.user.username } }, { new: true }).exec(function(err, admin) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//           workflow.outcome.developer = developer;
//           workflow.emit('response');
//         });
//       });

//     workflow.emit('verifyUser');
//   },

//   unlinkUser: function(req, res, next){
//     var workflow = req.app.utility.workflow(req, res);

//     workflow.on('validate', function() {
//       if (!req.user.roles.admin.isMemberOf('root')) {
//         workflow.outcome.errors.push('You may not unlink users from admins.');
//         return workflow.emit('response');
//       }

//       if (req.user.roles.admin._id + '' === req.params.id) {
//         workflow.outcome.errors.push('You may not unlink yourself from admin.');
//         return workflow.emit('response');
//       }

//       workflow.emit('patchdeveloper');
//     });

//     workflow.on('patchdeveloper', function() {
//       req.app.db.models.Admin.findById(req.params.id).exec(function(err, admin) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         if (!admin) {
//           workflow.outcome.errors.push('developer was not found.');
//           return workflow.emit('response');
//         }

//         var userId = admin.user.id;
//         admin.user = { id: undefined, name: ''};
//         admin.save(function(err, admin) {
//           if (err) {
//             return workflow.emit('exception', err);
//           }

//           admin.populate('groups', 'name', function(err, admin) {
//             if (err) {
//               return workflow.emit('exception', err);
//             }

//             workflow.outcome.admin = admin;
//             workflow.emit('patchUser', userId);
//           });
//         });
//       });
//     });

//     workflow.on('patchUser', function(id) {
//       req.app.db.models.User.findById(id).exec(function(err, user) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         if (!user) {
//           workflow.outcome.errors.push('User was not found.');
//           return workflow.emit('response');
//         }

//         user.roles.admin = undefined;
//         user.save(function(err, user) {
//           if (err) {
//             return workflow.emit('exception', err);
//           }

//           workflow.emit('response');
//         });
//       });
//     });

//     workflow.emit('validate');
//   },

//   delete: function(req, res, next){
//     var workflow = req.app.utility.workflow(req, res);

//     workflow.on('validate', function() {
//       if (!req.user.roles.admin.isMemberOf('root')) {
//         workflow.outcome.errors.push('You may not delete admins.');
//         return workflow.emit('response');
//       }
//       console.log(req.user);
//       if (req.user.roles.admin._id + '' === req.params.id) { //convert ObjectId to String
//         workflow.outcome.errors.push('You may not delete your own admin record.');
//         return workflow.emit('response');
//       }

//       workflow.emit('deletedeveloper');
//     });

//     workflow.on('deletedeveloper', function(err) {
//       req.app.db.models.Admin.findByIdAndRemove(req.params.id, function(err, admin) {
//         if (err) {
//           return workflow.emit('exception', err);
//         }

//         workflow.emit('response');
//       });
//     });

//     workflow.emit('validate');
//   }
// };
// module.exports = developer;