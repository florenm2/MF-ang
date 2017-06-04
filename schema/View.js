'use strict';

exports = module.exports = function(app, mongoose) {
  var viewSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    homePageViews: { type: Number },
    cartViews: { type: Number },
    apiCalls: { type: Number }
  });
  viewSchema.index({ page: 1 });
  viewSchema.index({ hour: 1 });
  viewSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('View', viewSchema);
};
