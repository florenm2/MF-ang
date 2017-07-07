'use strict';

exports = module.exports = function(app, mongoose) {
  var developerSchema = new mongoose.Schema({
    user: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' }
    },
    name: {
      full: { type: String, default: '' },
      first: { type: String, default: '' },
      middle: { type: String, default: '' },
      last: { type: String, default: '' },
    },
    APIkey: { type: String, default: '' },
    company: { type: String, default: '' },
    timeCreated: { type: Date, default: Date.now },
    search: [String]
  });
  developerSchema.plugin(require('./plugins/pagedFind'));
  developerSchema.index({ 'user.id': 1 });
  developerSchema.index({ search: 1 });
  developerSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Developer', developerSchema);
};
