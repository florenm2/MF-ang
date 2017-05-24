'use strict';

exports = module.exports = function(app, mongoose) {
  var cartSchema = new mongoose.Schema({
    account: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
      name: { type: String, default: '' }
    },
    date: { type: Date, default: Date.now },
    user: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: String, default: '' }
    },
    products: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } ],
    cost: {
      raw: { type: String },
      shipping: { type: String },
      tax: { type: String },
      total: { type: String }
    },
    search: [String]
  });
  cartSchema.plugin(require('./plugins/pagedFind'));
  cartSchema.index({ pivot: 1 });
  cartSchema.index({ name: 1 });
  cartSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Cart', cartSchema);
};
