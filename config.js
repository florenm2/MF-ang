'use strict';

exports.hostname = process.env.hostname || 'localhost';
exports.port = process.env.PORT || 3000;

exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://adminUSER:adminUSER@ds139705.mlab.com:39705/heroku_9b169n7t'
};


exports.companyName = 'SafeConnect Solar';
exports.projectName = 'SafeConnect Solar Website';
exports.systemEmail = 'safeconnectcontact@gmail.com';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || 'SafeConnect Solar',
    address: process.env.SMTP_FROM_ADDRESS || 'safeconnectcontact@gmail.com'
  },
  credentials: {
    user: 'safeconnectcontact@gmail.com',
    password: 'GZZR0FuUZ2me',
    host: 'mail.smtp2go.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    // Not yet implemented
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    // Not yet implemented
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    // Not yet implemented
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
