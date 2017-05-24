'use strict';

exports = module.exports = function(app, mongoose) {
  var addressSchema = new mongoose.Schema({
    account: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
      name: { type: String, default: '' }
    },
    user: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' }
    },
    type: { type: String, default: 'mailing' },
    addressLine1: { type: String, default: '' },
    addressLine2: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    zip: { type: String, default: '' },
    country: { type: String, default: '' },
    company: {type: String, default: '' },
    phone: { type: String, default: '' },
    phone2: { type: String, default: '' },
    search: [String]
  });
  addressSchema.plugin(require('./plugins/pagedFind'));
  addressSchema.index({ addressLine1: 1 });
  addressSchema.index({ type: 1 });
  addressSchema.index({ account: 1 });
  addressSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Address', addressSchema);
};
