'use strict';

exports = module.exports = function(app, mongoose) {
  var productSchema = new mongoose.Schema({
    type: { type: String, default: '' },
    title: { type: String, default: '' },
    size: { type: String, default: '' },
    price: { type: Number },
    priceHistory: [{
      newPrice: { type: Number },
      oldPrice: { type: Number },
      date: { type: Date, default: Date.now }
    }],
    length: { type: String, default: '' },
    imagePath: { type: String, default: '' },
    image: { data: Buffer, contentType: String },
    search: [String]
  });
  productSchema.plugin(require('./plugins/pagedFind'));
  productSchema.index({ title: 1 });
  productSchema.index({ search: 1 });
  productSchema.index({ pivot: 1 });
  productSchema.set('autoIndex', (app.get('env') === 'development'));
  app.db.model('Product', productSchema);
};
