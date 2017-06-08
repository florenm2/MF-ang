'use strict';

exports = module.exports = function(app, mongoose) {
  //embeddable docs first
  require('./schema/Note')(app, mongoose);
  require('./schema/Status')(app, mongoose);
  require('./schema/StatusLog')(app, mongoose);

  //then regular docs
  require('./schema/User')(app, mongoose);
  require('./schema/Admin')(app, mongoose);
  require('./schema/AdminGroup')(app, mongoose);
  require('./schema/Account')(app, mongoose);
  require('./schema/LoginAttempt')(app, mongoose);
  require('./schema/PurchaseHistory')(app, mongoose);
  require('./schema/Address')(app, mongoose);
  require('./schema/Product')(app, mongoose);
  require('./schema/Cart')(app, mongoose);
  require('./schema/View')(app, mongoose);
};
