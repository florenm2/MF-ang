angular.module('ui.bootstrap.demo', []);

angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});
angular.module('directives.gravatar', [])

// A simple directive to display a gravatar image given an email
.directive('gravatar', ['md5', function(md5) {

  return {
    restrict: 'E',
    template: '<img ng-src="http://www.gravatar.com/avatar/{{hash}}{{getParams}}"/>',
    replace: true,
    scope: {
      email: '=',
      size: '=',
      defaultImage: '=',
      forceDefault: '='
    },
    link: function(scope, element, attrs) {
      scope.options = {};
      scope.$watch('email', function(email) {
        if ( email ) {
          scope.hash = md5(email.trim().toLowerCase());
        }
      });
      scope.$watch('size', function(size) {
        scope.options.s = (angular.isNumber(size)) ? size : undefined;
        generateParams();
      });
      scope.$watch('forceDefault', function(forceDefault) {
        scope.options.f = forceDefault ? 'y' : undefined;
        generateParams();
      });
      scope.$watch('defaultImage', function(defaultImage) {
        scope.options.d = defaultImage ? defaultImage : undefined;
        generateParams();
      });
      function generateParams() {
        var options = [];
        scope.getParams = '';
        angular.forEach(scope.options, function(value, key) {
          if ( value ) {
            options.push(key + '=' + encodeURIComponent(value));
          }
        });
        if ( options.length > 0 ) {
          scope.getParams = '?' + options.join('&');
        }
      }
    }
  };
}])

.factory('md5', function() {
  function md5cycle(x, k) {
    var a = x[0],
      b = x[1],
      c = x[2],
      d = x[3];

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);

  }

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }

  function md51(s) {
    txt = '';
    var n = s.length,
      state = [1732584193, -271733879, -1732584194, 271733878],
      i;
    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++) {
      tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    }
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i++) {
        tail[i] = 0;
      }
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }

  /* there needs to be support for Unicode here,
   * unless we pretend that we can redefine the MD-5
   * algorithm for multi-byte characters (perhaps
   * by adding every four 16-bit characters and
   * shortening the sum to 32 bits). Otherwise
   * I suggest performing MD-5 as if every character
   * was two bytes--e.g., 0040 0025 = @%--but then
   * how will an ordinary MD-5 sum be matched?
   * There is no way to standardize text to something
   * like UTF-8 before transformation; speed cost is
   * utterly prohibitive. The JavaScript standard
   * itself needs to look at this: it should start
   * providing access to strings as preformed UTF-8
   * 8-bit unsigned value arrays.
   */

  function md5blk(s) { /* I figured global was faster.   */
    var md5blks = [],
      i; /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  var hex_chr = '0123456789abcdef'.split('');

  function rhex(n) {
    var s = '', j = 0;
    for (; j < 4; j++) {
      s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
    }
    return s;
  }

  function hex(x) {
    for (var i = 0; i < x.length; i++) {
      x[i] = rhex(x[i]);
    }
    return x.join('');
  }

  function md5(s) {
    return hex(md51(s));
  }

  /* this function is much faster,
  so if possible we use it. Some IEs
  are the only ones I know of that
  need the idiotic second function,
  generated by an if clause.  */

  add32 = function(a, b) {
    return (a + b) & 0xFFFFFFFF;
  };

  if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function (x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
        msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    };
  }

  return md5;
});
angular.module('dir.owlCarousel', [])
  .directive('owlCarousel',[function() {
    return {
      restrict: 'EA',
      transclude: false,
      scope: {
        owlOptions: '='
      },
      link: function(scope, element, attrs) {
          scope.initCarousel = function() {
            $(element).owlCarousel(scope.owlOptions);
          };
        }
      }
  }])
  .directive('owlCarouselItem',[function() {
     return function(scope) {
     if (scope.$last) {
        scope.initCarousel();
     }
    };
  }]);
// A simple directive to handle server side form validation
// http://codetunes.com/2013/server-form-validation-with-angular/
angular.module('directives.serverError', [])
  .directive('serverError', [ function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      replace: true,
      link: function (scope, element, attrs, ctrl) {
        element.on('change', function(){
          scope.$apply(function(){
            ctrl.$setValidity('server', true);
          });
        });
      }
    };
  }]);

angular.module('security.authorization', ['security.service', 'config'])

// This service provides guard methods to support AngularJS routes.
// You can add them as resolves to routes to require authorization levels
// before allowing a route change to complete
.provider('securityAuthorization', {

  requireAdminUser: ['securityAuthorization', function(securityAuthorization) {
    return securityAuthorization.requireAdminUser();
  }],

  requireAuthenticatedUser: ['securityAuthorization', function(securityAuthorization) {
    return securityAuthorization.requireAuthenticatedUser();
  }],

  requireUnauthenticatedUser: ['securityAuthorization', function(securityAuthorization) {
    return securityAuthorization.requireUnauthenticatedUser();
  }],

  requireVerifiedUser: [ 'securityAuthorization', function(securityAuthorization){
    return securityAuthorization.requireVerifiedUser();
  }],

  requireUnverifiedUser: [ 'securityAuthorization', function(securityAuthorization){
    return securityAuthorization.requireUnverifiedUser();
  }],

  $get: ['$log', '$q', '$location', 'security', 'securityRetryQueue', 'REQUIRE_ACCOUNT_VERIFICATION', function($log, $q, $location, security, queue, requireAccountVerification) {
    var service = {

      // Require that there is an authenticated user
      // (use this in a route resolve to prevent non-authenticated users from entering that route)
      requireAuthenticatedUser: function() {
        var promise = security.requestCurrentUser().then(function(userInfo) {
          if ( !security.isAuthenticated() ) {
            return queue.pushRetryFn('unauthenticated-client', service.requireAuthenticatedUser);
          }
        });
        return promise;
      },

      requireUnauthenticatedUser: function(){
        var promise = security.requestCurrentUser().then(function(userInfo){
          if( security.isAuthenticated() ){
            return $q.reject('authenticated-client');
          }
        });
        return promise;
      },

      // Require that there is an administrator logged in
      // (use this in a route resolve to prevent non-administrators from entering that route)
      requireAdminUser: function() {
        var promise = security.requestCurrentUser().then(function(userInfo) {
          if ( !security.isAuthenticated() ) {
            return queue.pushRetryFn('unauthenticated-client', service.requireAdminUser);
          }else if( !security.isAdmin() ){
            return $q.reject('unauthorized-client');
          }
        });
        return promise;
      },

      requireVerifiedUser: function(){
        var promise = security.requestCurrentUser().then(function(userInfo){
          if( !security.isAuthenticated() ){
            return queue.pushRetryFn('unauthenticated-client', service.requireVerifiedUser);
          }
          if(requireAccountVerification && userInfo && !userInfo.isVerified){
            return $q.reject('unverified-client');
          }
        });
        return promise;
      },

      requireUnverifiedUser: function(){
        var promise = security.requestCurrentUser().then(function(userInfo){
          if( !security.isAuthenticated() ){
            return queue.pushRetryFn('unauthenticated-client', service.requireUnverifiedUser);
          }
          if(requireAccountVerification && userInfo && userInfo.isVerified){
            return $q.reject('verified-client');
          }
        });
        return promise;
      }

    };

    return service;
  }]
});
// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security', [
  'security.service',
  'security.interceptor',
  'security.login',
  'security.authorization']);

angular.module('security.interceptor', ['security.retryQueue'])

// This http interceptor listens for authentication failures
.factory('securityInterceptor', ['$q', '$log', '$injector', 'securityRetryQueue', function($q, $log, $injector, queue) {
  return {
    'responseError': function(response){
      if(response.status === 401){
        // The request bounced because it was not authorized - add a new request to the retry queue
        // and return a new promise that will be resolved or rejected after calling retryItem's retry or cancel method
        // eg. retryRequest is the retryFn that will be called later
        return queue.pushRetryFn('unauthorized-server', function retryRequest(){
          return $injector.get('$http')(response.config);
        });
      }
      //if not 401 then forward the error to next error handler
      return $q.reject(response);
    }
  };
  //return function(promise) {
  //  // Intercept failed requests
  //  return promise.then(null, function(originalResponse) {
  //    if(originalResponse.status === 401) {
  //      // The request bounced because it was not authorized - add a new request to the retry queue
  //      promise = queue.pushRetryFn('unauthorized-server', function retryRequest() {
  //        // We must use $injector to get the $http service to prevent circular dependency
  //        return $injector.get('$http')(originalResponse.config);
  //      });
  //    }
  //    return promise;
  //  });
  //};
}])

// We have to add the interceptor to the queue as a string because the interceptor depends upon service instances that are not available in the config block.
.config(['$httpProvider', function($httpProvider) {
  //$httpProvider.responseInterceptors.push('securityInterceptor');
  $httpProvider.interceptors.push('securityInterceptor');
}]);
angular.module('security.login.form', ['services.localizedMessages', 'ui.bootstrap'])

// The LoginFormController provides the behaviour behind a reusable form to allow users to authenticate.
// This controller and its template (login/form.tpl.html) are used in a modal dialog box by the security service.
.controller('LoginFormController', ['$scope', 'security', 'localizedMessages', function($scope, security, localizedMessages) {
  // The model for this form 
  $scope.user = {};
  $scope.alerts = [{
    type: 'info',
    msg: 'Please enter your login details'
  }];
  // The reason that we are being asked to login - for instance because we tried to access something to which we are not authorized
  // We could do something different for each reason here but to keep it simple...
  if(security.getLoginReason()){
    $scope.alerts.push({
      type: 'warning',
      msg: security.isAuthenticated()?
        localizedMessages.get('login.reason.notAuthorized') :
        localizedMessages.get('login.reason.notAuthenticated')
    });
  }

  // Attempt to authenticate the user specified in the form's model
  $scope.login = function() {
    // Clear any previous security errors
    $scope.alerts = [];

    // Try to login
    security.login($scope.user.email, $scope.user.password).then(function(data) {
      if ( !data.success ) {
        // If we get here then the login failed due to bad credentials
        $scope.alerts.push({
          type: 'danger',
          msg: localizedMessages.get('login.error.invalidCredentials')
        });
      }
    }, function(x) {
      // If we get here then there was a problem with the login request to the server
      $scope.alerts.push({
        type: 'danger',
        msg: localizedMessages.get('login.error.serverError', {exception: x})
      });
    });
  };

  $scope.clearForm = function() {
    $scope.user = {};
  };

  $scope.cancelLogin = function() {
    security.cancelLogin();
  };

  $scope.closeAlert = function(ind){
    $scope.alerts.splice(ind, 1);
  };
}]);

angular.module('security.login', ['security.login.form', 'security.login.toolbar']);
angular.module('security.login.toolbar', [])

// The loginToolbar directive is a reusable widget that can show login or logout buttons
// and information the current authenticated user
.directive('loginToolbar', ['security', function(security) {
  var directive = {
    templateUrl: 'security/login/toolbar.tpl.html',
    restrict: 'E',
    replace: true,
    scope: true,
    link: function($scope, $element, $attrs, $controller) {
      $scope.isAuthenticated = security.isAuthenticated;
      $scope.login = security.showLogin;
      $scope.logout = security.logout;
      $scope.$watch(function() {
        return security.currentUser;
      }, function(currentUser) {
        $scope.currentUser = currentUser;
      });
    }
  };
  return directive;
}]);
angular.module('security.retryQueue', [])

// This is a generic retry queue for security failures.  Each item is expected to expose two functions: retry and cancel.
.factory('securityRetryQueue', ['$q', '$log', function($q, $log) {
  var retryQueue = [];
  var service = {
    // The security service puts its own handler in here!
    onItemAddedCallbacks: [],
    
    hasMore: function() {
      return retryQueue.length > 0;
    },
    push: function(retryItem) {
      retryQueue.push(retryItem);
      // Call all the onItemAdded callbacks
      angular.forEach(service.onItemAddedCallbacks, function(cb) {
        try {
          cb(retryItem);
        } catch(e) {
          $log.error('securityRetryQueue.push(retryItem): callback threw an error' + e);
        }
      });
    },
    pushRetryFn: function(reason, retryFn) {
      // The reason parameter is optional
      if ( arguments.length === 1) {
        retryFn = reason;
        reason = undefined;
      }

      // The deferred object that will be resolved or rejected by calling retry or cancel
      var deferred = $q.defer();
      var retryItem = {
        reason: reason,
        retry: function() {
          // Wrap the result of the retryFn into a promise if it is not already
          $q.when(retryFn()).then(function(value) {
            // If it was successful then resolve our deferred
            deferred.resolve(value);
          }, function(value) {
            // Othewise reject it
            deferred.reject(value);
          });
        },
        cancel: function() {
          // Give up on retrying and reject our deferred
          deferred.reject();
        }
      };
      service.push(retryItem);
      return deferred.promise;
    },
    retryReason: function() {
      return service.hasMore() && retryQueue[0].reason;
    },
    cancelAll: function() {
      while(service.hasMore()) {
        retryQueue.shift().cancel();
      }
    },
    retryAll: function() {
      while(service.hasMore()) {
        retryQueue.shift().retry();
      }
    }
  };
  return service;
}]);

// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security.service', [
  'security.retryQueue',    // Keeps track of failed requests that need to be retried once the user logs in
  'security.login',         // Contains the login form template and controller
  'ui.bootstrap.modal'     // Used to display the login form as a modal dialog.
])

.factory('security', ['$http', '$q', '$location', 'securityRetryQueue', '$modal', function($http, $q, $location, queue, $modal) {

  // Redirect to the given url (defaults to '/')
  function redirect(url) {
    url = url || '/';
    $location.path(url);
  }

  // Login form dialog stuff
  var loginDialog = null;
  function openLoginDialog() {
    if ( loginDialog ) {
      throw new Error('Trying to open a dialog that is already open!');
    }
    //loginDialog = $modal.dialog();
    //loginDialog.open('security/login/form.tpl.html', 'LoginFormController').then(onLoginDialogClose);
    loginDialog = $modal.open({
      templateUrl: 'security/login/form.tpl.html',
      controller: 'LoginFormController'
    });
    loginDialog.result.then(onLoginDialogClose, onLoginDialogDismiss);
  }
  function closeLoginDialog(success) {
    if (loginDialog) {
      loginDialog.close(success);
    }
  }
  function dismissLoginDialog(reason){
    if(loginDialog){
      loginDialog.dismiss(reason);
    }
  }
  function onLoginDialogClose(success) {
    loginDialog = null;
    if ( success ) {
      queue.retryAll();
    } else {
      queue.cancelAll();
      redirect();
    }
  }
  //modal is dismissed because escape key press or mouse click outside
  function onLoginDialogDismiss(reason){
    loginDialog = null;
    queue.cancelAll();
    redirect();
  }

  // Register a handler for when an item is added to the retry queue
  queue.onItemAddedCallbacks.push(function(retryItem) {
    if ( queue.hasMore() ) {
      service.showLogin();
    }
  });

  function processResponse(res){
    return res.data;
  }

  function processError(e){
    var msg = [];
    if(e.status)         { msg.push(e.status); }
    if(e.statusText)     { msg.push(e.statusText); }
    if(msg.length === 0) { msg.push('Unknown Server Error'); }
    return $q.reject(msg.join(' '));
  }
  var deferredCurrentUser;

  // The public API of the service
  var service = {

    signup: function(data){
      return $http.post('/api/signup', data).then(processResponse, processError);
    },

    addPH: function(data){
      return $http.post('/api/account/addPH', data).then(processResponse, processError);
    },

    // Get the first reason for needing a login
    getLoginReason: function() {
      return queue.retryReason();
    },

    // Redirect to the login page if not logged in
    showLogin: function() {
      redirect('/login');
      //openLoginDialog();
    },

    socialDisconnect: function(provider){
      var url = '/api/account/settings/' + provider.toLowerCase() + '/disconnect';
      return $http.get(url).then(function(res){ return res.data; });
    },

    socialConnect: function(provider, code){
      var url = '/api/account/settings/' + provider.toLowerCase() + '/callback';
      if(code){
        url += '?code=' + code;
      }
      return $http.get(url).then(function(res){ return res.data; });
    },

    socialLogin: function(provider, code){
      var url = '/api/login/' + provider.toLowerCase() + '/callback';
      if(code){
        url += '?code=' + code;
      }
      var promise = $http.get(url).then(function(res){
        var data = res.data;
        if (data.success) {
          closeLoginDialog(true);
          service.currentUser = data.user;
        }
        return data;
      });
      return promise;
    },

    // Attempt to authenticate a user by the given username and password
    login: function(username, password) {
      var request = $http.post('/api/login', {
        username: username,
        password: password
      });
      return request.then(function(response) {
        var data = response.data;
        if(data.success){
          closeLoginDialog(true);
          service.currentUser = data.user;
        }
        return data;
      });
    },

    // Give up trying to login and clear the retry queue
    cancelLogin: function() {
      //closeLoginDialog(false);
      //redirect();
      dismissLoginDialog('cancel button clicked');
    },

    // Logout the current user and redirect
    logout: function(redirectTo) {
      $http.post('/api/logout').then(function() {
        service.currentUser = null;
        redirect(redirectTo);
      });
    },

    getCurrentUser: function(redirectTo) {
      return $http.get('/api/current-user');
    },

    loginForgot: function(data){
      return $http.post('/api/login/forgot', data).then(processResponse, processError);
    },

    loginReset: function(id, email, data){
      var url = '/api/login/reset/' + email + '/' + id;
      return $http.put(url, data).then(processResponse, processError);
    },

    // Ask the backend to see if a user is already authenticated - this may be from a previous session.
    requestCurrentUser: function() {
      if ( service.isAuthenticated() ) {
        // local currentUser is available
        return $q.when(service.currentUser);
      } else if(deferredCurrentUser) {
        // already an outstanding backend request for currentUser
        return deferredCurrentUser.promise;
      } else {
        // no outstanding backend call nor local currentUser
        deferredCurrentUser = $q.defer();
        $http.get('/api/current-user').then(function(response){
          service.currentUser = response.data.user;
          deferredCurrentUser.resolve(service.currentUser);
          deferredCurrentUser = null;
        }, function(x){
          deferredCurrentUser.reject(x);
          deferredCurrentUser = null;
        });
        return deferredCurrentUser.promise;
      }
    },

    setCurrentUser: function(user){
      service.currentUser = user;
    },

    // Information about the current user
    currentUser: null,

    // Is the current user authenticated?
    isAuthenticated: function(){
      return !!service.currentUser;
    },
    
    // Is the current user an administrator?
    isAdmin: function() {
      return !!(service.currentUser && service.currentUser.admin);
    }
  };

  return service;
}]);

angular.module('services.accountResource', ['security.service']).factory('accountResource', ['$http', '$q', '$log', 'security', function ($http, $q, $log, security) {
  // local variable
  var baseUrl = '/api';
  var processResponse = function(res){
    return res.data;
  };
  var processError = function(e){
    var msg = [];
    if(e.status)         { msg.push(e.status); }
    if(e.statusText)     { msg.push(e.statusText); }
    if(msg.length === 0) { msg.push('Unknown Server Error'); }
    return $q.reject(msg.join(' '));
  };
  // public api

  var resource = {};
  resource.getProductList = function() {
    return $http.get(baseUrl + '/getProducts').then(processResponse, processError);
  };
  resource.addHomePageView = function() {
    return $http.post(baseUrl + '/addHomePageView').then(processResponse, processError);
  };
  resource.addCartView = function() {
    return $http.post(baseUrl + '/addCartView/').then(processResponse, processError);
  };
  resource.addAPICall = function() {
    return $http.post(baseUrl + '/addAPICall/').then(processResponse, processError);
  };
  resource.sendMessage = function(data){
    return $http.post(baseUrl + '/sendMessage', data).then(processResponse, processError);
  };
  resource.getAccountDetails = function(){
    return $http.get(baseUrl + '/account/settings').then(processResponse, processError);
  };
  resource.setAccountDetails = function(data){
    return $http.put(baseUrl + '/account/settings', data).then(processResponse, processError);
  };
  resource.getOnePurchaseHistory = function(){
    return $http.get(baseUrl + '/account/getOnePurchaseHistory').then(processResponse, processError);
  };
  resource.getPurchaseHistoryLog = function(){
    return $http.get(baseUrl + '/account/getPurchaseHistoryLog').then(processResponse, processError);
  };

  resource.newPurchase = function(data){
    return $http.post(baseUrl + '/account/purchaseHistory', data).then(processResponse, processError);
  };
  resource.newAddress = function(data){
    return $http.post(baseUrl + '/account/address', data).then(processResponse, processError);
  };
  resource.setMailingAddress = function(data){
    return $http.put(baseUrl + '/account/settings/mailingAddress', data).then(processResponse, processError);
  };

  resource.setIdentity = function(data){
    return $http.put(baseUrl + '/account/settings/identity', data).then(processResponse, processError);
  };
  resource.setPassword = function(data){
    return $http.put(baseUrl + '/account/settings/password', data).then(processResponse, processError);
  };

  resource.resendVerification = function(email){
    return $http.post(baseUrl + '/account/verification', {email: email}).then(processResponse, processError);
  };

  resource.upsertVerification = function(){
    return $http.get(baseUrl + '/account/verification').then(processResponse, processError);
  };

  
  resource.verifyAccount = function(token){
    return $http.get(baseUrl + '/account/verification/' + token)
    .then(processResponse, processError)
    .then(function(data){
        //this saves us another round trip to backend to retrieve the latest currentUser obj
        if(data.success && data.user){
          security.setCurrentUser(data.user);
        }
        return data;
      });
  };
  
  return resource;
}]);

angular.module('services.adminResource', []).factory('adminResource', ['$http', '$q', function ($http, $q) {
  // local variable
  var baseUrl = '/api';
  var userUrl = baseUrl + '/admin/users';
  var accountUrl = baseUrl + '/admin/accounts';
  var administratorUrl = baseUrl + '/admin/administrators';
  var adminGroupUrl = baseUrl + '/admin/admin-groups';
  var adminStatusesUrl = baseUrl + '/admin/statuses';
  var adminCategoriesUrl = baseUrl + '/admin/categories';
  var phUrl = baseUrl + '/admin/purchase-history';
  var pricingUrl = baseUrl + '/admin/pricing';

  var processResponse = function(res){
    return res.data;
  };
  var processError = function(e){
    var msg = [];
    if(e.status)         { msg.push(e.status); }
    if(e.statusText)     { msg.push(e.statusText); }
    if(msg.length === 0) { msg.push('Unknown Server Error'); }
    return $q.reject(msg.join(' '));
  };
  // public api
  var resource = {};
  resource.getStats = function(){
    return $http.get(baseUrl + '/admin').then(processResponse, processError);
  };
  resource.search = function(query){
    return $http.get(baseUrl + '/admin/search', { params: { q: query }} ).then(processResponse, processError);
  };

  // ----- users api -----
  resource.findUsers = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(userUrl, { params: filters }).then(processResponse, processError);
  };
  resource.addUser = function(username){
    return $http.post(userUrl, { username: username }).then(processResponse, processResponse);
  };
  resource.findUser = function(_id){
    var url = userUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updateUser = function(_id, data){
    var url = userUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.setPassword = function(_id, data){
    var url = userUrl + '/' + _id + '/password';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.linkAdmin = function(_id, data){
    var url = userUrl + '/' + _id + '/role-admin';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.unlinkAdmin = function(_id){
    var url = userUrl + '/' + _id + '/role-admin';
    return $http.delete(url).then(processResponse, processError);
  };
  resource.linkAccount = function(_id, data){
    var url = userUrl + '/' + _id + '/role-account';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.unlinkAccount = function(_id){
    var url = userUrl + '/' + _id + '/role-account';
    return $http.delete(url).then(processResponse, processError);
  };
  resource.deleteUser = function(_id){
    var url = userUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };

  // ----- accounts api -----
  resource.findAccounts = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(accountUrl, { params: filters }).then(processResponse, processError);
  };
  resource.addAccount = function(fullname){
    return $http.post(accountUrl, { 'name.full': fullname }).then(processResponse, processResponse);
  };
  resource.findAccount = function(_id){
    var url = accountUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updateAccount = function(_id, data){
    var url = accountUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.linkUser = function(_id, data){
    var url = accountUrl + '/' + _id + '/user';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.unlinkUser = function(_id){
    var url = accountUrl + '/' + _id + '/user';
    return $http.delete(url).then(processResponse, processError);
  };
  resource.accountPurchaseHistory = function(_id){
    var url = accountUrl + '/' + _id + '/purchases';
    return $http.get(url).then(processResponse, processError);
  };
  resource.newAccountNote = function(_id, data){
    var url = accountUrl + '/' + _id + '/notes';
    return $http.post(url, data).then(processResponse, processError);
  };
  resource.newAccountStatus = function(_id, data){
    var url = accountUrl + '/' + _id + '/status';
    return $http.post(url, data).then(processResponse, processError);
  };
  resource.deleteAccount = function(_id){
    var url = accountUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };


  // ----- purchase history api -----
  resource.findAllPH = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(phUrl, { params: filters }).then(processResponse, processError);
  };

  resource.addPH = function(orderNumber){
    return $http.post(phUrl, { orderNumber: orderNumber }).then(processResponse, processResponse);
  };
  
  resource.findPHs = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(phUrl, { params: filters }).then(processResponse, processError);
  };
  resource.tallyPHs = function(){
    return $http.get(phUrl + '/tally').then(processResponse, processError);
  };
  resource.tallyMonthPHs = function(){
    return $http.get(phUrl + '/tallyMonth').then(processResponse, processError);
  };
  resource.tallyYearPHs = function(){
    return $http.get(phUrl + '/tallyYear').then(processResponse, processError);
  };

  resource.findPH = function(_id){
    var url = phUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updatePH = function(_id, data){
    var url = phUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };



// ----- product api -----
  resource.getAllProducts = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(pricingUrl, { params: filters }).then(processResponse, processError);
  };

  resource.addProduct = function(title){
      return $http.post(pricingUrl, { title: title }).then(processResponse, processResponse);
    };

  resource.updateProduct = function(_id, data){
      var url = pricingUrl + '/' + _id;
      return $http.put(url, data).then(processResponse, processError);
    };

  resource.deletePH = function(_id){
    var url = phUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };


  // ----- administrators api -----
  resource.findAdministrators = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(administratorUrl, { params: filters }).then(processResponse, processError);
  };
  resource.addAdministrator = function(fullname){
    return $http.post(administratorUrl, { 'name.full': fullname }).then(processResponse, processResponse);
  };
  resource.findAdministrator = function(_id){
    var url = administratorUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updateAdministrator = function(_id, data){
    var url = administratorUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.adminLinkUser = function(_id, data){
    var url = administratorUrl + '/' + _id + '/user';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.adminUnlinkUser = function(_id){
    var url = administratorUrl + '/' + _id + '/user';
    return $http.delete(url).then(processResponse, processError);
  };
  resource.saveAdminGroups = function(_id, data){
    var url = administratorUrl + '/' + _id + '/groups';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.saveAdminPermissions = function(_id, data){
    var url = administratorUrl + '/' + _id + '/permissions';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.deleteAdministrator = function(_id){
    var url = administratorUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };

  // ----- admin-groups api -----
  resource.findAdminGroups = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(adminGroupUrl, { params: filters }).then(processResponse, processError);
  };
  resource.addAdminGroup = function(name){
    return $http.post(adminGroupUrl, { name: name }).then(processResponse, processResponse);
  };
  resource.findAdminGroup = function(_id){
    var url = adminGroupUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updateAdminGroup = function(_id, data){
    var url = adminGroupUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.saveAdminGroupPermissions = function(_id, data){
    var url = adminGroupUrl + '/' + _id + '/permissions';
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.deleteAdminGroup = function(_id){
    var url = adminGroupUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };

  // ----- statuses api -----
  resource.findStatuses = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(adminStatusesUrl, { params: filters }).then(processResponse, processError);
  };
  resource.addStatus = function(data){
    return $http.post(adminStatusesUrl, data).then(processResponse, processResponse);
  };
  resource.findStatus = function(_id){
    var url = adminStatusesUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updateStatus = function(_id, data){
    var url = adminStatusesUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.deleteStatus = function(_id){
    var url = adminStatusesUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };

  // ----- categories api -----
  resource.findCategories = function(filters){
    if(angular.equals({}, filters)){
      filters = undefined;
    }
    return $http.get(adminCategoriesUrl, { params: filters }).then(processResponse, processError);
  };
  resource.addCategory = function(data){
    return $http.post(adminCategoriesUrl, data).then(processResponse, processResponse);
  };
  resource.findCategory = function(_id){
    var url = adminCategoriesUrl + '/' + _id;
    return $http.get(url).then(processResponse, processError);
  };
  resource.updateCategory = function(_id, data){
    var url = adminCategoriesUrl + '/' + _id;
    return $http.put(url, data).then(processResponse, processError);
  };
  resource.deleteCategory = function(_id){
    var url = adminCategoriesUrl + '/' + _id;
    return $http.delete(url).then(processResponse, processError);
  };
  // ----- views api -----
  resource.getRecentViewCount = function() {
    var url = baseUrl + '/getRecentViewCount';
    return $http.get(url).then(processResponse, processError);
  };

  return resource;
}]);

angular.module('services.cart', []);
angular.module('services.cart').factory('cartService', ['$http', '$q', function($http, $q){

  var cart = [];

  cart.addToCart = function (product) {
      var found = false;
      this.forEach(function (item) {
        if (item.title === product.title) {
          item.quantity++;
          found = true;
        }
      });
      if (!found) {
        this.push(angular.extend({quantity: 1}, product));
      }
    };

  cart.removeFromCart = function (product) {
      var ind = this.indexOf(product);
      this.splice(ind, 1);  
    };

  cart.getProductPrice = function (product) {
      return (product.price)*(product.quantity);
    };

  cart.getCartPrice = function () {
      var total = 0;
      this.forEach(function (product) {
        total += product.price * product.quantity;
      });
      return total;
    };

  cart.getCartProducts = function () {
      var total = [];
      this.forEach(function (product) {
        var v = {
          product: product.title,
          quantity: product.quantity
        };
        total.push(v);
      });
      return total;
    };

    cart.getCart = function () {
      return this;
    };

  cart.getItemAmount = function () {
      var total = 0;
      this.forEach(function (product) {
        total += product.quantity;
      });
      return total;
    };

 cart.clearItemAmount = function() {
      this.forEach(function (product) {
        product.quantity = 0;
      });
  } 

  cart.addQty = function(product) {
        product.quantity++;
    }
  cart.subtractQty = function(product) {
        if(product.quantity>0) {
          product.quantity--;
        }
    }

  return cart;
}]);
angular.module('services.httpRequestTracker', []);
angular.module('services.httpRequestTracker').factory('httpRequestTracker', ['$http', function($http){

  var httpRequestTracker = {};
  httpRequestTracker.hasPendingRequests = function() {
    return $http.pendingRequests.length > 0;
  };

  return httpRequestTracker;
}]);
angular.module('services.i18nNotifications', ['services.notifications', 'services.localizedMessages']);
angular.module('services.i18nNotifications').factory('i18nNotifications', ['localizedMessages', 'notifications', function (localizedMessages, notifications) {

  var prepareNotification = function(msgKey, type, interpolateParams, otherProperties) {
     return angular.extend({
       message: localizedMessages.get(msgKey, interpolateParams),
       type: type
     }, otherProperties);
  };

  var I18nNotifications = {
    pushSticky:function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushSticky(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    pushForCurrentRoute:function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushForCurrentRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    pushForNextRoute:function (msgKey, type, interpolateParams, otherProperties) {
      return notifications.pushForNextRoute(prepareNotification(msgKey, type, interpolateParams, otherProperties));
    },
    getCurrent:function () {
      return notifications.getCurrent();
    },
    remove:function (notification) {
      return notifications.remove(notification);
    }
  };

  return I18nNotifications;
}]);
angular.module('services.localizedMessages', []).factory('localizedMessages', ['$interpolate', 'I18N.MESSAGES', function ($interpolate, i18nmessages) {

  var handleNotFound = function (msg, msgKey) {
    return msg || '?' + msgKey + '?';
  };

  return {
    get : function (msgKey, interpolateParams) {
      var msg =  i18nmessages[msgKey];
      if (msg) {
        return $interpolate(msg)(interpolateParams);
      } else {
        return handleNotFound(msg, msgKey);
      }
    }
  };
}]);
angular.module('services.notifications', []).factory('notifications', ['$rootScope', function ($rootScope) {

  var notifications = {
    'STICKY' : [],
    'ROUTE_CURRENT' : [],
    'ROUTE_NEXT' : []
  };
  var notificationsService = {};

  var addNotification = function (notificationsArray, notificationObj) {
    if (!angular.isObject(notificationObj)) {
      throw new Error("Only object can be added to the notification service");
    }
    notificationsArray.push(notificationObj);
    return notificationObj;
  };

  $rootScope.$on('$routeChangeSuccess', function () {
    notifications.ROUTE_CURRENT.length = 0;

    notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
    notifications.ROUTE_NEXT.length = 0;
  });

  notificationsService.getCurrent = function(){
    return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
  };

  notificationsService.pushSticky = function(notification) {
    return addNotification(notifications.STICKY, notification);
  };

  notificationsService.pushForCurrentRoute = function(notification) {
    return addNotification(notifications.ROUTE_CURRENT, notification);
  };

  notificationsService.pushForNextRoute = function(notification) {
    return addNotification(notifications.ROUTE_NEXT, notification);
  };

  notificationsService.remove = function(notification){
    angular.forEach(notifications, function (notificationsByType) {
      var idx = notificationsByType.indexOf(notification);
      if (idx>-1){
        notificationsByType.splice(idx,1);
      }
    });
  };

  notificationsService.removeAll = function(){
    angular.forEach(notifications, function (notificationsByType) {
      notificationsByType.length = 0;
    });
  };

  return notificationsService;
}]);
angular.module('services.products', []);
angular.module('services.products').factory('productService', ['$http', '$q', function($http, $q){


  var processResponse = function(res){
    return res.data;
  };

  var processError = function(e){
    var msg = [];
    if(e.status)         { msg.push(e.status); }
    if(e.statusText)     { msg.push(e.statusText); }
    if(msg.length === 0) { msg.push('Unknown Server Error'); }
    return $q.reject(msg.join(' '));
  };

  var productList = {};
  productList.getProductList = function() {
    return $http.get('/api/getProducts').then(processResponse, processError);
  };

  return productList;
}]);
angular.module('services.utility', []).factory('utility', [function () {

  var utility = {};
  utility.hasError = function(ngModelCtrl){
    return ngModelCtrl.$dirty && ngModelCtrl.$invalid;
  };
  utility.showError = function(ngModelCtrl, err){
    return ngModelCtrl.$dirty && ngModelCtrl.$error[err];
  };
  utility.canSave = function(ngFormCtrl){
    return ngFormCtrl.$dirty && ngFormCtrl.$valid;
  };
  return utility;
}]);
angular.module('account.index', ['ngRoute', 'security.authorization']);
angular.module('account.index').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider, securityAuthorizationProvider){
  $routeProvider
    .when('/account', {
      templateUrl: 'account/account.tpl.html',
      controller: 'AccountCtrl',
      title: 'Account Area',
      resolve: {
        authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
      }
    });
}]);
angular.module('account.index').controller('AccountCtrl', [ '$scope',
  function($scope){
    $scope.dayOfYear = moment().format('DDD');
    $scope.dayOfMonth = moment().format('D');
    $scope.weekOfYear = moment().format('w');
    $scope.dayOfWeek = moment().format('d');
    $scope.weekYear = moment().format('gg');
    $scope.hourOfDay = moment().format('H');
  }]);

Stripe.setPublishableKey('pk_test_1Ol0KXlUc2OASvEVg1JwhHp2');

angular.module('account.checkout', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility','ui.bootstrap', 'directives.serverError', 'services.cart', 'angularPayments']);
angular.module('account.checkout').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider){
  $routeProvider
  .when('/account/checkout', {
    templateUrl: 'account/checkout/checkout.tpl.html',
    controller: 'CheckoutLoggedInCtrl',
    title: 'Checkout',
    resolve: {
      accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
          .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
              return $q.reject();
            })
          .catch(function(){
            redirectUrl = redirectUrl || '/account';
            $location.path(redirectUrl);
            return $q.reject();
          });
          return promise;
        }]
      }
    })
  .when('/account/checkout/summary', {
    templateUrl: 'account/checkout/order-summary.tpl.html',
    controller: 'CheckoutLoggedInCtrl',
    title: 'Order Summary',
    resolve: {
      accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
          .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
              return $q.reject();
            })
          .catch(function(){
            redirectUrl = redirectUrl || '/account';
            $location.path(redirectUrl);
            return $q.reject();
          });
          return promise;
        }]
      }
    });
}]);
angular.module('account.checkout').controller('CheckoutLoggedInCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL', 'cartService',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL, cartService){
    //local vars
    var account = accountDetails.account;
    var user = accountDetails.user;
    var address =  accountDetails.mailingAddress;
    $scope.cart =  cartService;
    $scope.billingChecked = false;

    $scope.c = $scope.cart.getCartProducts();

    console.log($scope.c);
    $scope.productinfo = [];

   for(var i = 0; i<$scope.c.length; i++){
    console.log($scope.c[i]);

    var v = {
      product: $scope.c[i].product,
      quantity: $scope.c[i].quantity
    };

    $scope.productinfo.push(v);
  }

    //mailing address
    if(address==null){
      $scope.mailingAddress =
      {
        name : {
          first: "",
          last: ""
        },
        company : "",
        addressLine1 : "",
        addressLine2 : "",
        city : "",
        state : "",
        zip : "",
        country : "",
        type : 'mailing'
      };
    } else {
      $scope.mailingAddress =
      {
        name : {
          first: account.name.first,
          last: account.name.last
        },
        company : account.company,
        addressLine1 : address.addressLine1,
        addressLine2 : address.addressLine2,
        city : address.city,
        state : address.state,
        zip : address.zip,
        country : address.country,
        type : 'mailing'
      };
    }

    //billing address
    $scope.checkBillAddress = function(){
      if($scope.billingChecked){
        $scope.billingAddress = $scope.mailingAddress;
      } else {
        $scope.billingAddress =
        {
          name : {
            first: "",
            last: ""
          },
          company : "",
          addressLine1 : "",
          addressLine2 : "",
          city : "",
          state : "",
          zip : "",
          country : "",
          type : 'billing'
        };
      }
    }

    $scope.purchaseInformation = {
      orderNumber: 22,
      product: $scope.productinfo,
      //billingAddress: $scope.billingAddress,
      //mailingAddress: $scope.mailingAddress,
      orderDate: new Date(),
      company: $scope.mailingAddress.company,
      //paymentMethod: req.body.paymentMethod,
      cost: {
        raw: $scope.cart.getCartPrice,
        //shipping: req.body.cost.shipping,
        //tax: req.body.cost.tax,
        total: $scope.cart.getCartPrice
      }
    };

    $scope.stripeSubmit = function(status, response){
      if(response.error) {
          // error
        } else {
          token = response.id;
          $scope.submitAddress();
        }
      }

      $scope.submitAddress = function(){

        $scope.alerts.address = [];
        restResource.setMailingAddress($scope.mailingAddress).then(function(data){
          if(data.success){
            $scope.alerts.address.push({
              type: 'success',
              msg: 'User identity is updated.'
            });
            $scope.submitPurchaseHistory();
          }else{
          //error due to server side validation
          $scope.errfor = data.errfor;
          angular.forEach(data.errfor, function(err, field){
            $scope.addressForm[field].$setValidity('server', false);
          });
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.address.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.address.push({
          type: 'danger',
          msg: 'Error updating user identity: ' + x
        });
      });
      };

      $scope.submitPurchaseHistory = function(){


        // html2canvas($("#canvas"), {
        //   onrendered: function(canvas) {         
        //     var imgData = canvas.toDataURL(
        //       'image/png');              
        //     var doc = new jsPDF('p', 'mm');
        //     doc.addImage(imgData, 'PNG', 10, 10);
        //         //doc.save('sample-file.pdf');
        //         $scope.purchaseInformation.pdf = doc;
        //       }
        //     });

        html2canvas(document.getElementById('confirmation-email'), {
          onrendered: function (canvas) {
            // var data = canvas.toDataURL('image/png');
            // var docDefinition = {
            //   content: [{
            //     image: data,
            //     width: 500,
            //   }]
            // };
            // var doc = new jsPDF();
            // doc.addImage(docDefinition, 'PNG', 15, 40, 180, 160);

            // var pdfBase64 = doc.output('datauristring');

            var pdf = new jsPDF();
            pdf.addImage(canvas.toDataURL("image/jpeg"),"JPEG",20,20);
            var pdf_img = pdf.output("datauristring");
            $scope.purchaseInformation.pdf = pdf_img.replace("data:application/pdf;base64,", "");

            console.log($scope.purchaseInformation.pdf)
            console.log(pdf_img)



            //data:application/pdf;base64,JVBERi0xLjMKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJ…UgMjEKL1Jvb3QgMjAgMCBSCi9JbmZvIDE5IDAgUgo+PgpzdGFydHhyZWYKMzY2MwolJUVPRg==


            //$scope.purchaseInformation.pdf = pdfBase64;
          }
        });

        

        console.log($scope.purchaseInformation);

        $scope.alerts.purchasehistory = [];
        restResource.newPurchase($scope.purchaseInformation).then(function(data){
          if(data.success){
            $scope.alerts.purchasehistory.push({
              type: 'success',
              msg: 'User identity is updated.'
            });
            $location.path('/account/checkout/summary');
          }else{
          //error due to server side validation
          $scope.errfor = data.errfor;
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.address.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.address.push({
          type: 'danger',
          msg: 'Error updating user identity: ' + x
        });
      });
      };


     $scope.errfor = {}; //for identity server-side validation
     $scope.alerts = {
      detail: [], address: [], pass: []
    };

    $scope.hideAlerts = function () {
      $scope.stripeError = null;
      $scope.stripeToken = null;
    };

    var acc = document.getElementsByClassName("panel-heading");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        this.classList.toggle("active");
        var paneling = this.nextElementSibling;
        if (paneling.style.maxHeight){
          paneling.style.maxHeight = null;
        } else {
          paneling.style.maxHeight = paneling.scrollHeight + "px";
        } 
      }
    }
  }]);
angular.module('account', [
  'account.index',
  'account.purchaseHistory',
  'account.settings',
  'account.verification',
  'account.checkout'
]);
angular.module('account.purchaseHistory', [
  'account.purchaseHistory.all',
  'account.purchaseHistory.one'
]);
angular.module('account.purchaseHistory.all', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility','ui.bootstrap', 'directives.serverError']);
angular.module('account.purchaseHistory').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider){
  $routeProvider
    .when('/account/purchaseHistory', {
      templateUrl: 'account/purchaseHistory/purchaseHistory.tpl.html',
      controller: 'PurchaseHistoryCtrl',
      title: 'Purchase History',
      resolve: {
        accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
            .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('account.purchaseHistory.all').controller('PurchaseHistoryCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL){
    //local vars
    var deserializeData = function(data){
      $scope.account = data.account;
      $scope.user = data.user;
      $scope.phList = data.purchasehistory;
      $scope.log = data.purchaseHistoryLog;
    };

    $scope.goToPH = function() {
        $scope.selected = this.ph;
        $location.path('/account/purchaseHistory/' + $scope.selected._id);
    };


     $scope.print = null;
     $scope.exists = false;

     $scope.count = 0;
     $scope.myFunction = function() {
        $scope.count++;
    }

    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;

    $scope.phDetail = {
      //orderNumber:    $scope.ph.orderNumber,
      //accountid: account._id
    };

     $scope.submit = function(){
      restResource.newPurchase($scope.phDetail).then(function(result){
        if(result.success){
          console.log(result.account);
        }else{
          //error due to server side validation
          angular.forEach(result.errors, function(err, index){
            console.log(err);
          });
        }
      }), function(x){
        console.log(x);
      }
    
     };

     deserializeData(accountDetails);

}]);



angular.module('account.purchaseHistory.one', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility','ui.bootstrap', 'directives.serverError']);
angular.module('account.purchaseHistory').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider){
  $routeProvider
    .when('/account/purchaseHistory/:id', {
      templateUrl: 'account/purchaseHistory/purchaseHistoryOne.tpl.html',
      controller: 'PurchaseHistoryOneCtrl',
      title: 'Purchase History',
      resolve: {
        accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
            .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('account.purchaseHistory.one').controller('PurchaseHistoryOneCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL){
    //local vars
    var deserializeData = function(data){
      $scope.account = data.account;
      $scope.user = data.user;
      $scope.phDetail = data.purchasehistory;
      $scope.log = data.purchaseHistoryLog;
      //$scope.addresses = data.;
    };
    console.log(accountDetails);

     $scope.print = null;
     $scope.exists = false;

     $scope.count = 0;
     $scope.myFunction = function() {
        $scope.count++;
    }

    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;

    $scope.phDetail = {
      //orderNumber:    $scope.ph.orderNumber,
      //accountid: account._id
    };

     $scope.submit = function(){
      restResource.newPurchase($scope.phDetail).then(function(result){
        if(result.success){
          console.log(result.account);
        }else{
          //error due to server side validation
          angular.forEach(result.errors, function(err, index){
            console.log(err);
          });
        }
      }), function(x){
        console.log(x);
      }
    
     };

     deserializeData(accountDetails);

}]);



angular.module('account.settings', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility', 'ui.bootstrap', 'directives.serverError']);
angular.module('account.settings').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider){
  $routeProvider
    .when('/account/settings', {
      templateUrl: 'account/settings/account-settings.tpl.html',
      controller: 'AccountSettingsCtrl',
      title: 'Account Settings',
      resolve: {
        accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
            .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('account.settings').controller('AccountSettingsCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL){
    //local vars
    var account = accountDetails.account;
    var user = accountDetails.user;
    var submitDetailForm = function(){
      $scope.alerts.detail = [];
      restResource.setAccountDetails($scope.userDetail).then(function(data){
        if(data.success){
          $scope.alerts.detail.push({
            type: 'success',
            msg: 'Account detail is updated.'
          });
        }else{
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.detail.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.detail.push({
          type: 'danger',
          msg: 'Error updating account details: ' + x
        });
      });
    };

    var submitIdentityForm = function(){
      $scope.alerts.identity = [];
      restResource.setIdentity($scope.user).then(function(data){
        if(data.success){
          $scope.alerts.identity.push({
            type: 'success',
            msg: 'User identity is updated.'
          });
        }else{
          //error due to server side validation
          $scope.errfor = data.errfor;
          angular.forEach(data.errfor, function(err, field){
            $scope.identityForm[field].$setValidity('server', false);
          });
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.identity.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.identity.push({
          type: 'danger',
          msg: 'Error updating user identity: ' + x
        });
      });
    };

    var submitPasswordForm = function(){
      $scope.alerts.pass = [];
      restResource.setPassword($scope.pass).then(function(data){
        $scope.pass = {};
        $scope.passwordForm.$setPristine();
        if(data.success){
          $scope.alerts.pass.push({
            type: 'success',
            msg: 'Password is updated.'
          });
        }else{
          //error due to server side validation
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.pass.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.pass.push({
          type: 'danger',
          msg: 'Error updating password: ' + x
        });
      });
    };

    var disconnect = function(provider){
      var errorAlert = {
        type: 'warning',
        msg: 'Error occurred when disconnecting your '+ provider + ' account. Please try again later.'
      };
      $scope.socialAlerts = [];
      security.socialDisconnect(provider).then(function(data){
        if(data.success){
          $scope.social[provider]['connected'] = false;
          $scope.socialAlerts.push({
            type: 'info',
            msg: 'Successfully disconnected your '+ provider +' account.'
          });
        }else{
          $scope.socialAlerts.push(errorAlert);
        }
      }, function(x){
        $scope.socialAlerts.push(errorAlert);
      });
    };

    //model def
    $scope.errfor = {}; //for identity server-side validation
    $scope.alerts = {
      detail: [], identity: [], pass: []
    };
    $scope.userDetail = {
      first:  account.name.first,
      middle: account.name.middle,
      last:   account.name.last,
      company:account.company,
      phone:  account.phone,
      zip:    account.zip
    };
    $scope.user = {
      username: user.username,
      email:    user.email
    };
    $scope.pass = {};
    $scope.social = null;
    if(!angular.equals({}, SOCIAL)){
      $scope.social = SOCIAL;
      if(user.google && user.google.id){
        $scope.social.google.connected = true;
      }
      if(user.facebook && user.facebook.id){
        $scope.social.facebook.connected = true;
      }
    }

    $scope.socialAlerts = [];

    //initial behavior
    var search = $location.search();
    if(search.provider){
      if(search.success === 'true'){
        $scope.socialAlerts.push({
          type: 'info',
          msg: 'Successfully connected your '+ search.provider +' account.'
        });
      }else{
        $scope.socialAlerts.push({
          type: 'warning',
          msg: 'Unable to connect your '+ search.provider + ' account. ' + search.reason
        });
      }
    }

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(key, ind){
      $scope.alerts[key].splice(ind, 1);
    };
    $scope.closeSocialAlert = function(ind){
      $scope.socialAlerts.splice(ind, 1);
    };
    $scope.submit = function(ngFormCtrl){
      switch (ngFormCtrl.$name){
        case 'detailForm':
          submitDetailForm();
          break;
        case 'identityForm':
          submitIdentityForm();
          break;
        case 'passwordForm':
          submitPasswordForm();
          break;
        default:
          return;
      }
    };
    $scope.disconnect = function(provider){
      if($scope.social){
        disconnect(provider);
      }
    };
    $scope.usstates = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
  }
]);

angular.module('account.settings.social.facebook', ['security']);
angular.module('account.settings.social.facebook').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/account/settings/facebook/callback', {
      resolve: {
        connect: ['$log', '$q', '$location', '$route', 'security', function($log, $q, $location, $route, security){
          var code = $route.current.params.code || '';
          var search = {};
          var promise = security.socialConnect('facebook', code)
            .then(function(data){
              if(data.success){
                search.success = 'true';
              }else{
                search.success = 'false';
                search.reason = data.errors[0];
              }
              return $q.reject();
            })
            .catch(function(){
              search.provider = 'facebook';
              search.success = search.success || 'false';
              $location.search({}); //remove search param "code" added by facebook
              $location.search(search);
              $location.path('/account/settings');
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('account.settings.social.google', ['security']);
angular.module('account.settings.social.google').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/account/settings/google/callback', {
      resolve: {
        connect: ['$log', '$q', '$location', '$route', 'security', function($log, $q, $location, $route, security){
          var code = $route.current.params.code || '';
          var search = {};
          var promise = security.socialConnect('google', code)
            .then(function(data){
              if(data.success){
                search.success = 'true';
              }else{
                search.success = 'false';
                search.reason = data.errors[0];
              }
              return $q.reject();
            })
            .catch(function(){
              search.provider = 'google';
              search.success = search.success || 'false';
              $location.search({}); //remove search param "code" added by google
              $location.search(search);
              $location.path('/account/settings');
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('account.settings.social', [
  'account.settings.social.google',
  'account.settings.social.facebook'
]);
angular.module('account.verification', ['security', 'services.utility', 'services.accountResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('account.verification').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/account/verification', {
      templateUrl: 'account/verification/account-verification.tpl.html',
      controller: 'AccountVerificationCtrl',
      title: 'Verification Required',
      resolve: {
        upsertVerificationToken: ['$q', '$location', 'accountResource', 'securityAuthorization', function($q, $location, restResource, securityAuthorization){
          //lazy upsert verification only for un-verified user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireUnverifiedUser()
            .then(restResource.upsertVerification, function(reason){
              //rejected either user is verified already or isn't authenticated
              redirectUrl = reason === 'verified-client'? '/account': '/login';
              return $q.reject();
            })
            .then(function(data){
              if(!data.success){
                return $q.reject();
              }
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise; //promise resolved if data.success == true
        }]
      }
    })
    .when('/account/verification/:token', {
      resolve: {
        verify: ['$q', '$location', '$route', 'accountResource', 'securityAuthorization', function($q, $location, $route, restResource, securityAuthorization){
          //attemp to verify account only for un-verified user
          var redirectUrl;
          var promise = securityAuthorization.requireUnverifiedUser()
            .then(function(){
              return restResource.verifyAccount($route.current.params.token);
            }, function(){
              redirectUrl = '/account';
              return $q.reject();
            })
            .then(function(data){
              if(data.success) {
                redirectUrl = '/account';
              }
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account/verification';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise; //promise never resolves, will always redirect
        }]
      }
    })
  ;
}]);
angular.module('account.verification').controller('AccountVerificationCtrl', [ '$scope', '$location', '$log', 'accountResource', 'security', 'utility',
  function($scope, $location, $log, restResource, security, utility){
    //model def
    $scope.formVisible = false;
    $scope.email = security.currentUser.email;
    $scope.errfor = {}; //for email server-side validation
    $scope.alerts = [];

    // method def
    $scope.showForm = function(){
      $scope.formVisible = true;
    };
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      $scope.alerts = [];
      restResource.resendVerification($scope.email).then(function (data) {
        if (data.success) {
          $scope.alerts.push({
            type: 'success',
            msg: 'Verification email successfully re-sent.'
          });
          $scope.formVisible = false;
          $scope.verificationForm.$setPristine();
        } else {
          //error due to server side validation
          $scope.errfor = data.errfor;
          angular.forEach(data.errfor, function (err, field) {
            $scope.verificationForm[field].$setValidity('server', false);
          });
        }
      }, function (x) {
        $scope.alerts.push({
          type: 'danger',
          msg: 'Error sending verification email: ' + x
        });
      });
    };
  }
]);

angular.module('admin.pricing', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'ui.bootstrap', 'directives.serverError']);
angular.module('admin.pricing').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/pricing', {
      templateUrl: 'admin/Pricing/admin-pricing.tpl.html',
      controller: 'AdminPricingCtrl',
      title: 'Pricing Area',
      resolve: {
        products: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(adminResource.getAllProducts, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
  });
}]);
angular.module('admin.pricing').controller('AdminPricingCtrl', ['$scope', '$log', '$route', '$modal', 'products','adminResource', 'utility',
  function($scope, $log, $route, $modal, products, adminResource, utility){
    
    $scope.products = products.data;
    
    var deserializeProduct = function(product){
      $scope.products = products.data;
    };

    $scope.updateModal = function (product) {
      var modalInstance = $modal.open({
        templateUrl: 'admin/Pricing/admin-pricing-modal.tpl.html',
        controller: ModalInstanceCtrl,
        resolve: {
        data: function () {
          return product;
        }
      }
      });


       modalInstance.result.then(function (newPrice) {
          $scope.updateProduct(product, newPrice);
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      

    }; 

    $scope.updateProduct = function(product, newPrice){
      console.log(product);
      var data = {
        price: newPrice,
        date:  new Date(),
        oldPrice: product.price
      };
      console.log(data);
      adminResource.updateProduct(product._id, data).then(function(result){
        if(result.success){
          $route.reload();
          console.log(result);
        }else{
          angular.forEach(result.errors, function(err, index){
            $scope.contactAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        console.log("error");
      });
    };

    $scope.title = "test";

    $scope.addProduct = function(){
      adminResource.addProduct($scope.title).then(function(data){
        $scope.title = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.title = '';
        $log.error(e);
      });
    };

  var ModalInstanceCtrl = function ($scope, $modalInstance, data) {
      $scope.placehold = data.price;
      $scope.newPrice = "";

      $scope.updatePrice = function () {
          $modalInstance.close($scope.newPrice);
          //updateProduct();
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }


  }]);
angular.module('admin.sales', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
angular.module('admin.sales').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/admin/sales', {
    templateUrl: 'admin/Sales/admin-sales.tpl.html',
    controller: 'SalesCtrl',
    title: 'Sales Area',
    resolve: {
      stats: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
          .then(adminResource.getStats, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
          .catch(function(){
            redirectUrl = redirectUrl || '/account';
            $location.path(redirectUrl);
            return $q.reject();
          });
          return promise;
        }],
        tally: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
          .then(function(){
              //handles url with query(search) parameter
              return adminResource.tallyPHs();
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
          .catch(function(){
            redirectUrl = redirectUrl || '/account';
            $location.search({});
            $location.path(redirectUrl);
            return $q.reject();
          });
          return promise;
        }],
        phList: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAllPH($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.sales').controller('SalesCtrl', ['$scope', '$log', 'stats', 'tally', 'phList', 'adminResource',
  function($scope, $log, stats, tally, phData, adminResource){
    
    var deserializeData = function(phData, tally){
      $scope.items = phData.items;
      $scope.pages = phData.pages;
      $scope.filters = phData.filters;
      $scope.phList = phData.data;

      $scope.tally = tally.data;

      dataToVariables(tally);
    };
    

    var yearInfo = function(tallyYear){

          $scope.tallyYear = [];
          $scope.totalYear = []; 

          var currentDate = new Date();
          var currentYear = currentDate.getFullYear();

          var i;
          var n = currentYear-2015;

          for(i=0;i<n;i++){
            $scope.tallyYear.push(0);
            $scope.totalYear.push(0);
          }

          for(var yr in tallyYear){
            var year = tallyYear[yr].year;
            var n = year - 2015;

            $scope.tallyYear[n]++;
            $scope.totalYear[n]+=tallyYear[yr].total;

          }

        monthInfo($scope.graphData);

          // console.log($scope.tallyYear);
          // console.log($scope.totalYear);
          
        };
    var monthInfo = function(tallyMonth){

      $scope.tallyMonth = [];
      $scope.totalMonth = []; 

      $scope.tallyMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.totalMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.avgMonthSaleSize = [0,0,0,0,0,0,0,0,0,0,0,0];


      for(var mo in tallyMonth){
        var mon = tallyMonth[mo].month;
        var n = mon - 1;

        $scope.tallyMonth[n]++;
        $scope.totalMonth[n]+=tallyMonth[mo].total;

      }

      for(var mo in $scope.avgMonthSaleSize){

        if($scope.tallyMonth[mo] > 0){
          $scope.avgMonthSaleSize[mo] = ($scope.totalMonth[mo]/$scope.tallyMonth[mo]);
        }

      }


       //console.log($scope.tallyMonth);
       //console.log($scope.totalMonth);

      thirtyDayInfo($scope.graphData);

    };

    

    var thirtyDayInfo = function(tallyDay){

      $scope.tallyDay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.totalDay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.labelDay = [];

      var cutOff = Date.today().add(-30).days();

      for(var i = 29; i>=0; i--){
        if(((i-4)%5)==0){
          var dlabel = Date.today().add(-i).days().toString('MMM dS');

          $scope.labelDay.push(dlabel);
        } else {
          $scope.labelDay.push('');
        }

      }

      for(var d in tallyDay){

        var currentDate = new Date(tallyDay[d].year, (tallyDay[d].month-1), tallyDay[d].day,0,0,0,0);
 
        var ts = new TimeSpan(currentDate-cutOff);

        var n = ts.days - 1;

        if(n > 0 && n < 30){
          var f = 30-n;
          $scope.tallyDay[n]++;
          $scope.totalDay[n]+=tallyDay[d].total;
        }

      }

      $scope.tally30Days = $scope.tallyDay.reduce(function(sum, num){ return sum + num }, 0);
      $scope.total30Days = $scope.totalDay.reduce(function(sum, num){ return sum + num }, 0);

      $scope.average30Days = $scope.total30Days/$scope.tally30Days;


      //console.log($scope.tallyDay);
      //console.log($scope.totalDay);

    };


    var dataToVariables = function(tally){
      console.log(tally);
      var graphData = []; 
      $scope.totalOverall = 0;
      $scope.tallyOverall = 0;
      $scope.averageOverall = 0;


      for(var tal in tally){
        var entry = {
          day : tally[tal]._id.day,
          month : tally[tal]._id.month,
          year : tally[tal]._id.year,
          total : tally[tal].total
        }

        $scope.totalOverall += entry.total;
        $scope.tallyOverall += 1;
        graphData.push(entry);
      }

      $scope.averageOverall = $scope.totalOverall/$scope.tallyOverall;
      $scope.graphData = graphData;
      yearInfo($scope.graphData);

    };

    //console.log($scope.phData);
    deserializeData(phData, tally);

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    $scope.colors2 = ['#45b7cd'];

    $scope.yearLabels = ["2015", "2016", "2017"];

    $scope.data = [
    65, 59, 80, 81, 56, 55, 40
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    
    $scope.options = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsYearTally = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      },
      chartColors: ['#803690','#803690']
    };

    $scope.optionsYearTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 5000,
            min: 0,
            stepSize: 1000
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      },
      chartColors: ['#803690','#803690']
    };

    $scope.optionsMonthTally = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthTotal = {

      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 1000,
            min: 0,
            stepSize: 200
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales',
            left: 30
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };


    $scope.series = ['Number of Sales', 'Average Sale Size'];
    $scope.sizeQuantityData = [
      $scope.tallyMonth,
      $scope.avgMonthSaleSize
    ];
    console.log($scope.sizeQuantityData);

    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.sizeQuantityOptions = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 1000,
            min: 0,
            stepSize: 200
          },
          scaleLabel: {
            display: true,
            labelString: 'Average Sale Size'
          },
          display: true,
          position: 'right'
        }
        ]
      },
      legend: { display: true }
    }

  $scope.xcolors = ['#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD'];

  $scope.xlabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.xdata1 = [
    [65, -59, 80, 81, -56, 55, -40]
  ];
  $scope.xdatasetOverride1 = [
    {
      label: 'Override Series A',
      borderWidth: 1,
      type: 'bar'
    }
  ];
  $scope.xdatasetOverrideBar = [
    {
      label: 'Override Series A',
      borderWidth: 1,
      type: 'bar'
    }
  ];


  }]);
angular.module('admin.accounts.detail', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('admin.accounts.detail').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/accounts/:id', {
      templateUrl: 'admin/accounts/admin-account.tpl.html',
      controller: 'AccountsDetailCtrl',
      title: 'Accounts / Details',
      resolve: {
        account: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              if(id){
                return adminResource.findAccount(id);
              }else{
                redirectUrl = '/admin/accounts';
                return $q.reject();
              }
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.accounts.detail').controller('AccountsDetailCtrl', ['$scope', '$route', '$location', 'utility', 'adminResource', 'account',
  function($scope, $route, $location, utility, adminResource, data) {
    // local vars
    var deserializeData = function(data){
      $scope.statuses = data.statuses;
      deserializeAccount(data.record);
    };
    var deserializeAccount = function(account){
      $scope.account = account;
      $scope.selectedStatus = {
        "_id": account.status.id,
        "name": account.status.name
      };
    };
    var closeAlert = function(alert, ind){
      alert.splice(ind, 1);
    };

    // $scope vars
    $scope.contactAlerts = [];
    $scope.loginAlerts = [];
    $scope.deleteAlerts = [];
    $scope.statusAlerts = [];
    $scope.noteAlerts = [];
    $scope.canSave = utility.canSave;
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.closeContactAlert = function(ind){
      closeAlert($scope.contactAlerts, ind);
    };
    $scope.closeLoginAlert = function(ind){
      closeAlert($scope.loginAlerts, ind);
    };
    $scope.closeDeleteAlert = function(ind){
      closeAlert($scope.deleteAlerts, ind);
    };
    $scope.closeStatusAlert = function(ind){
      closeAlert($scope.statusAlerts, ind);
    };
    $scope.closeNoteAlert = function(ind){
      closeAlert($scope.noteAlerts, ind);
    };
    $scope.formatTime = function(timestamp, replace){
      var res = moment(timestamp).from();
      return replace? res.replace('ago', replace): res;
    };
    $scope.updateAccount = function(){
      var data = {
        first:   $scope.account.name.first,
        middle:  $scope.account.name.middle,
        last:    $scope.account.name.last,
        company: $scope.account.company,
        phone:   $scope.account.phone,
        zip:     $scope.account.zip
      };
      $scope.contactAlerts = [];
      adminResource.updateAccount($scope.account._id, data).then(function(result){
        if(result.success){
          deserializeAccount(result.account);
          $scope.contactAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
        }else{
          angular.forEach(result.errors, function(err, index){
            $scope.contactAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        $scope.contactAlerts.push({ type: 'danger', msg: 'Error updating account: ' + x });
      });
    };
    $scope.linkUser = function () {
      $scope.loginAlerts = [];
      var newUsername = $scope.account.newUsername;
      $scope.account.newUsername = '';
      adminResource.linkUser($scope.account._id, { newUsername: newUsername }).then(function (result) {
        $scope.loginForm.$setPristine();
        if (result.success) {
          deserializeAccount(result.account);
        } else {
          angular.forEach(result.errors, function (err, index) {
            $scope.loginAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function (x) {
        $scope.loginAlerts.push({ type: 'danger', msg: 'Error linking user: ' + x });
      });
    };
    $scope.unlinkUser = function () {
      $scope.loginAlerts = [];
      if (confirm('Are you sure?')) {
        adminResource.unlinkUser($scope.account._id).then(function (result) {
          if (result.success) {
            deserializeAccount(result.account);
          } else {
            angular.forEach(result.errors, function (err, index) {
              $scope.loginAlerts.push({type: 'danger', msg: err});
            });
          }
        }, function (x) {
          $scope.loginAlerts.push({ type: 'danger', msg: 'Error unlinking user: ' + x });
        });
      }
    };
    $scope.deleteAccount = function(){
      $scope.deleteAlerts =[];
      if(confirm('Are you sure?')){
        adminResource.deleteAccount($scope.account._id).then(function(result){
          if(result.success){
            // redirect to admin users index page
            $location.path('/admin/accounts');
          }else{
            //error due to server side validation
            angular.forEach(result.errors, function(err, index){
              $scope.deleteAlerts.push({ type: 'danger', msg: err});
            });
          }
        }, function(x){
          $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting account: ' + x });
        });
      }
    };
    $scope.changeStatus = function(){
      $scope.statusAlerts = [];
      if($scope.selectedStatus && $scope.selectedStatus._id){
        if($scope.selectedStatus._id === $scope.account.status.id){
          // status selected is the current status
          $scope.statusAlerts.push({ type: 'danger', msg: 'That is the current status.'});
        }else{
          // update status
          var data = {
            id: $scope.selectedStatus._id,
            name: $scope.selectedStatus.name
          };
          adminResource.newAccountStatus($scope.account._id, data).then(function(result){
            if(result.success){
              deserializeAccount(result.account);
            }else{
              //error due to server side validation
              angular.forEach(result.errors, function(err, index){
                $scope.statusAlerts.push({ type: 'danger', msg: err});
              });
            }
          }, function(x){
            $scope.statusAlerts.push({ type: 'danger', msg: 'Error adding new status: ' + x});
          });
        }
      }else{ //no status is selected
        $scope.statusAlerts.push({ type: 'danger', msg: 'Please choose a status.'});
      }
    };
    $scope.addNote = function(){
      $scope.noteAlerts = [];
      if($scope.newNote){
        var data = { data: $scope.newNote };
        $scope.newNote = undefined;  //reset $scope.newNote
        adminResource.newAccountNote($scope.account._id, data).then(function(result){
          if(result.success){
            deserializeAccount(result.account);
          }else{
            //error due to server side validation
            angular.forEach(result.errors, function(err, index){
              $scope.noteAlerts.push({ type: 'danger', msg: err});
            });
          }
        }, function(x){
          $scope.noteAlerts.push({ type: 'danger', msg: 'Error adding new note: ' + x});
        });
      }else{
        // new note is empty
        $scope.noteAlerts.push({ type: 'danger', msg: 'Please enter some notes.' });
      }
    };
    //initialize
    deserializeData(data);
  }
]);
angular.module('admin.accounts.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.accounts.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/accounts', {
      templateUrl: 'admin/accounts/admin-accounts.tpl.html',
      controller: 'AccountsIndexCtrl',
      title: 'Manage Accounts',
      resolve: {
        accounts: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAccounts($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.accounts.index').controller('AccountsIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'accounts',
  function($scope, $route, $location, $log, utility, adminResource, data){
    // local var
    var deserializeData = function(data){
      var results = data.results;
      $scope.statuses = data.statuses;
      $scope.items = results.items;
      $scope.pages = results.pages;
      $scope.filters = results.filters;
      $scope.accounts = results.data;
    };

    var fetchAccounts = function(){
      adminResource.findAccounts($scope.filters).then(function(data){
        deserializeData(data);

        // update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.formatTime = function(timestamp, replace){
      var res = moment(timestamp).from();
      return replace? res.replace('ago', replace): res;
    };
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchAccounts();
    };
    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchAccounts();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchAccounts();
    };
    $scope.addAccount = function(){
      adminResource.addAccount($scope.fullname).then(function(data){
        $scope.fullname = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.fullname = '';
        $log.error(e);
      });
    };

    // $scope vars
    //select elements and their associating options
    $scope.statuses = [];
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "name \u25B2", value: "name"},
      {label: "name \u25BC", value: "-name"},
      {label: "company \u25B2", value: "company"},
      {label: "company \u25BC", value: "-company"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

    //initialize $scope variables
    deserializeData(data);
  }
]);
angular.module('admin.accounts', [
  'admin.accounts.index',
  'admin.accounts.detail'
]);
angular.module('admin.activity', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
angular.module('admin.activity').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/activity', {
      templateUrl: 'admin/activity/activity.tpl.html',
      controller: 'ActivityCtrl',
      title: 'Activity',
      resolve: {
        stats: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(adminResource.getStats, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        viewCount: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.getRecentViewCount();
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        tally: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.tallyPHs();
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        phList: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAllPH($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    })
}]);
angular.module('admin.activity').controller('ActivityCtrl', ['$scope', '$log', 'stats', 'phList', 'adminResource', 'tally', 'securityAuthorization', '$q', 'viewCount',
  function($scope, $log, stats, phData, adminResource, tally, securityAuthorization, $q, viewCount){

    $scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    }

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    }

    var deserializeData = function(phData, tally, viewCount){
      $scope.items = phData.items;
      $scope.pages = phData.pages;
      $scope.filters = phData.filters;
      $scope.phList = phData.data;
      $scope.viewRecent = viewCount;

      console.log($scope.viewRecent);
      $scope.tally = tally.data;

      viewData($scope.viewRecent);
      dataToVariables(tally);
    };
    
    var yearInfo = function(tallyYear){

          $scope.tallyYear = [];
          $scope.totalYear = []; 

          var currentDate = new Date();
          var currentYear = currentDate.getFullYear();

          var i;
          var n = currentYear-2015;

          for(i=0;i<n;i++){
            $scope.tallyYear.push(0);
            $scope.totalYear.push(0);
          }

          for(var yr in tallyYear){
            var year = tallyYear[yr].year;
            var n = year - 2015;

            $scope.tallyYear[n]++;
            $scope.totalYear[n]+=tallyYear[yr].total;

          }

        monthInfo($scope.graphData);
          
        };
    var monthInfo = function(tallyMonth){

      $scope.tallyMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.totalMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.avgMonthSaleSize = [0,0,0,0,0,0,0,0,0,0,0,0];


      for(var mo in tallyMonth){
        var mon = tallyMonth[mo].month;
        var n = mon - 1;

        $scope.tallyMonth[n]++;
        $scope.totalMonth[n]+=tallyMonth[mo].total;

      }

      for(var mo in $scope.avgMonthSaleSize){

        if($scope.tallyMonth[mo] > 0){
          $scope.avgMonthSaleSize[mo] = ($scope.totalMonth[mo]/$scope.tallyMonth[mo]);
        }
      }
      thirtyDayInfo($scope.graphData);

    };

    var thirtyDayInfo = function(tallyDay){

      $scope.tallyDay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.totalDay = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.labelDay = [];

      var cutOff = Date.today().add(-30).days();

      for(var i = 29; i>=0; i--){
        if(((i-4)%5)==0){
          var dlabel = Date.today().add(-i).days().toString('MMM dS');

          $scope.labelDay.push(dlabel);
        } else {
          $scope.labelDay.push('');
        }

      }

      for(var d in tallyDay){

        var currentDate = new Date(tallyDay[d].year, (tallyDay[d].month-1), tallyDay[d].day,0,0,0,0);
 
        var ts = new TimeSpan(currentDate-cutOff);

        var n = ts.days - 1;

        if(n > 0 && n < 30){
          var f = 30-n;
          $scope.tallyDay[n]++;
          $scope.totalDay[n]+=tallyDay[d].total;
        }
      }
    };


    var viewData = function(viewCount){
         $scope.viewDataDates = []; 
         $scope.homeViewCounts = []; 
         $scope.cartViewCounts = []; 

         $scope.homeViewYear = [];
         $scope.cartViewYear = [];

         $scope.homeViewMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
         $scope.cartViewMonth = [0,0,0,0,0,0,0,0,0,0,0,0];

         $scope.homeView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
         $scope.cartView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

         var cutOff = Date.today().add(-30).days();

         angular.forEach(viewCount, function(view, key) {
            $scope.viewDataDates.push(view.date);
            $scope.homeViewCounts.push(view.homePageViews);
            $scope.cartViewCounts.push(view.cartViews);

            var viewDate = new Date(view.date);

            var ts = new TimeSpan(viewDate-cutOff);
            var n = ts.days - 1;
            if(n > 0 && n < 30){
              var f = 30-n;
              $scope.homeView30Day[n]+=view.homePageViews;
              $scope.cartView30Day[n]+=view.cartViews;
            }

            var mon = viewDate.getMonth();
            var n = mon;

            if(view.homePageViews)
            $scope.homeViewMonth[n]+=view.homePageViews;
            
            if(view.cartViews)
            $scope.cartViewMonth[n]+=view.cartViews;


         });

          var currentDate = new Date();
          var currentYear = currentDate.getFullYear();

          var i;
          var n = currentYear-2015;

          for(i=0;i<n;i++){
            $scope.homeViewYear.push(0);
            $scope.cartViewYear.push(0);
          }

          for(var view in viewCount){
            var viewDate = new Date(view.date);
            var year = viewDate.getFullYear();
            var n = year - 2015;

            $scope.homeViewYear[n]+=view.homePageViews;
            $scope.cartViewYear[n]+=view.cartViews;

          }

      };



    var dataToVariables = function(tally){
      var graphData = []; 

      for(var tal in tally){
        var entry = {
          day : tally[tal]._id.day,
          month : tally[tal]._id.month,
          year : tally[tal]._id.year,
          total : tally[tal].total
        }

        graphData.push(entry);
      }

      $scope.graphData = graphData;
      yearInfo($scope.graphData);

    };


    deserializeData(phData, tally, viewCount);


//GRAPH INFORMATION

$scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    $scope.yearLabels = ["2015", "2016", "2017"];

    $scope.data = [
    65, 59, 80, 81, 56, 55, 40
    ];
    $scope.onClick = function (points, evt) {
      //console.log(points, evt);
    };
    
    $scope.options = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsSalesDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsViewsDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Views'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsYearTally = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthViews = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 500,
            min: 0,
            stepSize: 50
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Views'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsYearTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 5000,
            min: 0,
            stepSize: 1000
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthTally = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };

    $scope.optionsMonthTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 1000,
            min: 0,
            stepSize: 200
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };


    $scope.series = ['Series A', 'Series B'];
    $scope.sizeQuantityData = [
      $scope.tallyMonth,
      $scope.avgMonthSaleSize
    ];

    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.sizeQuantityOptions = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 10,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Sales'
          },
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          scaleSteps : 1,
          ticks: {
            suggestedMax: 1000,
            min: 0,
            stepSize: 200
          },
          scaleLabel: {
            display: true,
            labelString: 'Average Sale Size'
          },
          display: true,
          position: 'right'
        }
        ]
      }
    }

    // $scope.homePageViewData = [
    //   $scope.thirtyDayInfo,
    //   $scope.viewRecent.homePageViewData
    // ];



  }]);
angular.module('admin.admin-account-settings', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility','ui.bootstrap', 'directives.serverError']);
angular.module('admin.admin-account-settings').config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider){
  $routeProvider
    .when('/admin/admin-account-settings/', {
      templateUrl: 'admin/admin-account-settings/admin-account-settings.tpl.html',
      controller: 'AdminAccountSettingsCtrl',
      title: 'Account Settings',
      resolve: {
        accountDetails: ['$q', '$location', 'securityAuthorization', 'accountResource' ,function($q, $location, securityAuthorization, accountResource){
          //get account details only for verified-user, otherwise redirect to /account/verification
          var redirectUrl;
          var promise = securityAuthorization.requireVerifiedUser()
            .then(accountResource.getAccountDetails, function(reason){
              //rejected either user is unverified or un-authenticated
              redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.admin-account-settings').controller('AdminAccountSettingsCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL){
    //local vars
    var account = accountDetails.account;
    var user = accountDetails.user;
    var submitDetailForm = function(){
      $scope.alerts.detail = [];
      restResource.setAccountDetails($scope.userDetail).then(function(data){
        if(data.success){
          $scope.alerts.detail.push({
            type: 'success',
            msg: 'Account detail is updated.'
          });
        }else{
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.detail.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.detail.push({
          type: 'danger',
          msg: 'Error updating account details: ' + x
        });
      });
    };

    var submitIdentityForm = function(){
      $scope.alerts.identity = [];
      restResource.setIdentity($scope.user).then(function(data){
        if(data.success){
          $scope.alerts.identity.push({
            type: 'success',
            msg: 'User identity is updated.'
          });
        }else{
          //error due to server side validation
          $scope.errfor = data.errfor;
          angular.forEach(data.errfor, function(err, field){
            $scope.identityForm[field].$setValidity('server', false);
          });
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.identity.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.identity.push({
          type: 'danger',
          msg: 'Error updating user identity: ' + x
        });
      });
    };

    var submitPasswordForm = function(){
      $scope.alerts.pass = [];
      restResource.setPassword($scope.pass).then(function(data){
        $scope.pass = {};
        $scope.passwordForm.$setPristine();
        if(data.success){
          $scope.alerts.pass.push({
            type: 'success',
            msg: 'Password is updated.'
          });
        }else{
          //error due to server side validation
          angular.forEach(data.errors, function(err, index){
            $scope.alerts.pass.push({
              type: 'danger',
              msg: err
            });
          });
        }
      }, function(x){
        $scope.alerts.pass.push({
          type: 'danger',
          msg: 'Error updating password: ' + x
        });
      });
    };

    var disconnect = function(provider){
      var errorAlert = {
        type: 'warning',
        msg: 'Error occurred when disconnecting your '+ provider + ' account. Please try again later.'
      };
      $scope.socialAlerts = [];
      security.socialDisconnect(provider).then(function(data){
        if(data.success){
          $scope.social[provider]['connected'] = false;
          $scope.socialAlerts.push({
            type: 'info',
            msg: 'Successfully disconnected your '+ provider +' account.'
          });
        }else{
          $scope.socialAlerts.push(errorAlert);
        }
      }, function(x){
        $scope.socialAlerts.push(errorAlert);
      });
    };

    //model def
    $scope.errfor = {}; //for identity server-side validation
    $scope.alerts = {
      detail: [], identity: [], pass: []
    };
    $scope.userDetail = {
      first:  account.name.first,
      middle: account.name.middle,
      last:   account.name.last,
      company:account.company,
      phone:  account.phone,
      zip:    account.zip
    };
    $scope.user = {
      username: user.username,
      email:    user.email
    };
    $scope.pass = {};
    $scope.social = null;
    if(!angular.equals({}, SOCIAL)){
      $scope.social = SOCIAL;
      if(user.google && user.google.id){
        $scope.social.google.connected = true;
      }
      if(user.facebook && user.facebook.id){
        $scope.social.facebook.connected = true;
      }
    }

    $scope.socialAlerts = [];

    //initial behavior
    var search = $location.search();
    if(search.provider){
      if(search.success === 'true'){
        $scope.socialAlerts.push({
          type: 'info',
          msg: 'Successfully connected your '+ search.provider +' account.'
        });
      }else{
        $scope.socialAlerts.push({
          type: 'warning',
          msg: 'Unable to connect your '+ search.provider + ' account. ' + search.reason
        });
      }
    }

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(key, ind){
      $scope.alerts[key].splice(ind, 1);
    };
    $scope.closeSocialAlert = function(ind){
      $scope.socialAlerts.splice(ind, 1);
    };
    $scope.submit = function(ngFormCtrl){
      switch (ngFormCtrl.$name){
        case 'detailForm':
          submitDetailForm();
          break;
        case 'identityForm':
          submitIdentityForm();
          break;
        case 'passwordForm':
          submitPasswordForm();
          break;
        default:
          return;
      }
    };
    $scope.disconnect = function(provider){
      if($scope.social){
        disconnect(provider);
      }
    };
  }
]);

angular.module('admin.admin-groups.detail', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('admin.admin-groups.detail').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/admin-groups/:id', {
      templateUrl: 'admin/admin-groups/admin-group.tpl.html',
      controller: 'AdminGroupsDetailCtrl',
      title: 'Admin Groups / Details',
      resolve: {
        group: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              if(id){
                return adminResource.findAdminGroup(id);
              }else{
                redirectUrl = '/admin/admin-groups';
                return $q.reject();
              }
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.admin-groups.detail').controller('AdminGroupsDetailCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'group',
  function($scope, $route, $location, $log, utility, adminResource, data) {
    // local vars
    var deserializeData = function(data){
      $scope.group = data;
    };
    var closeAlert = function(alert, ind){
      alert.splice(ind, 1);
    };
    var isExistingPermission = function(newPermission){
      var flag = false;
      angular.forEach($scope.group.permissions, function(permission, ind){
        if(permission.name === newPermission){
          flag = true;
        }
      });
      return flag;
    };
    //$scope vars
    $scope.detailAlerts = [];
    $scope.deleteAlerts = [];
    $scope.permissionAlerts = [];
    $scope.canSave = utility.canSave;
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.closeDetailAlert = function(ind){
      closeAlert($scope.detailAlerts, ind);
    };
    $scope.closeDeleteAlert = function(ind){
      closeAlert($scope.deleteAlerts, ind);
    };
    $scope.closePermissionAlert = function(ind){
      closeAlert($scope.permissionAlerts, ind);
    };
    $scope.update = function(){
      $scope.detailAlerts = [];
      adminResource.updateAdminGroup($scope.group._id, { name: $scope.group.name }).then(function(result){
        if(result.success){
          deserializeData(result.adminGroup);
          $scope.detailAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
        }else{
          angular.forEach(result.errors, function(err, index){
            $scope.detailAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        $scope.detailAlerts.push({ type: 'danger', msg: 'Error updating admin group: ' + x });
      });
    };
    $scope.addPermission = function(){
      if(!$scope.newPermission){
        alert('Please enter a name.');
      } else if(isExistingPermission($scope.newPermission)){
        alert('That name already exists.');
      }else{
        $scope.group.permissions.push({
          name: angular.copy($scope.newPermission),
          permit: true
        });
      }
      $scope.newPermission = null;  //reset newPermission after user interaction
    };
    $scope.togglePermission = function(index){
      $scope.group.permissions[index]['permit'] = !$scope.group.permissions[index]['permit'];
    };
    $scope.deletePermission = function(index){
      if(confirm('Are you sure?')){
        $scope.group.permissions.splice(index, 1);
      }
    };
    $scope.saveSettings = function(){
      $scope.permissionAlerts = [];
      var permissions = $scope.group.permissions;
      adminResource.saveAdminGroupPermissions($scope.group._id, {permissions: permissions}).then(function (result) {
        if (result.success) {
          $scope.permissionAlerts.push({type: 'info', msg: 'Changes have been saved.'});
          deserializeData(result.adminGroup);
        } else {
          //error due to server side validation
          angular.forEach(result.errors, function (err, index) {
            $scope.permissionAlerts.push({type: 'danger', msg: err});
          });
        }
      }, function (x) {
        $scope.permissionAlerts.push({type: 'danger', msg: 'Error saving admin group permissions: ' + x});
      });
    };
    $scope.deleteAdminGroup = function(){
      $scope.deleteAlerts =[];
      if(confirm('Are you sure?')){
        adminResource.deleteAdminGroup($scope.group._id).then(function(result){
          if(result.success){
            //redirect to admin admin-groups index page
            $location.path('/admin/admin-groups');
          }else{
            //error due to server side validation
            angular.forEach(result.errors, function(err, index){
              $scope.deleteAlerts.push({ type: 'danger', msg: err});
            });
          }
        }, function(x){
          $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting admin group: ' + x });
        });
      }
    };

    //initialize
    deserializeData(data);
  }
]);
angular.module('admin.admin-groups.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.admin-groups.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/admin-groups', {
      templateUrl: 'admin/admin-groups/admin-groups.tpl.html',
      controller: 'AdminGroupsIndexCtrl',
      title: 'Manage Admin Groups',
      resolve: {
        groups: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAdminGroups($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.admin-groups.index').controller('AdminGroupsIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'groups',
  function($scope, $route, $location, $log, utility, adminResource, data){
    // local var
    var deserializeData = function(data){
      $scope.items = data.items;
      $scope.pages = data.pages;
      $scope.filters = data.filters;
      $scope.groups = data.data;
    };

    var fetchAdminGroups = function(){
      adminResource.findAdminGroups($scope.filters).then(function(data){
        deserializeData(data);

        //update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchAdminGroups();
    };
    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchAdminGroups();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchAdminGroups();
    };
    $scope.addGroup = function(){
      adminResource.addAdminGroup($scope.groupname).then(function(data){
        $scope.groupname = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.groupname = '';
        $log.error(e);
      });
    };

    // $scope vars
    //select elements and their associating options
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "name \u25B2", value: "name"},
      {label: "name \u25BC", value: "-name"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

    //initialize $scope variables
    deserializeData(data);
  }
]);
angular.module('admin.admin-groups', [
  'admin.admin-groups.index',
  'admin.admin-groups.detail'
]);
angular.module('admin.index', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
angular.module('admin.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin', {
      templateUrl: 'admin/admin.tpl.html',
      controller: 'AdminCtrl',
      title: 'Admin Area',
      resolve: {
        stats: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(adminResource.getStats, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        viewCount: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.getRecentViewCount();
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    })
}]);
angular.module('admin.index').controller('AdminCtrl', ['$scope', '$log', 'stats', 'viewCount', 'adminResource',
  function($scope, $log, stats, viewCount, adminResource){

    // html2canvas(document.getElementById('exportthis'), {
    //         onrendered: function (canvas) {
    //             var data = canvas.toDataURL();
    //             var docDefinition = {
    //                 content: [{
    //                     image: data,
    //                     width: 500,
    //                 }]
    //             };
    //             pdfMake.createPdf(docDefinition).download("Test.pdf");
    //         }
    //     });

    $scope.click = function() {
      //    console.log("button clicked");
      //  $scope.order.showPopupAddedToCart = !$scope.order.showPopupAddedToCart;
      var doc = new jsPDF();
      doc.text(20, 20, 'Hello world!');

      var pdfBase64 = doc.output('datauristring');

     // adminResource.sendConfirmationEmail();


      // var emailjs = require('emailjs/email');
      // var emailer = emailjs.server.connect( req.app.config.smtp.credentials );
      // emailer.send({
      //   from: req.app.config.smtp.from.name +' <'+ req.app.config.smtp.from.address +'>',
      //   to: 'florenm2@miamioh.edu',
      //   subject: 'subject',
      //   text: 'hello',
      //  // attachment: attachments
      // }, function(err, message) {
      //   if (err) {
      //     options.error('Email failed to send. '+ err);
      //     return;
      //   }
      //   else {
      //     options.success(message);
      //     return;
      //   }
      // })


      // Save the PDF
      //doc.save('Test.pdf');

    };

    var viewData = function(viewCount){
         $scope.viewDataDates = []; 
         $scope.homeViewCounts = []; 
         $scope.cartViewCounts = []; 
         $scope.labelDay = [];

         $scope.homeView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
         $scope.cartView30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

         var cutOff = Date.today().add(-30).days();

         for(var i = 29; i>=0; i--){
            if(((i-4)%5)==0){
              var dlabel = Date.today().add(-i).days().toString('MMM dS');

              $scope.labelDay.push(dlabel);
            } else {
              $scope.labelDay.push('');
            }
          }


         angular.forEach(viewCount, function(view, key) {
            $scope.viewDataDates.push(view.date);
            $scope.homeViewCounts.push(view.homePageViews);
            $scope.cartViewCounts.push(view.cartViews);

            var currentDate = new Date(view.date);

            var ts = new TimeSpan(currentDate-cutOff);
            var n = ts.days - 1;
            if(n > 0 && n < 30){
              var f = 30-n;
              $scope.homeView30Day[n]+=view.homePageViews;
              $scope.cartView30Day[n]+=view.cartViews;
            }
           
         });

      };
      viewData(viewCount);    


      $scope.optionsViewsDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Views'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };




  }]);
angular.module('admin.administrators.detail', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('admin.administrators.detail').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/administrators/:id', {
      templateUrl: 'admin/administrators/admin-administrator.tpl.html',
      controller: 'AdministratorsDetailCtrl',
      title: 'Administrators / Details',
      resolve: {
        administrator: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /administrator
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              if(id){
                return adminResource.findAdministrator(id);
              }else{
                redirectUrl = '/admin/administrators';
                return $q.reject();
              }
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.administrators.detail').controller('AdministratorsDetailCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'administrator',
  function($scope, $route, $location, $log, utility, adminResource, data) {
    // local vars
    var deserializeData = function(data){
      $scope.groups = data.adminGroups;
      deserializeAdministrator(data.record);
    };
    var deserializeAdministrator = function(administrator){
      $scope.selectedNewGroup = null;
      $scope.administrator = administrator;
    };
    var closeAlert = function(alert, ind){
      alert.splice(ind, 1);
    };
    var isExistingGroup = function(selectedGroup){
      var flag = false;
      var groups = $scope.administrator.groups;
      angular.forEach(groups, function(group, ind){
        if(group._id === selectedGroup._id){
          flag = true;
        }
      });
      return flag;
    };
    var isExistingPermission = function(newPermission){
      var flag = false;
      var permissions = $scope.administrator.permissions;
      angular.forEach(permissions, function(permission, ind){
        if(permission.name === newPermission){
          flag = true;
        }
      });
      return flag;
    };
    // $scope vars
    $scope.contactAlerts = [];
    $scope.loginAlerts = [];
    $scope.deleteAlerts = [];
    $scope.groupAlerts = [];
    $scope.permissionAlerts = [];
    $scope.canSave = utility.canSave;
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.closeContactAlert = function(ind){
      closeAlert($scope.contactAlerts, ind);
    };
    $scope.closeLoginAlert = function(ind){
      closeAlert($scope.loginAlerts, ind);
    };
    $scope.closeDeleteAlert = function(ind){
      closeAlert($scope.deleteAlerts, ind);
    };
    $scope.closeGroupAlert = function(ind){
      closeAlert($scope.groupAlerts, ind);
    };
    $scope.closePermissionAlert = function(ind){
      closeAlert($scope.permissionAlerts, ind);
    };
    $scope.updateAdmin = function(){
      var data = {
        first:   $scope.administrator.name.first,
        middle:  $scope.administrator.name.middle,
        last:    $scope.administrator.name.last
      };
      $scope.contactAlerts = [];
      adminResource.updateAdministrator($scope.administrator._id, data).then(function(result){
        if(result.success){
          deserializeAdministrator(result.admin);
          $scope.contactAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
        }else{
          angular.forEach(result.errors, function(err, index){
            $scope.contactAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        $scope.contactAlerts.push({ type: 'danger', msg: 'Error updating administrator: ' + x });
      });
    };
    $scope.linkUser = function () {
      $scope.loginAlerts = [];
      var newUsername = $scope.administrator.newUsername;
      $scope.administrator.newUsername = '';
      adminResource.adminLinkUser($scope.administrator._id, { newUsername: newUsername }).then(function (result) {
        $scope.loginForm.$setPristine();
        if (result.success) {
          deserializeAdministrator(result.admin);
        } else {
          angular.forEach(result.errors, function (err, index) {
            $scope.loginAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function (x) {
        $scope.loginAlerts.push({ type: 'danger', msg: 'Error linking user: ' + x });
      });
    };
    $scope.unlinkUser = function () {
      $scope.loginAlerts = [];
      if (confirm('Are you sure?')) {
        adminResource.adminUnlinkUser($scope.administrator._id).then(function (result) {
          if (result.success) {
            deserializeAdministrator(result.admin);
          } else {
            angular.forEach(result.errors, function (err, index) {
              $scope.loginAlerts.push({type: 'danger', msg: err});
            });
          }
        }, function (x) {
          $scope.loginAlerts.push({ type: 'danger', msg: 'Error unlinking user: ' + x });
        });
      }
    };
    $scope.addGroup = function(){
      if(!$scope.selectedNewGroup){
        alert('Please select a group.');
      } else if(isExistingGroup($scope.selectedNewGroup)){
        alert('That group already exists.');
      }else{
        $scope.administrator.groups.push(angular.copy($scope.selectedNewGroup));
      }
      $scope.selectedNewGroup = null;  //reset selectedGroup after user interaction
    };
    $scope.deleteGroup = function(index){
      if(confirm('Are you sure?')){
        $scope.administrator.groups.splice(index, 1);
      }
    };
    $scope.saveGroups = function(){
      $scope.groupAlerts = [];
      var groups = $scope.administrator.groups;
      adminResource.saveAdminGroups($scope.administrator._id, {groups: groups}).then(function (result) {
        if (result.success) {
          $scope.groupAlerts.push({type: 'info', msg: 'Changes have been saved.'});
          deserializeAdministrator(result.admin);
        } else {
          //error due to server side validation
          angular.forEach(result.errors, function (err, index) {
            $scope.groupAlerts.push({type: 'danger', msg: err});
          });
        }
      }, function (x) {
        $scope.groupAlerts.push({type: 'danger', msg: 'Error saving admin groups: ' + x});
      });
    };
    $scope.addPermission = function(){
      if(!$scope.newPermission){
        alert('Please enter a name.');
      } else if(isExistingPermission($scope.newPermission)){
        alert('That name already exists.');
      }else{
        $scope.administrator.permissions.push({
          name: angular.copy($scope.newPermission),
          permit: true
        });
      }
      $scope.newPermission = null;  //reset newPermission after user interaction
    };
    $scope.togglePermission = function(index){
      $scope.administrator.permissions[index]['permit'] = !$scope.administrator.permissions[index]['permit'];
    };
    $scope.deletePermission = function(index){
      if(confirm('Are you sure?')){
        $scope.administrator.permissions.splice(index, 1);
      }
    };
    $scope.saveSettings = function(){
      $scope.permissionAlerts = [];
      var permissions = $scope.administrator.permissions;
      adminResource.saveAdminPermissions($scope.administrator._id, {permissions: permissions}).then(function (result) {
        if (result.success) {
          $scope.permissionAlerts.push({type: 'info', msg: 'Changes have been saved.'});
          deserializeAdministrator(result.admin);
        } else {
          //error due to server side validation
          angular.forEach(result.errors, function (err, index) {
            $scope.permissionAlerts.push({type: 'danger', msg: err});
          });
        }
      }, function (x) {
        $scope.permissionAlerts.push({type: 'danger', msg: 'Error saving admin permissions: ' + x});
      });
    };
    $scope.deleteAdministrator = function(){
      $scope.deleteAlerts =[];
      if(confirm('Are you sure?')){
        adminResource.deleteAdministrator($scope.administrator._id).then(function(result){
          if(result.success){
            // redirect to admin administrators index page
            $location.path('/admin/administrators');
          }else{
            //error due to server side validation
            angular.forEach(result.errors, function(err, index){
              $scope.deleteAlerts.push({ type: 'danger', msg: err});
            });
          }
        }, function(x){
          $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting administrator: ' + x });
        });
      }
    };

    //initialize
    deserializeData(data);
  }
]);
angular.module('admin.administrators.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.administrators.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/administrators', {
      templateUrl: 'admin/administrators/admin-administrators.tpl.html',
      controller: 'AdministratorsIndexCtrl',
      title: 'Manage Administrators',
      resolve: {
        administrators: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAdministrators($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.administrators.index').controller('AdministratorsIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'administrators',
  function($scope, $route, $location, $log, utility, adminResource, data){
    // local var
    var deserializeData = function(data){
      $scope.items = data.items;
      $scope.pages = data.pages;
      $scope.filters = data.filters;
      $scope.administrators = data.data;
    };

    var fetchAdministrators = function(){
      adminResource.findAdministrators($scope.filters).then(function(data){
        deserializeData(data);

        //update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchAdministrators();
    };
    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchAdministrators();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchAdministrators();
    };
    $scope.addAdmin = function(){
      adminResource.addAdministrator($scope.fullname).then(function(data){
        $scope.fullname = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.fullname = '';
        $log.error(e);
      });
    };

    // $scope vars
    //select elements and their associating options
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "name \u25B2", value: "name"},
      {label: "name \u25BC", value: "-name"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

    //initialize $scope variables
    deserializeData(data);
  }
]);
angular.module('admin.administrators', [
  'admin.administrators.index',
  'admin.administrators.detail'
]);
angular.module('admin.developers', ['ngRoute', 'security.authorization', 'services.adminResource', 'angular.morris', 'chart.js']);
angular.module('admin.developers').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/admin/developers', {
    templateUrl: 'admin/developers/developers.tpl.html',
    controller: 'DevCtrl',
    title: 'Developer Area',
    resolve: {
      stats: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
          .then(adminResource.getStats, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
          .catch(function(){
            redirectUrl = redirectUrl || '/account';
            $location.path(redirectUrl);
            return $q.reject();
          });
          return promise;
        }],
        viewCount: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
          .then(function(){
              //handles url with query(search) parameter
              return adminResource.getRecentViewCount();
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
          .catch(function(){
            redirectUrl = redirectUrl || '/account';
            $location.search({});
            $location.path(redirectUrl);
            return $q.reject();
          });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.developers').controller('DevCtrl', ['$scope', '$log', 'stats', 'viewCount',
  function($scope, $log, stats, viewCount){

    var deserializeData = function(viewCount){
      $scope.apiDataDates = []; 
      $scope.apiCounts = [];
      $scope.apiYear = [];
      $scope.apiMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
      $scope.api30Day = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      $scope.labelDay = [];

      for(var i = 29; i>=0; i--){
        if(((i-4)%5)==0){
          var dlabel = Date.today().add(-i).days().toString('MMM dS');

          $scope.labelDay.push(dlabel);
        } else {
          $scope.labelDay.push('');
        }

      }
      
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var cutOff = Date.today().add(-30).days();

      angular.forEach(viewCount, function(call, key) {
        $scope.viewDataDates.push(call.date);
        $scope.apiCounts.push(call.apiCalls);

        var callDate = new Date(call.date);

        var ts = new TimeSpan(callDate-cutOff);
        var n = ts.days - 1;
        if(n > 0 && n < 30){
          var f = 30-n;
          $scope.api30Day[n]+=call.apiCalls;
        }

        var mon = callDate.getMonth();
        var n = mon;

        if(view.apiCalls)
          $scope.apiMonth[n]+=call.apiCalls;
      });

      var i;
      var n = currentYear-2015;

      for(i=0;i<n;i++){
        $scope.apiYear.push(0);
      }

      for(var call in viewCount){
        var callDate = new Date(call.date);
        var year = callDate.getFullYear();
        var n = year - 2015;

        $scope.apiYear[n]+=call.apiCalls;
      }

    };


    $scope.optionsViewsDayTotal = {
      scales: {
        yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Total Views'
          },
          display: true,
          position: 'left'
        }
        ]
      }
    };
}]);
angular.module('admin', [
  'admin.index',
  'admin.activity',
  'admin.users',
  'admin.accounts',
  'admin.administrators',
  'admin.admin-groups',
  'admin.statuses',
  'admin.sales',
  'admin.purchase-history',
  'admin.developers',
  'admin.admin-account-settings',
  'admin.pricing'
]);
angular.module('admin.purchase-history.all', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.purchase-history.all').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/purchase-history', {
      templateUrl: 'admin/purchase-history/admin-purchase-histories.tpl.html',
      controller: 'PHCtrl',
      title: 'Purchase History',
      resolve: {
        phList: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAllPH($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.purchase-history.all').controller('PHCtrl', ['$scope', '$log', '$route', '$location', 'utility', 'adminResource', 'phList',
  function($scope, $log, $route, $location, utility, adminResource, data){

    var deserializeData = function(data){
      console.log(data);
      $scope.items = data.items;
      $scope.pages = data.pages;
      $scope.filters = data.filters;
      $scope.phList = data.data;
    };

    $scope.goToPH = function() {
        $scope.selected = this.ph;
        $location.path('/admin/purchase-history/' + $scope.selected._id);
    };

    var fetchPH = function(){
      adminResource.findPHs($scope.filters).then(function(data){

        deserializeData(data);

        // update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchPH();
    };

    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchPH();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchPH();
    };

    $scope.addPH = function(){
      adminResource.addPH($scope.orderNumber).then(function(data){
        $scope.orderNumber = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.username = '';
        $log.error(e);
      });
    };

    // $scope vars
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "orderNumber \u25B2", value: "orderNumber"},
      {label: "orderNumber \u25BC", value: "-orderNumber"},
      {label: "orderDate \u25B2", value: "orderDate"},
      {label: "orderDate \u25BC", value: "-orderDate"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

     deserializeData(data);
  }

  ]);
angular.module('admin.purchase-history.single', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('admin.purchase-history.single').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/purchase-history/:id', {
      templateUrl: 'admin/purchase-history/admin-purchase-history.tpl.html',
      controller: 'SinglePHCtrl',
      title: 'Purchase History',
      resolve: {
        phDetail: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              console.log(id);
              if(id){
                return adminResource.findPH(id);
              }else{
                redirectUrl = '/admin/purchase-history';
                return $q.reject();
              }
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.purchase-history.single').controller('SinglePHCtrl', ['$scope', '$route', '$location', 'utility', 'adminResource', 'phDetail',
  function($scope, $route, $location, utility, adminResource, phDetail) {
    // // local vars
    // var closeAlert = function(alert, ind){
    //   alert.splice(ind, 1);
    // };
    

    // // $scope vars
    // $scope.role = {};
    // $scope.identityAlerts = [];
    // $scope.passwordAlerts = [];
    // $scope.roleAlerts = [];
    // $scope.deleteAlerts = [];
    // $scope.errfor = {};
    // $scope.isActives = ["yes", "no"];
    // $scope.canSave = utility.canSave;
    // $scope.hasError = utility.hasError;
    // $scope.showError = utility.showError;
    // $scope.closeIdentityAlert = function(ind){
    //   closeAlert($scope.identityAlerts, ind);
    // };
    // $scope.closePasswordAlert = function(ind){
    //   closeAlert($scope.passwordAlerts, ind);
    // };
    // $scope.closeRoleAlert = function(ind){
    //   closeAlert($scope.roleAlerts, ind);
    // };
    // $scope.closeDeleteAlert = function(ind){
    //   closeAlert($scope.deleteAlerts, ind);
    // };
    // $scope.updateIdentity = function(){
    //   var data = {
    //     username: $scope.user.username,
    //     email: $scope.user.email
    //   };
    //   if($scope.user.isActive){
    //     data['isActive'] = $scope.user.isActive;
    //   }
    //   $scope.identityAlerts = [];
    //   adminResource.updateUser($scope.user._id, data).then(function(result){
    //     if(result.success){
    //       $scope.user = result.user; //update $scope user model
    //       $scope.identityAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
    //     }else{
    //       $scope.errfor = result.errfor;
    //       angular.forEach(result.errfor, function(err, field){
    //         $scope.identityForm[field].$setValidity('server', false);
    //       });
    //       angular.forEach(result.errors, function(err, index){
    //         $scope.identityAlerts.push({ type: 'danger', msg: err });
    //       });
    //     }
    //   }, function(x){
    //     $scope.identityAlerts.push({
    //       type: 'danger',
    //       msg: 'Error updating user identity: ' + x
    //     });
    //   });
    // };
    // $scope.unlinkAdmin = function(){
    //   unlink('admin');
    // };
    // $scope.linkAdmin = function(){
    //   link('admin');
    // };
    // $scope.unlinkAccount = function(){
    //   unlink('account');
    // };
    // $scope.linkAccount = function(){
    //   link('account');
    // };
    // $scope.setPassword = function(){
    //   $scope.passwordAlerts = [];
    //   adminResource.setPassword($scope.user._id, $scope.pass).then(function(result){
    //     $scope.pass = {};
    //     $scope.passwordForm.$setPristine();
    //     if(result.success){
    //       $scope.user = result.user; //update $scope user model (why password hash is sent to front-end?)
    //       $scope.passwordAlerts.push({ type: 'info', msg: 'A new password has been set.' });
    //     }else{
    //       //error due to server side validation
    //       angular.forEach(result.errors, function(err, index){
    //         $scope.passwordAlerts.push({ type: 'danger', msg: err});
    //       });
    //     }
    //   }, function(x){
    //     $scope.passwordAlerts.push({ type: 'danger', msg: 'Error updating password: ' + x });
    //   });
    // };
    // $scope.deleteUser = function(){
    //   $scope.deleteAlerts =[];
    //   if(confirm('Are you sure?')){
    //     adminResource.deleteUser($scope.user._id).then(function(result){
    //       if(result.success){
    //         // redirect to admin users index page
    //         $location.path('/admin/users');
    //       }else{
    //         //error due to server side validation
    //         angular.forEach(result.errors, function(err, index){
    //           $scope.deleteAlerts.push({ type: 'danger', msg: err});
    //         });
    //       }
    //     }, function(x){
    //       $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting user: ' + x });
    //     });
    //   }
    // };

    $scope.phDetail = phDetail;
    console.log($scope.phDetail);
  }
]);
angular.module('admin.purchase-history', [
  'admin.purchase-history.all',
  'admin.purchase-history.single'
]);
angular.module('admin.statuses.detail', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'ui.bootstrap']);
angular.module('admin.statuses.detail').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/statuses/:id', {
      templateUrl: 'admin/statuses/admin-status.tpl.html',
      controller: 'AdminStatusesDetailCtrl',
      title: 'Statuses / Details',
      resolve: {
        status: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              if(id){
                return adminResource.findStatus(id);
              }else{
                redirectUrl = '/admin/statuses';
                return $q.reject();
              }
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.statuses.detail').controller('AdminStatusesDetailCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'status',
  function($scope, $route, $location, $log, utility, adminResource, data) {
    // local vars
    var deserializeData = function(data){
      $scope.status = data;
    };
    var closeAlert = function(alert, ind){
      alert.splice(ind, 1);
    };
    //$scope vars
    $scope.detailAlerts = [];
    $scope.deleteAlerts = [];
    $scope.canSave = utility.canSave;
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.closeDetailAlert = function(ind){
      closeAlert($scope.detailAlerts, ind);
    };
    $scope.closeDeleteAlert = function(ind){
      closeAlert($scope.deleteAlerts, ind);
    };
    $scope.update = function(){
      $scope.detailAlerts = [];
      var data = {
        name: $scope.status.name,
        pivot: $scope.status.pivot
      };
      adminResource.updateStatus($scope.status._id, data).then(function(result){
        if(result.success){
          deserializeData(result.status);
          $scope.detailAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
        }else{
          angular.forEach(result.errors, function(err, index){
            $scope.detailAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        $scope.detailAlerts.push({ type: 'danger', msg: 'Error updating status: ' + x });
      });
    };
    $scope.deleteStatus = function(){
      $scope.deleteAlerts =[];
      if(confirm('Are you sure?')){
        adminResource.deleteStatus($scope.status._id).then(function(result){
          if(result.success){
            //redirect to admin statuses index page
            $location.path('/admin/statuses');
          }else{
            //error due to server side validation
            angular.forEach(result.errors, function(err, index){
              $scope.deleteAlerts.push({ type: 'danger', msg: err});
            });
          }
        }, function(x){
          $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting status: ' + x });
        });
      }
    };

    //initialize
    deserializeData(data);
  }
]);
angular.module('admin.statuses.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.statuses.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/statuses', {
      templateUrl: 'admin/statuses/admin-statuses.tpl.html',
      controller: 'StatusesIndexCtrl',
      title: 'Manage Statuses',
      resolve: {
        statuses: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findStatuses($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.statuses.index').controller('StatusesIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'statuses',
  function($scope, $route, $location, $log, utility, adminResource, data){
    // local var
    var deserializeData = function(data){
      $scope.items = data.items;
      $scope.pages = data.pages;
      $scope.filters = data.filters;
      $scope.statuses = data.data;
    };

    var fetchStatuses = function(){
      adminResource.findStatuses($scope.filters).then(function(data){
        deserializeData(data);

        //update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchStatuses();
    };
    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchStatuses();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchStatuses();
    };
    $scope.addStatus = function(){
      adminResource.addStatus($scope.add).then(function(data){
        $scope.add = {};
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.add = {};
        $log.error(e);
      });
    };

    // $scope vars
    //select elements and their associating options
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "name \u25B2", value: "name"},
      {label: "name \u25BC", value: "-name"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

    //initialize $scope variables
    deserializeData(data);
  }
]);
angular.module('admin.statuses', [
  'admin.statuses.index',
  'admin.statuses.detail'
]);
angular.module('admin.users.detail', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'directives.serverError', 'ui.bootstrap']);
angular.module('admin.users.detail').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/users/:id', {
      templateUrl: 'admin/users/admin-user.tpl.html',
      controller: 'UsersDetailCtrl',
      title: 'Users / Details',
      resolve: {
        user: ['$q', '$route', '$location', 'securityAuthorization', 'adminResource', function($q, $route, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              var id = $route.current.params.id || '';
              if(id){
                return adminResource.findUser(id);
              }else{
                redirectUrl = '/admin/users';
                return $q.reject();
              }
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('admin.users.detail').controller('UsersDetailCtrl', ['$scope', '$route', '$location', 'utility', 'adminResource', 'user',
  function($scope, $route, $location, utility, adminResource, user) {
    // local vars
    var closeAlert = function(alert, ind){
      alert.splice(ind, 1);
    };
    var link = function(type){
      $scope.roleAlerts = [];
      var resource, data;
      if(type === 'admin'){ //linkAdmin
        resource = adminResource.linkAdmin;
        data = { newAdminId: $scope.role.newAdminId };
      } else{ //linkAccount
        resource = adminResource.linkAccount;
        data = { newAccountId: $scope.role.newAccountId };
      }
      resource($scope.user._id, data).then(function (result) {
        $scope.role = {};
        $scope.roleForm.$setPristine();
        if (result.success) {
          $scope.user = result.user; //update $scope user model
        } else {
          angular.forEach(result.errors, function (err, index) {
            $scope.roleAlerts.push({type: 'danger', msg: err});
          });
        }
      }, function (x) {
        $scope.roleAlerts.push({
          type: 'danger',
          msg: 'Error linking ' + type + ': ' + x
        });
      });
    };
    var unlink = function(type){
      $scope.roleAlerts = [];
      var resource = type === 'admin'? adminResource.unlinkAdmin: adminResource.unlinkAccount;
      if(confirm('Are you sure?')){
        resource($scope.user._id).then(function(result){
          if(result.success){
            $scope.user = result.user; //update $scope user model
          }else{
            angular.forEach(result.errors, function(err, index){
              $scope.roleAlerts.push({ type: 'danger', msg: err });
            });
          }
        }, function(x){
          $scope.roleAlerts.push({
            type: 'danger',
            msg: 'Error unlinking ' + type + ': '  + x
          });
        });
      }
    };

    // $scope vars
    $scope.role = {};
    $scope.identityAlerts = [];
    $scope.passwordAlerts = [];
    $scope.roleAlerts = [];
    $scope.deleteAlerts = [];
    $scope.errfor = {};
    $scope.isActives = ["yes", "no"];
    $scope.canSave = utility.canSave;
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.closeIdentityAlert = function(ind){
      closeAlert($scope.identityAlerts, ind);
    };
    $scope.closePasswordAlert = function(ind){
      closeAlert($scope.passwordAlerts, ind);
    };
    $scope.closeRoleAlert = function(ind){
      closeAlert($scope.roleAlerts, ind);
    };
    $scope.closeDeleteAlert = function(ind){
      closeAlert($scope.deleteAlerts, ind);
    };
    $scope.updateIdentity = function(){
      var data = {
        username: $scope.user.username,
        email: $scope.user.email
      };
      if($scope.user.isActive){
        data['isActive'] = $scope.user.isActive;
      }
      $scope.identityAlerts = [];
      adminResource.updateUser($scope.user._id, data).then(function(result){
        if(result.success){
          $scope.user = result.user; //update $scope user model
          $scope.identityAlerts.push({ type: 'info', msg: 'Changes have been saved.'});
        }else{
          $scope.errfor = result.errfor;
          angular.forEach(result.errfor, function(err, field){
            $scope.identityForm[field].$setValidity('server', false);
          });
          angular.forEach(result.errors, function(err, index){
            $scope.identityAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        $scope.identityAlerts.push({
          type: 'danger',
          msg: 'Error updating user identity: ' + x
        });
      });
    };
    $scope.unlinkAdmin = function(){
      unlink('admin');
    };
    $scope.linkAdmin = function(){
      link('admin');
    };
    $scope.unlinkAccount = function(){
      unlink('account');
    };
    $scope.linkAccount = function(){
      link('account');
    };
    $scope.setPassword = function(){
      $scope.passwordAlerts = [];
      adminResource.setPassword($scope.user._id, $scope.pass).then(function(result){
        $scope.pass = {};
        $scope.passwordForm.$setPristine();
        if(result.success){
          $scope.user = result.user; //update $scope user model (why password hash is sent to front-end?)
          $scope.passwordAlerts.push({ type: 'info', msg: 'A new password has been set.' });
        }else{
          //error due to server side validation
          angular.forEach(result.errors, function(err, index){
            $scope.passwordAlerts.push({ type: 'danger', msg: err});
          });
        }
      }, function(x){
        $scope.passwordAlerts.push({ type: 'danger', msg: 'Error updating password: ' + x });
      });
    };
    $scope.deleteUser = function(){
      $scope.deleteAlerts =[];
      if(confirm('Are you sure?')){
        adminResource.deleteUser($scope.user._id).then(function(result){
          if(result.success){
            // redirect to admin users index page
            $location.path('/admin/users');
          }else{
            //error due to server side validation
            angular.forEach(result.errors, function(err, index){
              $scope.deleteAlerts.push({ type: 'danger', msg: err});
            });
          }
        }, function(x){
          $scope.deleteAlerts.push({ type: 'danger', msg: 'Error deleting user: ' + x });
        });
      }
    };
    //initialize
    $scope.user = user; //from resolved data
    $scope.user.isActive = $scope.user.isActive || null;
  }
]);
angular.module('admin.users.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
angular.module('admin.users.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/users', {
      templateUrl: 'admin/users/admin-users.tpl.html',
      controller: 'UsersIndexCtrl',
      title: 'Manage Users',
      resolve: {
        users: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findUsers($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }],
        accounts: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(function(){
              //handles url with query(search) parameter
              return adminResource.findAccounts($location.search());
            }, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/account';
              $location.search({});
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    });
}]);
angular.module('admin.users.index').controller('UsersIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'users', 'accounts',
   function($scope, $route, $location, $log, utility, adminResource, usersData, accountsData){
    // local var
    var deserializeData = function(data){
      var results = data.results;
      $scope.statuses = data.statuses;
      $scope.items = results.items;
      $scope.pages = results.pages;
      $scope.filters = results.filters;
      $scope.accounts = results.data;
      $scope.numberOfCustomers=0;

      $scope.accounts.forEach(function(account) {
        $scope.numberOfCustomers++;
        account.purchaseAmount = 0;
        var phlog = account.purchaseHistoryLog;

        for(var ph in phlog){
          adminResource.findPH(phlog[ph]).then(function(data){
            account.purchaseAmount+=data.cost.total;
          }, function(e){
            $log.error(e);
          });
        }
      });
    };

    var fetchAccounts = function(){
      adminResource.findAccounts($scope.filters).then(function(data){
        deserializeData(data);

        // update url in browser addr bar
        $location.search($scope.filters);
      }, function(e){
        $log.error(e);
      });
    };

    $scope.goToUser = function() {
        $scope.selected = this.user;
        $location.path('/admin/users/' + $scope.selected._id);
    };

    // $scope methods
    $scope.canSave = utility.canSave;
    $scope.formatTime = function(timestamp, replace){
      var res = moment(timestamp).from();
      return replace? res.replace('ago', replace): res;
    };
    $scope.filtersUpdated = function(){
      //reset pagination after filter(s) is updated
      $scope.filters.page = undefined;
      fetchAccounts();
    };
    $scope.prev = function(){
      $scope.filters.page = $scope.pages.prev;
      fetchAccounts();
    };
    $scope.next = function(){
      $scope.filters.page = $scope.pages.next;
      fetchAccounts();
    };
    $scope.addAccount = function(){
      adminResource.addAccount($scope.fullname).then(function(data){
        $scope.fullname = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.fullname = '';
        $log.error(e);
      });
    };

    // $scope vars
    //select elements and their associating options
    $scope.statuses = [];
    $scope.sorts = [
      {label: "id \u25B2", value: "_id"},
      {label: "id \u25BC", value: "-_id"},
      {label: "name \u25B2", value: "name"},
      {label: "name \u25BC", value: "-name"},
      {label: "company \u25B2", value: "company"},
      {label: "company \u25BC", value: "-company"}
    ];
    $scope.limits = [
      {label: "10 items", value: 10},
      {label: "20 items", value: 20},
      {label: "50 items", value: 50},
      {label: "100 items", value: 100}
    ];

    //initialize $scope variables
    deserializeData(accountsData);
  }

]);






// angular.module('admin.users.index', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource']);
// angular.module('admin.users.index').config(['$routeProvider', function($routeProvider){
//   $routeProvider
//     .when('/admin/users', {
//       templateUrl: 'admin/users/admin-users.tpl.html',
//       controller: 'UsersIndexCtrl',
//       title: 'Manage Users',
//       resolve: {
//         users: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
//           //get app stats only for admin-user, otherwise redirect to /account
//           var redirectUrl;
//           var promise = securityAuthorization.requireAdminUser()
//             .then(function(){
//               //handles url with query(search) parameter
//               return adminResource.findUsers($location.search());
//             }, function(reason){
//               //rejected either user is un-authorized or un-authenticated
//               redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
//               return $q.reject();
//             })
//             .catch(function(){
//               redirectUrl = redirectUrl || '/account';
//               $location.search({});
//               $location.path(redirectUrl);
//               return $q.reject();
//             });
//           return promise;
//         }],
//         accounts: ['$q', '$location', '$log', 'securityAuthorization', 'adminResource', function($q, $location, $log, securityAuthorization, adminResource){
//           //get app stats only for admin-user, otherwise redirect to /account
//           var redirectUrl;
//           var promise = securityAuthorization.requireAdminUser()
//             .then(function(){
//               //handles url with query(search) parameter
//               return adminResource.findAccounts($location.search());
//             }, function(reason){
//               //rejected either user is un-authorized or un-authenticated
//               redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
//               return $q.reject();
//             })
//             .catch(function(){
//               redirectUrl = redirectUrl || '/account';
//               $location.search({});
//               $location.path(redirectUrl);
//               return $q.reject();
//             });
//           return promise;
//         }]
//       },
//       reloadOnSearch: false
//     });
// }]);
// angular.module('admin.users.index').controller('UsersIndexCtrl', ['$scope', '$route', '$location', '$log', 'utility', 'adminResource', 'users', 'accounts',
//   function($scope, $route, $location, $log, utility, adminResource, users, accounts){
//     // local var
//     var deserializeData = function(users,){
//       $scope.items = data.items;
//       $scope.pages = data.pages;
//       $scope.filters = data.filters;
//       $scope.users = data.data;
//     };

//     $scope.goToUser = function() {
//         $scope.selected = this.user;
//         $location.path('/admin/users/' + $scope.selected._id);
//     };

//     var fetchUsers = function(){
//       adminResource.findUsers($scope.filters).then(function(data){
//         deserializeData(data);

//         // update url in browser addr bar
//         $location.search($scope.filters);
//       }, function(e){
//         $log.error(e);
//       });
//     };

//     // $scope methods
//     $scope.canSave = utility.canSave;
//     $scope.filtersUpdated = function(){
//       //reset pagination after filter(s) is updated
//       $scope.filters.page = undefined;
//       fetchUsers();
//     };
//     $scope.prev = function(){
//       $scope.filters.page = $scope.pages.prev;
//       fetchUsers();
//     };
//     $scope.next = function(){
//       $scope.filters.page = $scope.pages.next;
//       fetchUsers();
//     };
//     $scope.addUser = function(){
//       adminResource.addUser($scope.username).then(function(data){
//         $scope.username = '';
//         if(data.success){
//           $route.reload();
//         }else if (data.errors && data.errors.length > 0){
//           alert(data.errors[0]);
//         }else {
//           alert('unknown error.');
//         }
//       }, function(e){
//         $scope.username = '';
//         $log.error(e);
//       });
//     };

//     // $scope vars
//     //select elements and their associating options
//     $scope.roles = [{label: "any", value: ""}, {label: "admin", value: "admin"}, {label: "account", value: "account"}];
//     $scope.isActives =[{label: "either", value: ""}, {label: "yes", value: "yes"}, {label: "no", value: "no"}];
//     $scope.sorts = [
//       {label: "id \u25B2", value: "_id"},
//       {label: "id \u25BC", value: "-_id"},
//       {label: "username \u25B2", value: "username"},
//       {label: "username \u25BC", value: "-username"},
//       {label: "email \u25B2", value: "email"},
//       {label: "email \u25BC", value: "-email"}
//     ];
//     $scope.limits = [
//       {label: "10 items", value: 10},
//       {label: "20 items", value: 20},
//       {label: "50 items", value: 50},
//       {label: "100 items", value: 100}
//     ];

//     //initialize $scope variables
//     deserializeData(users);
//     deserializeData(users);
//   }
// ]);
angular.module('admin.users', [
  'admin.users.index',
  'admin.users.detail'
]);
angular.module('app', [
  'ngRoute',
  'config',
  'base',
  'signup',
  'login',
  'account',
  'admin',
  'services.i18nNotifications',
  'services.httpRequestTracker',
  'services.products',
  'security',
  'templates.app',
  'templates.common',
  'pricing',
  'hl.sticky',
  'ui.bootstrap'
  ]);

angular.module('app').config(['$httpProvider', 'XSRF_COOKIE_NAME', function($httpProvider, XSRF_COOKIE_NAME){
  $httpProvider.defaults.xsrfCookieName = XSRF_COOKIE_NAME;
}]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
  .when('/', {
    templateUrl: 'main.tpl.html',
    controller: 'AppCtrl'
  })
  .when('/contact', {
    templateUrl: 'contact.tpl.html',
    controller: 'ContactCtrl',
    title: 'Contact Us'
  })
  .when('/about', {
    templateUrl: 'about.tpl.html',
    title: 'About Us'
  })
  .when('/specs', {
    templateUrl: 'specs.tpl.html',
    controller: 'SpecsCtrl',
    title: 'SmartBox Options'
  })
  .otherwise({
    templateUrl: '404.tpl.html',
    title: 'Page Not Found'
  });
}]);

angular.module('app').run(['$location', '$window', '$rootScope', 'security', 'accountResource', function($location, $window, $rootScope, security, accountResource) {
  // Get the current user when the application starts
  // (in case they are still logged in from a previous session)
  security.requestCurrentUser();

  // $rootScope.$on('$stateChangeSuccess', function() {
  //   document.body.scrollTop = document.documentElement.scrollTop = 0;
  // });

  $rootScope.$on('$routeChangeStart', function(e, toState) {
    if($location.url() == '/'){
      accountResource.addHomePageView();
    }
    if($location.path() == '/pricing/checkout'){
      accountResource.addCartView();
    }
    if($location.path() == '/account/checkout'){
      accountResource.addCartView();
    }

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

  // add a listener to $routeChangeSuccess
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    $rootScope.title = current.$$route && current.$$route.title? current.$$route.title: 'SafeConnect Solar';
  });
}]);

angular.module('app').controller('AppCtrl', ['$scope', 'i18nNotifications', 'localizedMessages', function($scope, i18nNotifications, localizedMessages) {


  $scope.notifications = i18nNotifications;

  $scope.removeNotification = function (notification) {
    i18nNotifications.remove(notification);
  };

  $scope.$on('$routeChangeError', function(event, current, previous, rejection){
    i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'error', {}, {rejection: rejection});
  });
  
}]);


angular.module('app').directive('slideit', function () {    
  return {
    link: function (scope, element, attrs) {          
      $(element).nivoSlider();
    }
  }
});

angular.module('app').controller('OwlCtrl', ['$scope',
  function($scope){
    $scope.products = [
    {
      "id": 1,
      "type": "SmartBox",
      "title": "SmartBox",
      "image": "/img/SmartBox1.png",
      "price": 25
    },
    {
      "id": 2,
      "title": "SmartBox",
      "type": "SmartBox",
      "image": "/img/SmartBox4.png",
      "price": 50
    },
    {
      "id": 3,
      "title": "SmartBox",
      "type": "SmartBox",
      "image": "/img/SmartBox3.png",
      "price": 80
    },
    {
      "id": 4,
      "type": "Cabling",
      "title": "Cabling",
      "image": "/img/SmartBox2.png",
      "price": 25
    },
    {
      "id": 5,
      "type": "Cabling",
      "title": "Cabling",
      "image": "/img/projects/project-1.jpg",
      "price": 25
    },
    {
      "id": 6,
      "title": "Cabling",
      "type": "Cabling",
      "image": "/img/projects/project-1.jpg",
      "price": 8
    },
    {
      "id": 7,
      "title": "Adapter",
      "type": "Adapter",
      "image": "/img/projects/project-1.jpg",
      "price": 2
    },
    {
      "id": 8,
      "title": "Adapter",
      "type": "Adapter",
      "image": "/img/projects/project-1.jpg",
      "price": 2
    }
    ];
    $scope.setActive = function(id) {
      $scope.products[id].active=true;
    }
  }
  ]);




angular.module('base',['ngRoute', 'security', 'services.utility', 'services.accountResource', 'services.adminResource', 'ui.bootstrap', 'ngMap']);
angular.module('base').controller('HeaderCtrl', ['$scope', '$location', 'security', 'accountResource',
  function ($scope, $location, security, restResource) {
    $scope.isAuthenticated = function(){
      return security.isAuthenticated();
    };
    $scope.getName = function(){
      return restResource.getAccountDetails().then(function(data){
        $scope.name = data;
      });
      console.log(name);
    };
    $scope.isAdmin = function(){
      if($location.path().indexOf('/admin') === -1){
        return false;
      }else{
        return security.isAdmin();
      }
    };
    $scope.logout = function(){
      return security.logout();
    };
    $scope.isActive = function(viewLocation){
      return $location.path() === viewLocation;
    };
  }
]);
angular.module('base').controller('SidebarCtrl', ['$scope', '$location', 'security', 'accountResource',
  function ($scope, $location, security, restResource) {
    $scope.isAuthenticated = function(){
      return security.isAuthenticated();
    };
    $scope.isAdmin = function(){
      if($location.path().indexOf('/admin') === -1){
        return false;
      }else{
        return security.isAdmin();
      }
    };
    $scope.logout = function(){
      return security.logout();
    };
    $scope.isActive = function(viewLocation){
      return $location.path() === viewLocation;
    };
  }
]);
angular.module('base').controller('AdminHeaderCtrl' ,['$scope', 'adminResource', 'accountResource', 'accountInfo', 'security',
  function($scope, adminResource, restResource, accountInfo, security){

    var getName = function(){
      return restResource.getAccountDetails().then(function(data){
        $scope.name = data.account.name.full;
      });
    };

    var clearSearchDropdown = function(){
      $scope.resultIsOpen = false;
      $scope.result = {};
    };
    var showSearchDropdown = function(data){
      $scope.result = data;
      $scope.resultIsOpen = true;
    };

    $scope.showDropdownHeader = function(header){
      var users = $scope.result.users;
      var accounts = $scope.result.accounts;
      var administrators = $scope.result.administrators;
      if(!(users && accounts && administrators)) {
        return false;
      }
      switch(header){
        case 'noDocsMatched':
          return users.length === 0 && accounts.length === 0 && administrators.length === 0;
        case 'Users':
          return users.length !== 0;
        case 'Accounts':
          return accounts.length !== 0;
        case 'Administrators':
          return administrators.length !== 0;
        default:
          return false;
      }
    };

    $scope.update = function(){
      clearSearchDropdown();
      if ($scope.query) {
        // no need to search backend if query string is empty
        adminResource.search($scope.query).then(function (data) {
          showSearchDropdown(data);
        }, function (e) {
          clearSearchDropdown();
        });
      }
    };

    $scope.closeAdminMenu = function(){
      $scope.adminMenuCollapsed = true;
    };

    $scope.toggleAdminMenu = function(){
      $scope.adminMenuCollapsed = !$scope.adminMenuCollapsed;
    };

    // set $scope vars initial value
    $scope.resultIsOpen = false;
    $scope.query = "";
    $scope.result = {};
    $scope.adminMenuCollapsed = true;
    var accountInformation = accountInfo;
    var account = restResource.getAccountDetails.user;
    getName();

  }
]);
angular.module('base').controller('FooterCtrl', ['$scope', 'security',
  function($scope, security){
    $scope.isAuthenticated = function(){
      return security.isAuthenticated();
    };
    //$scope.isAdmin = security.isAdmin;
    $scope.logout = function(){
      return security.logout();
    };
  }
]);

angular.module('base').controller('ContactCtrl', ['$scope', 'utility', 'accountResource', 'NgMap',
  function($scope, utility, restResource, NgMap){
    // local var
    var successAlert = { type: 'success', msg: 'We have received your message. Thank you.' };
    var errorAlert = { type: 'warning', msg: 'Error submitting your message. Please try again.' };

    // model def
    $scope.msg = {};
    $scope.alerts = [];

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      var msg = $scope.msg;
      $scope.alerts = [];
      restResource.sendMessage({
        name: msg.name,
        email: msg.email,
        message: msg.message
      }).then(function(data){
        $scope.msgForm.$setPristine();
        $scope.msg = {};
        if(data.success){
          $scope.alerts.push(successAlert);
        }else{
          $scope.alerts.push(errorAlert);
        }
      }, function(x){
        $scope.msgForm.$setPristine();
        $scope.msg = {};
        $scope.alerts.push(errorAlert);
      });
    };
  
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

  }
]);

angular.module('base').controller('SpecsCtrl', ['$scope', 'utility', 'accountResource',
  function($scope, utility, restResource){
    $scope.tab = 1;

    $scope.setTab = function(tab){
      $scope.tab = tab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
  }
]);

angular.module('base').factory('accountInfo', ['$q', '$location', 'securityAuthorization', 'accountResource' ,
  function($q, $location, securityAuthorization, accountResource){

  var redirectUrl;
      var promise = securityAuthorization.requireVerifiedUser()
        .then(accountResource.getAccountDetails, function(reason){
          //rejected either user is unverified or un-authenticated
          redirectUrl = reason === 'unverified-client'? '/account/verification': '/login';
          return $q.reject();
        })
        .catch(function(){
          redirectUrl = redirectUrl || '/account';
          $location.path(redirectUrl);
          return $q.reject();
        });
      return promise;

}]);


//----- angular app configuration-----
angular.module('config', []);
angular.module('config')
  .constant('ENABLE_SOCIAL', {
    facebook: false,
    google: false
  })
  .constant('REQUIRE_ACCOUNT_VERIFICATION', false)
;
//----- end of configuration -----
angular.module('config')
  .constant('XSRF_COOKIE_NAME', '_csrfToken')
  .constant('I18N.MESSAGES', {
    'errors.route.changeError':'Route change error',
    'crud.user.save.success':"A user with id '{{id}}' was saved successfully.",
    'crud.user.remove.success':"A user with id '{{id}}' was removed successfully.",
    'crud.user.remove.error':"Something went wrong when removing user with id '{{id}}'.",
    'crud.user.save.error':"Something went wrong when saving a user...",
    'crud.project.save.success':"A project with id '{{id}}' was saved successfully.",
    'crud.project.remove.success':"A project with id '{{id}}' was removed successfully.",
    'crud.project.save.error':"Something went wrong when saving a project...",
    'login.reason.notAuthorized':"You do not have the necessary access permissions.  Do you want to login as someone else?",
    'login.reason.notAuthenticated':"You must be logged in to access this part of the application.",
    'login.error.invalidCredentials': "Login failed.  Please check your credentials and try again.",
    'login.error.serverError': "There was a problem with authenticating: {{exception}}."
  })
;
angular.module('config').config(['$provide', 'ENABLE_SOCIAL', function($provide, ENABLE_SOCIAL){
  var setting = {
    'facebook': {
      text: 'Facebook',
      icon: 'fa-facebook-square',
      login: '/login/facebook',
      connect: '/account/settings/facebook/'
    },
    'google': {
      text: 'Google',
      icon: 'fa-google-plus-square',
      login: '/login/google',
      connect: '/account/settings/google/'
    }
  };
  var social = {};
  angular.forEach(ENABLE_SOCIAL, function(enable, key){
    if(enable){
      social[key] = setting[key];
    }
  });

  // programmatically set constant, 'SOCIAL', in config module
  $provide.constant('SOCIAL', social);
}]);
angular.module('login.forgot', ['security.service', 'services.utility', 'ui.bootstrap']);
angular.module('login.forgot').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login/forgot', {
      templateUrl: 'login/forgot/login-forgot.tpl.html',
      controller: 'LoginForgotCtrl',
      title: 'Forgot Your Password?'
    });
}]);
angular.module('login.forgot').controller('LoginForgotCtrl', [ '$scope', '$location', '$log', 'security', 'utility',
  function($scope, $location, $log, security, utility){
    // local variable
    var resetSuccess = function(data){
      $scope.loginForgotForm.$setPristine();
      $scope.user = {};
      if(data.success){
        $scope.alerts.push({
          type: 'info',
          msg: 'An email will be sent to you with instructions on how to reset your password.'
        });
      }else{
        angular.forEach(data.errors, function(err, index){
          $scope.alerts.push({
            type: 'danger',
            msg: err
          });
        });
      }
    };
    var resetError = function(){
      $scope.alerts.push({
        type: 'danger',
        msg: 'Error resetting your account. Please try again.'
      });
    };
    // model def
    $scope.user = {};
    $scope.alerts = [];

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      security.loginForgot($scope.user).then(resetSuccess, resetError);
    };
  }]);

angular.module('login', [
  'login.index',
  'login.forgot',
  'login.reset',
  'login.social'
]);
angular.module('login.index', ['ngRoute', 'config', 'security.service', 'directives.serverError', 'services.utility', 'ui.bootstrap']);
angular.module('login.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl: 'login/login.tpl.html',
      controller: 'LoginCtrl',
      title: 'Login',
      resolve: {
        UnauthenticatedUser: ['$q', '$location', 'securityAuthorization', function($q, $location, securityAuthorization){
          var promise = securityAuthorization.requireUnauthenticatedUser()
            .catch(function(){
              if(securityAuthorization.requireAdminUser())
                $location.path('/admin');
                else
                $location.path('/account');
              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('login.index').controller('LoginCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'SOCIAL',
  function($scope, $location, $log, security, utility, SOCIAL){
    // local variable
    var loginSuccess = function(data){
      if(data.success){
        //account/user created, redirect...
        var url = data.defaultReturnUrl || '/';
        return $location.path(url);
      }else{
        //error due to server side validation
        $scope.errfor = data.errfor;
        angular.forEach(data.errfor, function(err, field){
          $scope.loginForm[field].$setValidity('server', false);
        });
        angular.forEach(data.errors, function(err, index){
          $scope.alerts.push({
            type: 'danger',
            msg: err
          });
        });
      }
    };
    var loginError = function(){
      $scope.alerts.push({
        type: 'danger',
        msg: 'Error logging you in, Please try again'
      });
    };
    // model def
    $scope.user = {};
    $scope.alerts = [];
    $scope.errfor = {};
    $scope.social = angular.equals({}, SOCIAL)? null: SOCIAL;

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      $scope.alerts = [];
      security.login($scope.user.username, $scope.user.password).then(loginSuccess, loginError);
    };
    $scope.signUp = function(){
      $location.path('/signup');
    }
  }]);

angular.module('login.reset', ['security.service', 'services.utility', 'ui.bootstrap']);
angular.module('login.reset').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login/reset', {
      templateUrl: 'login/reset/login-reset.tpl.html',
      controller: 'LoginResetCtrl',
      title: 'Reset Your Password'
    })
    .when('/login/reset/:email/:token', {
      templateUrl: 'login/reset/login-reset.tpl.html',
      controller: 'LoginResetCtrl'
    });
}]);
angular.module('login.reset').controller('LoginResetCtrl', [ '$scope', '$location', '$routeParams', '$log', 'security', 'utility',
  function($scope, $location, $routeParams, $log, security, utility){
    // local variable
    var warningAlert = {
      type: 'warning',
      msg:  'You do not have a valid reset request.'
    };
    var successAlert = {
      type: 'info',
      msg:  'Your password has been reset. Please login to confirm.'
    };
    var resetSuccess = function(data){
      $scope.resetForm.$setPristine();
      $scope.user = {};
      if(data.success){
        $scope.success = true;
        $scope.alerts.push(successAlert);
      }else{
        angular.forEach(data.errors, function(err, index){
          $scope.alerts.push({
            type: 'danger',
            msg: err
          });
        });
      }
    };
    var resetError = function(){
      $scope.alerts.push({
        type: 'danger',
        msg: 'Error resetting your password. Please try again.'
      });
    };
    // model def
    $scope.user = {};
    $scope.alerts = [];
    $scope.email = $routeParams.email;
    $scope.id = $routeParams.token;
    $scope.success = false;

    //initial behavior
    if(!($scope.email && $scope.id)){
      $scope.alerts.push(warningAlert);
    }

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      security.loginReset($scope.id, $scope.email, $scope.user).then(resetSuccess, resetError);
    };
  }]);

angular.module('login.social', [
  'login.social.google',
  'login.social.facebook'
]);

angular.module('login.social.facebook', ['security.service']);
angular.module('login.social.facebook').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login/facebook/callback', {
      resolve: {
        verify: ['$log', '$q', '$location', '$route', 'security', function($log, $q, $location, $route, security){
          var redirectUrl;
          var code = $route.current.params.code || '';
          var promise = security.socialLogin('facebook', code)
            .then(function(data){
              if(data.success) {
                // redirectUrl = data.defaultReturnUrl || '/account'
                redirectUrl = '/account';
              }
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/login';
              $location.search({}); //remove search params added by passport/facebook
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    })
  ;
}]);

angular.module('login.social.google', ['security.service']);
angular.module('login.social.google').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login/google/callback', {
      resolve: {
        verify: ['$log', '$q', '$location', '$route', 'security', function($log, $q, $location, $route, security){
          var redirectUrl;
          var code = $route.current.params.code || '';
          var promise = security.socialLogin('google', code)
            .then(function(data){
              if(data.success) {
                // redirectUrl = data.defaultReturnUrl || '/account'
                redirectUrl = '/account';
              }
              return $q.reject();
            })
            .catch(function(){
              redirectUrl = redirectUrl || '/login';
              $location.search({}); //remove search params added by passport/google
              $location.path(redirectUrl);
              return $q.reject();
            });
          return promise;
        }]
      },
      reloadOnSearch: false
    })
  ;
}]);

Stripe.setPublishableKey('pk_test_1Ol0KXlUc2OASvEVg1JwhHp2');

angular.module('pricing.checkout', ['ngRoute', 'angularPayments', 'services.cart', 'ui.bootstrap', 'services.utility']);
angular.module('pricing.checkout').config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/pricing/checkout', {
		templateUrl: 'pricing/checkout/checkout.tpl.html',
		controller: 'CheckoutCtrl',
		title: 'Checkout'
	});
}]);
angular.module('pricing.checkout').controller('CheckoutCtrl', ['$scope','$routeParams', 'cartService', function ($scope, $routeParams, cartService) {

	$scope.cart = cartService;
	$scope.totalAmount = cartService.getCartPrice();
  $scope.billingAddress = {};
  $scope.billingChecked = false;
  $scope.c = $scope.cart.getCartProducts();

  console.log($scope.c);

  $scope.productinfo = [];


  for(var i = 0; i<$scope.c.length; i++){
    console.log($scope.c[i]);

    var v = {
     product: $scope.c[i].product,
     quantity: $scope.c[i].quantity
   };

   $scope.productinfo.push(v);
 }


 $scope.mailingAddress =
 {
  name : {
    first: "",
    last: ""
  },
  company : "",
  addressLine1 : "",
  addressLine2 : "",
  city : "",
  state : "",
  zip : "",
  country : "",
  type : 'mailing'
}


    //billing address
    $scope.checkBillAddress = function(){
      if($scope.billingChecked){
        $scope.billingAddress = $scope.mailingAddress;
      } else {
        $scope.billingAddress =
        {
          name : {
            first: "",
            last: ""
          },
          company : "",
          addressLine1 : "",
          addressLine2 : "",
          city : "",
          state : "",
          zip : "",
          country : "",
          type : 'billing'
        };
      }
    }

    $scope.purchaseInformation = {
      orderNumber: 22,
      product: $scope.productinfo,
      //billingAddress: $scope.billingAddress,
      //mailingAddress: $scope.mailingAddress,
      orderDate: new Date(),
      company: $scope.mailingAddress.company,
      //paymentMethod: req.body.paymentMethod,
      cost: {
        raw: $scope.cart.getCartPrice,
        //shipping: req.body.cost.shipping,
        //tax: req.body.cost.tax,
        total: $scope.cart.getCartPrice
      }
    };


    $scope.stripeSubmit = function(status, response){
      if(response.error) {
          // error
        } else {
        	console.log("success");
          token = response.id;
          //$scope.submitAddress();
        }
      }




    //   $scope.submitAddress = function(){

    //     $scope.alerts.address = [];
    //     restResource.setMailingAddress($scope.mailingAddress).then(function(data){
    //       if(data.success){
    //         $scope.alerts.address.push({
    //           type: 'success',
    //           msg: 'User identity is updated.'
    //         });
    //         $scope.submitPurchaseHistory();
    //       }else{
    //       //error due to server side validation
    //       $scope.errfor = data.errfor;
    //       angular.forEach(data.errfor, function(err, field){
    //         $scope.addressForm[field].$setValidity('server', false);
    //       });
    //       angular.forEach(data.errors, function(err, index){
    //         $scope.alerts.address.push({
    //           type: 'danger',
    //           msg: err
    //         });
    //       });
    //     }
    //   }, function(x){
    //     $scope.alerts.address.push({
    //       type: 'danger',
    //       msg: 'Error updating user identity: ' + x
    //     });
    //   });
    //   };

    //   $scope.submitPurchaseHistory = function(){
    //     $scope.alerts.purchasehistory = [];
    //     restResource.newGuestPurchase($scope.purchaseInformation).then(function(data){
    //       if(data.success){
    //         $scope.alerts.purchasehistory.push({
    //           type: 'success',
    //           msg: 'User identity is updated.'
    //         });
    //         $location.path('/account/checkout/summary');
    //       }else{
    //       //error due to server side validation
    //       $scope.errfor = data.errfor;
    //       angular.forEach(data.errors, function(err, index){
    //         $scope.alerts.address.push({
    //           type: 'danger',
    //           msg: err
    //         });
    //       });
    //     }
    //   }, function(x){
    //     $scope.alerts.address.push({
    //       type: 'danger',
    //       msg: 'Error updating user identity: ' + x
    //     });
    //   });
    //   };


    //  $scope.errfor = {}; //for identity server-side validation
    //  $scope.alerts = {
    //   detail: [], address: [], pass: []
    // };





    $scope.hideAlerts = function () {
      $scope.stripeError = null;
      $scope.stripeToken = null;
    };

	// var acc = document.getElementsByClassName("panel-heading");
	// var paneling = document.getElementsByClassName("panel-body");

	// var i;

	// for (i = 0; i < acc.length; i++) {
	// 	acc[i].onclick = function() {
	// 		this.classList.toggle("active");
	// 		var pan = paneling[i];
	// 		if (pan.style.maxHeight){
	// 			pan.style.maxHeight = null;
	// 		} else {
	// 			pan.style.maxHeight = pan.scrollHeight + "px";
	// 		} 
	// 	}
	// }


  var acc = document.getElementsByClassName("panel-heading");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var paneling = this.nextElementSibling;
      if (paneling.style.maxHeight){
        paneling.style.maxHeight = null;
      } else {
        paneling.style.maxHeight = paneling.scrollHeight + "px";
      } 
    }
  }

	// $scope.onSubmit = function () {
	// 	$scope.processing = true;
	// };

	// $scope.stripeCallback = function (code, result) {
	// 	$scope.processing = false;
	// 	$scope.hideAlerts();
	// 	if (result.error) {
	// 		$scope.stripeError = result.error.message;
	// 	} else {
	// 		$scope.stripeToken = result.id;
	// 	}
	// };

}]);
angular.module('pricing', [
  'pricing.index',
  'pricing.checkout',
  'pricing.information'
]);
angular.module('pricing.information', ['ngRoute', 'ui.bootstrap', 'services.products', 'services.utility', 'services.cart', 'services.utility', 'directives.serverError', 'security.service', 'security.authorization']);
angular.module('pricing.information').config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/pricing/information', {
		templateUrl: 'pricing/information/information.tpl.html',
		controller: 'InfoCtrl',
		title: 'Information',
		resolve: {
			productList: prodListService
		}
	});
}]);

angular.module('pricing.information').controller('InfoCtrl', ['$scope', '$modal', 'productService', 'productList', 'cartService', '$log', 'utility', 'security', '$location', '$anchorScroll',
	function ($scope, $modal, productService, productList, cartService, $log, utility, security, $location, $anchorScroll) {

		$scope.cart = cartService;

		$scope.products = productList;

		$scope.addToCart = function (product) {
			return cartService.addToCart(product);
			console.log($scope.cart);
		};

		$scope.removeFromCart = function (product) {
			return cartService.removeFromCart(product); 
		};

		$scope.getProductPrice = function (product) {
			return (product.price)*(product.quantity);
		};

		$scope.getCartPrice = function () {
			return cartService.getCartPrice(); 
		};

		$scope.clearCart = function (){
			console.log(cartService.getItemAmount());
			cartService.clearItemAmount();
			
			$scope.calculated=false;
			$scope.arr_to_fill = [0,0,0,0,0,0,0,0];
			$scope.cable2 =0;
			$scope.cable5 =0;
			$scope.cable8 =0;
			$scope.cable12 =0;
			$scope.cable20 = 0;
		};

		$scope.getItemAmount = function () {
			return cartService.getItemAmount();
		};

		$scope.addQty = function(product) {
			return cartService.addQty(product);
		}
		$scope.subtractQty = function(product) {
			return cartService.subtractQty(product);
		}

		$scope.AC_size_input;
		$scope.num_panels_input;
		$scope.d_length_input;
		$scope.d_length2_input=0;
		$scope.calculated = false;
		$scope.productList;
		$scope.acceptable_panels;
		$scope.bus_bar_rating;
		$scope.no_cart_bus_bar=false;
		$scope.no_cart_panels;

	//User entered information
	$scope.AC_size = 3.4;
	$scope.num_panels = 34; //1000 panel limit
	$scope.d_length = 26;
    //will need second desired lenght if 2 smart boxes

	//Database Parameters
	var c_lengths = [20,12,8,5,2];
	var c_lengths2 = [2,5,8,12,20];
	var sb_size = 3.8;

	// Hardcoded constants
	var buffer_constant = 4;
	var max_cable_length = 80; //100

	$scope.cableLabel1 = "Cable length (ft)";


	//Desired Results
	$scope.num_smartboxes = 0;
	$scope.num_connectors = 0;
	$scope.cable_segments = [];

	$scope.hover = false;


	//Smartbox Calculation
	if ($scope.AC_size > sb_size)
		$scope.num_smartboxes = 2;
	else
		$scope.num_smartboxes = 1;

	//Connector Calculation 
	$scope.num_connectors = $scope.num_panels;

	$scope.arr_to_fill = [0,0,0,0,0,0,0,0];
	$scope.cables = [];

	$scope.calculate_test = function(amount){
		console.log($scope.arr_to_fill);
		amount++;

		var count; 
		var count2; 
		var arr_pos = 0;
		console.log($scope.arr_to_fill);
			//for(count = 0; count<$scope.arr_to_fill.length; count++){
				while(1>0){
					console.log($scope.arr_to_fill);
					for(count = 0; count<5; count++){
						console.log($scope.arr_to_fill);
						$scope.arr_to_fill[arr_pos] = c_lengths2[count];
						console.log($scope.arr_to_fill);

						if ($scope.arr_to_fill.reduce(function(a, b) { return a + b; }, 0) >= amount){

							$scope.calculated = true;
							if($scope.AC_size_input>sb_size){
								$scope.addToCart($scope.products[0]);
								$scope.addToCart($scope.products[0]);
							} else{
								$scope.addToCart($scope.products[0]);
							}
							for(i = 0; i<$scope.arr_to_fill.length;i++){
								if($scope.arr_to_fill[i]!=0){
									for(n=0;n<$scope.products.length;n++){
										if($scope.products[n].length == $scope.arr_to_fill[i]){
											$scope.addToCart($scope.products[n]);
											$scope.cables[i] = $scope.arr_to_fill[i];
										}
									}
								}
							}
							for(m=0;m<$scope.num_panels_input;m++){
								$scope.addToCart($scope.products[4]);
							}

							console.log($scope.cart);
							return $scope.arr_to_fill;

						}
					} arr_pos++;

				}
			}

			$scope.cable2 =0;
			$scope.cable5 =0;
			$scope.cable8 =0;
			$scope.cable12 =0;
			$scope.cable20 =0;

			$scope.panels_check = function(value) {
			     $scope.acceptable_panels == value;
			}



			$scope.calculate = function(acceptable, amount, amount2){
				$scope.clearCart();


				//perfect these
				if($scope.bus_bar_rating==1){
					$scope.no_cart_bus_bar=true;
					$scope.calculated=false;
					return;
				}
				if(!($scope.AC_size_input>3.6)){
					amount2=0;
				}
				if($scope.AC_size_input>3.6 && $scope.bus_bar_rating!=3){
					$scope.no_cart_bus_bar=true;
					$scope.calculated=false;
					return;
				}
				// if(($scope.AC_size_input>3.6) && ($scope.d_length2_input==0)){
				// 	amount2 = amount;
				// }

				if($scope.acceptable_panels==1){
					$scope.no_cart_panels=true;
					$scope.calculated=false;
					return;
				} else {
					$scope.no_cart_panels=false;
				}


				var amount_copy = amount;


				if (amount== 18 || amount == 19 || (amount > 35 && amount < 40) || (amount > 53 && amount < 60) || (amount > 71 && amount < 80)){

					while (amount_copy>0){
						$scope.cable20++;
						amount_copy=amount_copy-20;
					}

				} else if (amount > 67 && amount < 72){
					$scope.cable20 = 3;
					$scope.cable12 = 1;

				} else if (amount > 64 && amount < 68){
					$scope.cable20 = 3;
					$scope.cable8 = 1;

				} else if (amount == 64){
					$scope.cable20 = 3;
					$scope.cable5 = 1;

				} else if (amount == 80){
					$scope.cable20 = 4;
					$scope.cable2 = 1;

				} else if (amount == 62 || amount == 63){
					$scope.cable20 = 2;
					$scope.cable12 = 2;

				} else if (amount == 60 || amount == 61){
					$scope.cable20 = 3;
					$scope.cable2 = 1;

				} else if (amount == 53){
					$scope.cable20 = 2;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 52){
					$scope.cable20 = 2;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 47 && amount < 52){
					$scope.cable20 = 2;
					$scope.cable12 = 1;

				} else if (amount > 48 || amount > 44){
					$scope.cable20 = 2;
					$scope.cable8 = 1;

				} else if (amount == 44){
					$scope.cable20 = 2;
					$scope.cable5 = 1;

				} else if (amount == 42 || amount == 43){
					$scope.cable20 = 1;
					$scope.cable12 = 2;

				} else if (amount == 41 || amount == 40){
					$scope.cable20 = 2;
					$scope.cable2 = 1;

				} else if (amount == 34 || amount == 35){
					$scope.cable20 = 1;
					$scope.cable8 = 2;

				} else if (amount == 33){
					$scope.cable20 = 1;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 32){
					$scope.cable20 = 1;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 28 && amount < 32){
					$scope.cable20 = 1;
					$scope.cable12 = 1;

				} else if (amount == 28){
					$scope.cable12 = 2;
					$scope.cable5 = 1;

				} else if (amount < 28 && amount > 24){
					$scope.cable20 = 1;
					$scope.cable8 = 1;

				} else if (amount == 24){
					$scope.cable20 = 1;
					$scope.cable5 = 1;

				} else if (amount == 22 || amount == 23){
					$scope.cable12 = 2;

				} else if (amount == 20 || amount == 21){
					$scope.cable20 = 1;
					$scope.cable2 = 1;

				} else if (amount == 17){
					$scope.cable8 = 2;
					$scope.cable2 = 1;

				} else if (amount == 16){
					$scope.cable12 = 1;
					$scope.cable5 = 1;

				} else if (amount == 14 || amount == 15){
					$scope.cable8 = 2;

				} else if (amount == 13){
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 12){
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount == 11 || amount == 10){
					$scope.cable12 = 1;

				} else if (amount == 9){
					$scope.cable8 = 1;
					$scope.cable2 = 1;

				} else if (amount == 8){
					$scope.cable5 = 1;
					$scope.cable2 = 2;

				} else if (amount == 7){
					$scope.cable8 = 1;

				} else if (amount == 6){
					$scope.cable5 = 1;
					$scope.cable2 = 1;

				} else if (amount == 5){
					$scope.cable2 = 3;

				} else if (amount == 4){
					$scope.cable5 = 1;

				} else {
					$scope.cable2 = 2;
				} 

				$scope.no_cart_panels=false;
				$scope.no_cart_bus_bar=false;
				$scope.calculated = true;

				if($scope.AC_size_input>sb_size){
					$scope.addToCart($scope.products[0]);
					$scope.addToCart($scope.products[0]);
				} else{
					$scope.addToCart($scope.products[0]);
				}

				for(m=0;m<$scope.num_panels_input;m++){
					$scope.addToCart($scope.products[4]);
				}

				while($scope.cable20>0){
					$scope.addToCart($scope.products[1]);
					$scope.cable20--;
				}
				while($scope.cable12>0){
					$scope.addToCart($scope.products[2]);
					$scope.cable12--;
				}
				while($scope.cable8>0){
					$scope.addToCart($scope.products[3]);
					$scope.cable8--;
				}
				while($scope.cable5>0){
					$scope.addToCart($scope.products[6]);
					$scope.cable5--;
				}
				while($scope.cable2>0){
					$scope.addToCart($scope.products[5]);
					$scope.cable2--;
				}


				if(amount2>0){
					$scope.calculate2(amount2);
				}

				console.log($scope.cart);
				return $scope.cart;

			}

			$scope.calculate2 = function(amount){

				var amount2 = amount;


				if (amount== 18 || amount == 19 || (amount > 35 && amount < 40) || (amount > 53 && amount < 60) || (amount > 71 && amount < 80)){

					while (amount2>0){
						$scope.cable20++;
						amount2=amount2-20;
					}

				} else if (amount > 67 && amount < 72){
					$scope.cable20 = 3;
					$scope.cable12 = 1;

				} else if (amount > 64 && amount < 68){
					$scope.cable20 = 3;
					$scope.cable8 = 1;

				} else if (amount == 64){
					$scope.cable20 = 3;
					$scope.cable5 = 1;

				} else if (amount == 80){
					$scope.cable20 = 4;
					$scope.cable2 = 1;

				} else if (amount == 62 || amount == 63){
					$scope.cable20 = 2;
					$scope.cable12 = 2;

				} else if (amount == 60 || amount == 61){
					$scope.cable20 = 3;
					$scope.cable2 = 1;

				} else if (amount == 53){
					$scope.cable20 = 2;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 52){
					$scope.cable20 = 2;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 47 && amount < 52){
					$scope.cable20 = 2;
					$scope.cable12 = 1;

				} else if (amount > 48 || amount > 44){
					$scope.cable20 = 2;
					$scope.cable8 = 1;

				} else if (amount == 44){
					$scope.cable20 = 2;
					$scope.cable5 = 1;

				} else if (amount == 42 || amount == 43){
					$scope.cable20 = 1;
					$scope.cable12 = 2;

				} else if (amount == 41 || amount == 40){
					$scope.cable20 = 2;
					$scope.cable2 = 1;

				} else if (amount == 34 || amount == 35){
					$scope.cable20 = 1;
					$scope.cable8 = 2;

				} else if (amount == 33){
					$scope.cable20 = 1;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 32){
					$scope.cable20 = 1;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 28 && amount < 32){
					$scope.cable20 = 1;
					$scope.cable12 = 1;

				} else if (amount == 28){
					$scope.cable12 = 2;
					$scope.cable5 = 1;

				} else if (amount < 28 && amount > 24){
					$scope.cable20 = 1;
					$scope.cable8 = 1;

				} else if (amount == 24){
					$scope.cable20 = 1;
					$scope.cable5 = 1;

				} else if (amount == 22 || amount == 23){
					$scope.cable12 = 2;

				} else if (amount == 20 || amount == 21){
					$scope.cable20 = 1;
					$scope.cable2 = 1;

				} else if (amount == 17){
					$scope.cable8 = 2;
					$scope.cable2 = 1;

				} else if (amount == 16){
					$scope.cable12 = 1;
					$scope.cable5 = 1;

				} else if (amount == 14 || amount == 15){
					$scope.cable8 = 2;

				} else if (amount == 13){
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 12){
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount == 11 || amount == 10){
					$scope.cable12 = 1;

				} else if (amount == 9){
					$scope.cable8 = 1;
					$scope.cable2 = 1;

				} else if (amount == 8){
					$scope.cable5 = 1;
					$scope.cable2 = 2;

				} else if (amount == 7){
					$scope.cable8 = 1;

				} else if (amount == 6){
					$scope.cable5 = 1;
					$scope.cable2 = 1;

				} else if (amount == 5){
					$scope.cable2 = 3;

				} else if (amount == 4){
					$scope.cable5 = 1;

				} else {
					$scope.cable2 = 2;
				} 


				while($scope.cable20>0){
					$scope.addToCart($scope.products[1]);
					$scope.cable20--;
				}
				while($scope.cable12>0){
					$scope.addToCart($scope.products[2]);
					$scope.cable12--;
				}
				while($scope.cable8>0){
					$scope.addToCart($scope.products[3]);
					$scope.cable8--;
				}
				while($scope.cable5>0){
					$scope.addToCart($scope.products[6]);
					$scope.cable5--;
				}
				while($scope.cable2>0){
					$scope.addToCart($scope.products[5]);
					$scope.cable2--;
				}


				console.log($scope.cart);
				
				return $scope.cart;

			}


			$scope.change = function(){
				if(!($scope.AC_size_input>3.6)){
					$scope.calculatingForm.d_length2_input.$setValidity("pos", true);
				}
			}

			$scope.checkout = function () {
				var total = $scope.getCartPrice;

				if(!security.isAuthenticated()){
					$modal.open({
						templateUrl: 'pricing/login-modal.tpl.html',
						controller: 'LoginOrGuestCtrl',
						resolve: {
							totalAmount: total
						}
					});
				}
				else {
					$location.path('/account/checkout/' + total);
				}
			};

			$scope.panelModal = function () {
				$modal.open({
					templateUrl: 'pricing/panel-modal.tpl.html',
					controller: 'PanelModalCtrl'
				});
			};


			$scope.greaterThan = function(prop, val){
				return function(item){
					return item[prop] > val;
				}
			}

			$scope.errfor = {}; 
			$scope.alerts = {
				calculating: []
			};

			// $scope.gotoBottom = function() {
		 //      // set the location.hash to the id of
		 //      // the element you wish to scroll to.
		 //      $location.hash('bottom');

		 //      // call $anchorScroll()
		 //      $anchorScroll();
		 //    };


	     // method def
	     $scope.hasError = utility.hasError;
	     $scope.showError = utility.showError;
	     $scope.canSave = utility.canSave;
	     $scope.closeAlert = function(key, ind){
	     	$scope.alerts[key].splice(ind, 1);
	     };

	 }]);

angular.module('pricing.information').controller('LoginOrGuestCtrl',
	function($scope, $location, $modalInstance, totalAmount){

		$scope.signin = function(){
			$location.path("/account/checkout/" + totalAmount);
			$modalInstance.dismiss('cancel');
		};
		$scope.guest = function(){
			$location.path("/pricing/checkout/" + totalAmount);
			$modalInstance.dismiss('cancel');
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	});

angular.module('pricing.information').controller('PanelModalCtrl',
	function($scope, $location, $modalInstance){


		$scope.sunproducts = [
		{
			"id": 1,
			"type": "SunPower",
			"title": "SunPower SPR-X19-240-BLK-B-AC",
			"image": "/img/SmartBox1.png",
			"price": 25
		},
		{
			"id": 2,
			"title": "SunPower SPR-X20_250-BLK-A-AC",
			"type": "SunPower",
			"image": "/img/SmartBox4.png",
			"price": 50
		},
		{
			"id": 3,
			"title": "SunPower SPR-X20-250-BLK-B-AC",
			"type": "SunPower",
			"image": "/img/SmartBox3.png",
			"price": 80
		},
		{
			"id": 4,
			"type": "SunPower",
			"title": "SunPower  SPR-X20-327-BLK-C-AC",
			"image": "/img/SmartBox2.png",
			"price": 25
		},
		{
			"id": 5,
			"type": "SunPower",
			"title": "SunPower  SPR-X20-327-C-AC",
			"image": "/img/projects/project-1.jpg",
			"price": 25
		},
		{
			"id": 6,
			"title": "SunPower  SPR-X21-335-BLK-C-AC",
			"type": "SunPower",
			"image": "/img/projects/project-1.jpg",
			"price": 8
		},
		{
			"id": 7,
			"title": "SunPower  SPR-X21-345-C-AC",
			"type": "SunPower",
			"image": "/img/projects/project-1.jpg",
			"price": 2
		}
		];

		$scope.etproducts = [
		{
			"id": 1,
			"type": "ET",
			"title": "ET-P660265WWAC",
			"image": "/img/SmartBox1.png",
			"price": 25
		},
		{
			"id": 2,
			"title": "ET-P660265WBAC",
			"type": "ET",
			"image": "/img/SmartBox4.png",
			"price": 50
		},
		{
			"id": 3,
			"title": "ET-P660260WWAC",
			"type": "ET",
			"image": "/img/SmartBox3.png",
			"price": 80
		},
		{
			"id": 4,
			"type": "ET",
			"title": "ET-P660260WBAC",
			"image": "/img/SmartBox2.png",
			"price": 25
		}
		];


		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	});


// angular.module('pricing.information').directive('cableMax', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, element, attr, mCtrl) {
//       function checkMax(value) {
//         if (!isEmpty(value) && value < 80) {
//           mCtrl.$setValidity('max', true);
//         } else {
//           mCtrl.$setValidity('max', false);
//         }
//         return value;
//       }
//       mCtrl.$parsers.push(checkMax);
//     }
//   };
// });

angular.module('pricing.information').directive('pos', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMin, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var minValidator = function(value) {
				var min = 1;
				if (!isEmpty(value) && value < min) {
					ctrl.$setValidity('pos', false);
					return undefined;
				} else {
					ctrl.$setValidity('pos', true);
					return value;
				}
			};

			ctrl.$parsers.push(minValidator);
			ctrl.$formatters.push(minValidator);
		}
	};
});

angular.module('pricing.information').directive('cablemin', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMin, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var minValidator = function(value) {
				var min = 6;
				if (!isEmpty(value) && value < min) {
					ctrl.$setValidity('cablemin', false);
					return undefined;
				} else {
					ctrl.$setValidity('cablemin', true);
					return value;
				}
			};

			ctrl.$parsers.push(minValidator);
			ctrl.$formatters.push(minValidator);
		}
	};
});

angular.module('pricing.information').directive('cable2min', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMin, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var minValidator = function(value) {
				var min = 6;
				if (!isEmpty(value) && value < min && value!= 0) {
					ctrl.$setValidity('cable2min', false);
					return undefined;
				} else {
					ctrl.$setValidity('cable2min', true);
					return value;
				}
			};

			ctrl.$parsers.push(minValidator);
			ctrl.$formatters.push(minValidator);
		}
	};
});

angular.module('pricing.information').directive('cablemax', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMax, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var maxValidator = function(value) {
				var max = 80;
				if (!isEmpty(value) && value > max) {
					ctrl.$setValidity('cablemax', false);
					return undefined;
				} else {
					ctrl.$setValidity('cablemax', true);
					return value;
				}
			};

			ctrl.$parsers.push(maxValidator);
			ctrl.$formatters.push(maxValidator);
		}
	};
});

angular.module('pricing.information').directive('acmax', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMax, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var maxValidator = function(value) {
				var max = 7.6;
				if (!isEmpty(value) && value > max) {
					ctrl.$setValidity('acmax', false);
					return undefined;
				} else {
					ctrl.$setValidity('acmax', true);
					return value;
				}
			};

			ctrl.$parsers.push(maxValidator);
			ctrl.$formatters.push(maxValidator);
		}
	};
});

angular.module('pricing.information').directive('validNumber', function() {
	return {
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelCtrl) {
			if(!ngModelCtrl) {
				return; 
			}

			ngModelCtrl.$parsers.push(function(val) {
				if (angular.isUndefined(val)) {
					var val = '';
				}
				var clean = val.replace(/[^0-9\.]/g, '');
				var decimalCheck = clean.split('.');

				if(!angular.isUndefined(decimalCheck[1])) {
					decimalCheck[1] = decimalCheck[1].slice(0,8);
					clean =decimalCheck[0] + '.' + decimalCheck[1];
				}

				if (val !== clean) {
              //ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$setValidity('isNum', false);
              ngModelCtrl.$render();
          }
          if (val == clean) {
          	ngModelCtrl.$setValidity('isNum', true);
          	ngModelCtrl.$render();
          }

          return clean;
      });

			element.bind('keypress', function(event) {
				if(event.keyCode === 32) {
					event.preventDefault();
				}
			});
		}
	};
});

angular.module('pricing.information').directive('validNumberNoDecimals', function() {
	return {
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelCtrl) {
			if(!ngModelCtrl) {
				return; 
			}

			ngModelCtrl.$parsers.push(function(val) {
				if (angular.isUndefined(val)) {
					var val = '';
				}
				var clean = val.replace(/\D/g, '');


				if (val !== clean) {
              //ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$setValidity('isInt', false);
              ngModelCtrl.$render();
          }
          if (val == clean) {
          	ngModelCtrl.$setValidity('isInt', true);
          	ngModelCtrl.$render();
          }

          return clean;
      });

			element.bind('keypress', function(event) {
				if(event.keyCode === 32) {
					event.preventDefault();
				}
			});
		}
	};
});


angular.module('pricing.information').directive('toggle', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			if (attrs.toggle=="tooltip"){
				$(element).tooltip();
			}
			if (attrs.toggle=="popover"){
				$(element).popover();
			}
		}
	};
});

// angular.module('pricing.information').directive('defaultToZero', function(){
// 	return {
//     restrict: 'A',
//     require: 'ngModel',
//     link: function (scope, elem, attrs, ngModelCtrl) {
//         elem.on('blur', function() {
//             if (!elem.val()) {
//                 elem.val('0');
//                 ngModelCtrl.$setViewValue('0');
//             }
//         });
//     }
// };
// });


angular.module('pricing.index', ['ngRoute', 'ui.bootstrap', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.products', 'services.utility', 'services.cart']);
angular.module('pricing.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/pricing', {
    templateUrl: 'pricing/pricing.tpl.html',
    controller: 'PricingCtrl',
    title: 'Pricing',
    resolve: {
      productList: prodListService
    }
  });
}]);
function prodListService(productService) {
  return productService.getProductList();
}

angular.module('pricing.index').controller('PricingCtrl', ['$scope', '$q', '$http', '$modal', 'security', '$location', '$timeout', 'productService', 'productList', 'cartService',
  function($scope, $q, $http, $modal, security, $location, $timeout, productService, productList, cartService){
    
    $scope.cart = cartService;

    $scope.products = productList;

    $scope.addToCart = function (product) {
      return cartService.addToCart(product);
      console.log($scope.cart);
    };

    $scope.removeFromCart = function (product) {
      return cartService.removeFromCart(product); 
    };

    $scope.getProductPrice = function (product) {
      return (product.price)*(product.quantity);
    };

    $scope.getCartPrice = function () {
      return cartService.getCartPrice(); 
    };

    $scope.getItemAmount = function () {
      return cartService.getItemAmount();
    };

    $scope.addQty = function(product) {
      return cartService.addQty(product);
    }
    $scope.subtractQty = function(product) {
      return cartService.subtractQty(product);
    }
    $scope.openInfoModal = function () {
      var modalInstance = $timeout(function(){ $modal.open({
        templateUrl: 'pricing/information-modal.tpl.html',
        controller: 'InfoModalCtrl'
        // resolve: {
        //   totalAmount: $scope.getCartPrice
        // }
      })}, 2000);
    };

    $scope.checkout = function () {
     // var total = $scope.getCartPrice;

      if(!security.isAuthenticated()){
        $modal.open({
          templateUrl: 'pricing/login-modal2.tpl.html',
          controller: 'LoginOrGuestCtrl2'
          // resolve: {
          //   totalAmount: total
          // }
        });
      }
      else {
        $location.url('/account/checkout');
      }
    };

    $scope.greaterThan = function(prop, val){
      return function(item){
        return item[prop] > val;
      }
    }

    $scope.openInfoModal();

  }])
.controller('InfoModalCtrl',
  function($scope, $location, $modalInstance, cartService){

    $scope.newPage = function(){
      $location.path('/pricing/information');
      $modalInstance.dismiss('cancel');
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })
.controller('LoginOrGuestCtrl',
  function($scope, $location, $modalInstance, cartService){

    $scope.signin = function(){
      $location.url('/account/checkout');
      //$location.path("/account/checkout/" + totalAmount);
      $modalInstance.dismiss('cancel');
    };
    $scope.guest = function(){
      $location.path('/specs');
      //$location.url('/pricing/checkout');
      //$location.path("/pricing/checkout/" + totalAmount);
      $modalInstance.dismiss('cancel');
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  })
.controller('LoginOrGuestCtrl2',
  function($scope, $location, $modalInstance, cartService){

    $scope.signin2 = function(){
      $location.url('/account/checkout');
      //$location.path("/account/checkout/" + totalAmount);
      $modalInstance.dismiss('cancel');
    };
    $scope.guest2 = function(){
      $location.path('/pricing/checkout');
      //$location.url('/pricing/checkout');
      //$location.path("/pricing/checkout/" + totalAmount);
      $modalInstance.dismiss('cancel');
    };
    $scope.cancel2 = function () {
      $modalInstance.dismiss('cancel');
    };

  });


angular.module('signup', ['ngRoute', 'config', 'services.utility', 'security.service', 'directives.serverError', 'ui.bootstrap']);
angular.module('signup').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/signup', {
      templateUrl: 'signup/signup.tpl.html',
      controller: 'SignupCtrl',
      title: 'Sign Up',
      resolve: {
        UnauthenticatedUser: ['$q', '$location', 'securityAuthorization', function($q, $location, securityAuthorization){
          var promise = securityAuthorization.requireUnauthenticatedUser()
            .catch(function(){
              if(securityAuthorization.requireAdminUser())
                $location.path('/admin');
                else
                $location.path('/account');

              return $q.reject();
            });
          return promise;
        }]
      }
    });
}]);
angular.module('signup').controller('SignupCtrl', [ '$scope', '$location', '$log', 'utility', 'security', 'SOCIAL',
  function($scope, $location, $log, utility, security, SOCIAL){
    // local variable
    var signupSuccess = function(data){
      if(data.success){
        //account/user created, redirect...
        var url = data.defaultReturnUrl || '/';
        return $location.path(url);
      }else{
        //error due to server side validation
        $scope.errfor = data.errfor;
        angular.forEach(data.errfor, function(err, field){
          $scope.signupForm[field].$setValidity('server', false);
        });
      }
    };
    var signupError = function(){
      $scope.alerts.push({
        type: 'danger',
        msg: 'Error creating account, Please try again'
      });
    };
    // model def
    $scope.user = {};
    
    $scope.alerts = [];
    $scope.errfor = {};
    $scope.social = angular.equals({}, SOCIAL)? null: SOCIAL;

    // method def
    $scope.hasError = utility.hasError;
    $scope.showError = utility.showError;
    $scope.canSave = utility.canSave;
    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };
    $scope.submit = function(){
      security.signup($scope.user).then(signupSuccess, signupError);
    };
  }]);
angular.module('templates.app', ['404.tpl.html', 'about.tpl.html', 'account/account.tpl.html', 'account/checkout/checkout.tpl.html', 'account/checkout/order-summary.tpl.html', 'account/purchaseHistory/purchaseHistory.tpl.html', 'account/purchaseHistory/purchaseHistoryOne.tpl.html', 'account/settings/account-settings.tpl.html', 'account/verification/account-verification.tpl.html', 'admin/Pricing/admin-pricing-modal.tpl.html', 'admin/Pricing/admin-pricing.tpl.html', 'admin/Sales/admin-sales.tpl.html', 'admin/accounts/admin-account.tpl.html', 'admin/accounts/admin-accounts.tpl.html', 'admin/activity/activity.tpl.html', 'admin/admin-account-settings/admin-account-settings.tpl.html', 'admin/admin-groups/admin-group.tpl.html', 'admin/admin-groups/admin-groups.tpl.html', 'admin/admin.tpl.html', 'admin/administrators/admin-administrator.tpl.html', 'admin/administrators/admin-administrators.tpl.html', 'admin/developers/developers.tpl.html', 'admin/purchase-history/admin-purchase-histories.tpl.html', 'admin/purchase-history/admin-purchase-histories2.tpl.html', 'admin/purchase-history/admin-purchase-history.tpl.html', 'admin/statuses/admin-status.tpl.html', 'admin/statuses/admin-statuses.tpl.html', 'admin/users/admin-user.tpl.html', 'admin/users/admin-users.tpl.html', 'contact.tpl.html', 'footer.tpl.html', 'header.tpl.html', 'login/forgot/login-forgot.tpl.html', 'login/login.tpl.html', 'login/reset/login-reset.tpl.html', 'main.tpl.html', 'pricing/checkout/checkout.tpl.html', 'pricing/information-modal.tpl.html', 'pricing/information/information.tpl.html', 'pricing/login-modal.tpl.html', 'pricing/login-modal2.tpl.html', 'pricing/panel-modal.tpl.html', 'pricing/pricing.tpl.html', 'sidebar.tpl.html', 'signup/signup.tpl.html', 'specs.tpl.html']);

angular.module("404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("404.tpl.html",
    "<h1>Page Not Found</h1>\n" +
    "<p class=\"lead\">The resource you requested doesn't exist.</p>\n" +
    "");
}]);

angular.module("about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about.tpl.html",
    "<div role=\"main\" class=\"main\">\n" +
    "                \n" +
    "                <div class=\"\" >\n" +
    "                \n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"\">\n" +
    "                            <h1 class=\"heading-font heading-tertiary spacing-top-xlg spacing-bot-sm\">Our Mission</h1>\n" +
    "                            <h4 class=\"subheading-font heading-secondary italic spacing-top-sm spacing-bot-md\">Revolutionizing the Solar Industry</h4>\n" +
    "\n" +
    "                            <p class=\"test-color-tertiary primary-font\">SafeConnect is an early stage company that has successfully built and tested prototypes of its products for compliance with relevant codes and standards in its own lab facilities and at the National Renewable Energy Laboratory (NREL). The company’s research and development to date has been conducted with support from the US Department of Energy under its SunShot Initiative program. SafeConnect’s products are currently undergoing the UL certification process and the company will commence commercial sales in 2016.</p>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    \n" +
    "                    <div class=\"container\">\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <hr class=\"tall\">\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"container\">\n" +
    "                        <!-- Section Title -->\n" +
    "                        <div class=\"section-title\">\n" +
    "                            <h1 class=\"heading-font heading-tertiary spacing-top-md spacing-bot-sm\">Meet Our Team</h1>\n" +
    "                            <h4 class=\"subheading-font heading-secondary italic spacing-top-sm spacing-bot-xlg\">About Our Executive Leadership</h4>\n" +
    "                        </div>              \n" +
    "                        <!--/Section Title -->\n" +
    "\n" +
    "                        <div>\n" +
    "                            <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Todd Georgopapadakos</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Founder</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">An entrepreneurial leader who has built, operated and exited businesses in the solar, software, printing, fine art, and franchising arenas. At SafeConnect, Todd is the co-leader and co-architect of all of the company’s strategic planning and decision-making.  From 2009 to 2014, Todd was the Managing Principal of residential PV contractor RevoluSun LLC, which installed approximately 5,000 systems; President of RevoluSun Solar Corp., a franchisor of solar sales /contracting opportunities; and Vice-President of RevoluSun Energy Inc., a developer of residential solar sector IP. Todd is also a Hawaii licensed General Contractor. In 2009 he received the Governor of Hawaii’s Innovation Award, for his work in renewable energy. Todd holds a BA in English from Boston University.</p>  \n" +
    "                        </div>\n" +
    "\n" +
    "                         <div>\n" +
    "                           <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Mark Duda</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Founder</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">An entrepreneur who came to the solar industry following a career in quantitative public policy analysis. At SafeConnect, Mark is the co-leader and co-architect of all of the company’s strategic planning and decision-making, and is responsible for the company’s regulatory affairs. Previously, Mark was President of RevoluSun Energy Inc., which was sold to SunPower Corporation in 2014; and co-founded of RevoluSun LLC and RevoluSun Solar Corp. both of which he successfully exited in 2014. Mark is an acknowledged expert in renewable energy policy, who has served as President of several solar trade organizations, leading the Hawaii solar industry’s legislative initiatives and intervention more than a dozen regulatory proceedings. Mark he has won numerous awards for his work in renewable energy including: the Hawaii Venture Capital Association’s Clean Tech Entrepreneur of the Year; Hawaii Business Magazine's “Twenty for the Next 20,” recognizing emerging leaders in the state; and the Governor of the State of Hawaii’s Innovation Award, which he shared with his business partner Todd Georgopapadakos. Mark has and MA in Economics and a Ph.D. in Economic Geography.</p>  \n" +
    "                        </div>\n" +
    "\n" +
    "                        <div>\n" +
    "                            <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Brian Cunningham</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Chief Technology Officer</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">Responsible for the electrical design and physical construction of all SafeConnect eBOS devices/componentry since the company’s inception, and has managed development of the firmware required to operate the SmartBox controller. Brian has overseen the NREL’s testing of the SmartBox system and is responsible for shepherding SafeConnect’s products through the UL certification process. Prior to joining SafeConnect, Brian managed the installation of RevoluSun LLC’s roughly 5,000 residential PV systems in Hawaii and he has over a decade of experience with design, installation, and operation of electric power systems worldwide, including at McMurdo Station in Antarctica, where he was responsible for operating the base’s wind-diesel electrical grid. Brian has a BS in Physics from California Polytechnic State University.</p>  \n" +
    "                        </div>\n" +
    "\n" +
    "                         <div>\n" +
    "                            <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Rod Braunthal</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Director of Product Integration &amp; Adoption</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">With over 20 years of experience in electrical and construction drafting, design, and project permitting at the City, County, State, and Federal levels, Rod oversees SafeConnect’s efforts to achieve adoption of SafeConnect’s eBOS solution by AHJ’s. With Mark and Todd, Rod also successfully founded, built, and exited the RevoluSun Companies. Since joining the solar industry he has been directly responsible for the design of more than 50 MW of residential and commercial PV, all of which has been installed across various jurisdictions in Hawaii, Massachusetts, and New York.</p>  \n" +
    "                        </div>      \n" +
    "\n" +
    "                        <div>\n" +
    "                            <br>\n" +
    "                             <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Zachary McNish</h4>\n" +
    "                                <h6 class=\"text-color-primary primary-font bold spacing-bot-sm\">Chief Operating Officer &amp; General Counsel</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">Manages the day-to-day business operations of SafeConnect Solar. He has previously served as an attorney both in private practice in-house for several clean-energy companies. Zach has been recognized as one of Hawaii’s ’40 under Forty’ young business leaders by Pacific Business News and as one of Hawaii Business Magazine’s Twenty for the Next 20. Prior to entering law school, Zach served for three years in the Peace Corps in Panama, and later returned to the country to successfully advocate for changes in law that conveyed land rights to previously disenfranchised indigenous communities.  Zach holds a BA in History from Williams College, and JD and MA degrees from Duke University.</p>  \n" +
    "                        </div>    \n" +
    "\n" +
    "                        <div>\n" +
    "                           <br>\n" +
    "                            <h4 class=\"heading-tertriary subheading-font spacing-bot-none\">Tyler McNish</h4>\n" +
    "                                <h6 class=\"text-color-primary bold primary-font spacing-bot-sm\">Director of Market Development</h6>\n" +
    "                                <p class=\"test-color-tertiary primary-font\">Manages SafeConnect Solar’s pilot programs with local governments.  Prior to joining SafeConnect, Tyler worked as an attorney for the solar industry in Hawaii, helping energy developers negotiate power purchase agreements for over 250 MW of cumulative renewable capacity, and participating in the Public Utilities Commission policy and regulatory proceedings affecting Hawaii’s renewable energy sector. Tyler has also worked as a consultant on international climate change issues, a business strategy analyst at a Washington, D.C. consulting firm, and a Peace Corps Volunteer in Guatemala.  Tyler holds a BA in Economics from Stanford University and a JD from the UC Berkeley School of Law.</p>  \n" +
    "                        </div>    \n" +
    "                    </div>\n" +
    "                \n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"logo-c-bkgnd\">\n" +
    "                    \n" +
    "                    <svg opacity=\"0.6\" width=\"100%\" height=\"inherit\" viewBox=\"-2 19 848 861\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
    "                        <desc>LogoC Background</desc>\n" +
    "                        <defs>\n" +
    "                            <filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"filter-1\">\n" +
    "                                <feOffset dx=\"0\" dy=\"0\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n" +
    "                                <feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n" +
    "                                <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0\" type=\"matrix\" in=\"shadowBlurOuter1\" result=\"shadowMatrixOuter1\"></feColorMatrix>\n" +
    "                                <feMerge>\n" +
    "                                    <feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode>\n" +
    "                                    <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n" +
    "                                </feMerge>\n" +
    "                            </filter>\n" +
    "                        </defs>\n" +
    "                        <g id=\"Logo_C\" filter=\"url(#filter-1)\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(0.000000, 21.000000)\">\n" +
    "                            <path d=\"M674.920065,686.093839 L720.791946,741.096957 C720.791946,741.096957 677.896361,776.881211 580.579882,821.800424 C483.263402,866.719636 402.172308,855.733337 402.172308,855.733337 L409.424008,781.035093 L525.958297,686.093839 L674.920065,686.093839 Z\" id=\"Logo_C1_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M381.064075,774.623434 L370.061991,855.274977 C370.061991,855.274977 310.181267,862.608726 211.782498,821.780729 C113.383728,780.952731 96.1100978,737.360254 96.1100978,737.360254 L163.631357,681.118134 L307.210346,681.118134 L381.064075,774.623434 Z\" id=\"Logo_C2_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M12.6644866,586.123167 C36.0106073,677.095606 82.3055284,714.762782 82.3055284,714.762782 L150.195913,659.759665 L176.407393,532.015283 L102.612792,438.551164 L8.11671931,438.551164 C8.11671931,438.551164 -10.6816341,495.150728 12.6644866,586.123167 Z\" id=\"Logo_C3_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M81.6246177,250.124307 C34.0367753,325.126716 14.6516708,410.247477 14.6516708,410.247477 L102.593085,410.247477 L219.127374,312.043994 L242.025686,182.901258 L194.318929,129.731578 C194.318929,129.731578 129.21246,175.121897 81.6246177,250.124307 Z\" id=\"Logo_C4_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M363.888998,29.764486 C277.071395,59.9297437 218.933852,112.727522 218.933852,112.727522 L269.27645,167.968771 L404.813525,167.968771 L527.192896,78.3505738 L536.858245,2.26292821 C536.858245,2.26292821 450.7066,-0.40077162 363.888998,29.764486 Z\" id=\"Logo_C5_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                            <path d=\"M551.969087,80.7694935 L635.031238,171.524637 L774.003329,171.524637 L843.748299,115.604801 C843.748299,115.604801 807.934186,66.1216922 712.979391,28.0778669 C618.024597,-9.96595839 562.51962,1.93169199 562.51962,1.93169199 L551.969087,80.7694935 Z\" id=\"Logo_C6_Path\" fill=\"#FFFFFF\"></path>\n" +
    "                        </g>\n" +
    "                    </svg>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>");
}]);

angular.module("account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/account.tpl.html",
    "<!-- <div class=\"row\" id=\"account\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div><h1>My Account</h1></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value day-of-year\" ng-bind=\"dayOfYear\"></div>\n" +
    "                    <div class=\"stat-label\">Day of Year</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value day-of-month\" ng-bind=\"dayOfMonth\"></div>\n" +
    "                    <div class=\"stat-label\">Day of Month</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value week-of-year\" ng-bind=\"weekOfYear\"></div>\n" +
    "                    <div class=\"stat-label\">Week of Year</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value day-of-week\" ng-bind=\"dayOfWeek\"></div>\n" +
    "                    <div class=\"stat-label\">Day of Week</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value week-year\" ng-bind=\"weekYear\"></div>\n" +
    "                    <div class=\"stat-label\">Week Year</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <div class=\"well stat\">\n" +
    "                    <div class=\"stat-value hour-of-day\" ng-bind=\"hourOfDay\"></div>\n" +
    "                    <div class=\"stat-label\">Hour of Day</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "        <div class=\"page-header\"><h1>Go Faster Everyday</h1></div>\n" +
    "        <i class=\"fa fa-dashboard super-awesome\"></i></div>\n" +
    "</div> -->\n" +
    "");
}]);

angular.module("account/checkout/checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/checkout/checkout.tpl.html",
    "<div role=\"main\" class=\"main shop\">\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h2 class=\"mb-none\"><strong>Checkout</strong></h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-9\">\n" +
    "				<div class=\"panel-group\" id=\"accordion\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading active\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Shipping Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<!-- <button class=\"accordion active\">Shipping Address</button> -->\n" +
    "						<div class=\"paneling\" style='max-height: 100%;'>\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "\n" +
    "									<br>\n" +
    "									<form id=\"frmShippingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnameMailing\" ng-model=\"mailingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnameMailing\" ng-model=\"mailingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companyMailing\" ng-model=\"mailingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1Mailing\" ng-model=\"mailingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2Mailing\" ng-model=\"mailingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"cityMailing\" ng-model=\"mailingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"stateMailing\" ng-model=\"mailingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipMailing\" ng-model=\"mailingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countryMailing\" ng-model=\"mailingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Billing Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<div class=\"paneling\">\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "									<br>\n" +
    "									<form id=\"frmBillingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-md-12\">\n" +
    "												<span class=\"remember-box checkbox\">\n" +
    "													<label>\n" +
    "														<input type=\"checkbox\" ng-click=\"checkBillAddress()\" ng-Model=\"billingChecked\">Use shipping address?\n" +
    "													</label>\n" +
    "												</span>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnamebilling\" ng-model=\"billingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnamebilling\" ng-model=\"billingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companybilling\" ng-model=\"billingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1billing\" ng-model=\"billingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2billing\" ng-model=\"billingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"citybilling\" ng-model=\"billingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"statebilling\" ng-model=\"billingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipbilling\" ng-model=\"billingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countrybilling\" ng-model=\"billingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "					<form stripe-form=\"stripeSubmit\" name=\"paymentinfo\">\n" +
    "						<div class=\"panel-group\" id=\"accordion\">\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Payment Method\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<br>\n" +
    "\n" +
    "											<div class=\"row\">\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Card number</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"number\" payments-validate=\"card\" payments-format=\"card\" payments-type-model=\"type\" ng-class=\"myForm.number.$card.type\"/>\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Name on card </label>\n" +
    "														<input type=\"text\" ng-model=\"name\" class=\"form-control\">\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Expiration Date</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"expiry\" payments-validate=\"expiry\" payments-format=\"expiry\" />\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">CVC</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"cvc\" payments-validate=\"cvc\" payments-format=\"cvc\" payments-type-model=\"type\"/>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<br>\n" +
    "\n" +
    "\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Order Review\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<table class=\"shop_table cart\">\n" +
    "												<thead>\n" +
    "													<tr>\n" +
    "														<th class=\"product-thumbnail\">\n" +
    "															&nbsp;\n" +
    "														</th>\n" +
    "														<th class=\"product-name\">\n" +
    "															Product\n" +
    "														</th>\n" +
    "														<th class=\"product-price\">\n" +
    "															Price\n" +
    "														</th>\n" +
    "														<th class=\"product-quantity\">\n" +
    "															Quantity\n" +
    "														</th>\n" +
    "														<th class=\"product-subtotal\">\n" +
    "															Total\n" +
    "														</th>\n" +
    "													</tr>\n" +
    "												</thead>\n" +
    "												<tbody>\n" +
    "\n" +
    "													<tr ng-repeat=\"item in cart\" class=\"cart_table_item\">\n" +
    "														<td class=\"product-thumbnail\">\n" +
    "															<img ng-src=\"{{item.imagePath}}\" alt=\"{{item.title}}\">\n" +
    "														</td>\n" +
    "														<td class=\"product-name\">\n" +
    "															{{item.title}}\n" +
    "														</td>\n" +
    "														<td class=\"product-price\">\n" +
    "															${{item.price}}\n" +
    "														</td>\n" +
    "														<td class=\"product-quantity\">\n" +
    "															{{item.quantity}}\n" +
    "														</td>\n" +
    "														<td class=\"product-subtotal\">\n" +
    "															${{cart.getProductPrice(item)}}\n" +
    "														</td>\n" +
    "													</tr>\n" +
    "												</tbody>\n" +
    "											</table>\n" +
    "										</div>\n" +
    "\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"actions-continue\">\n" +
    "								<input type=\"submit\" value=\"Place Order\" name=\"proceed\" class=\"btn btn-lg btn-primary mt-xl\">\n" +
    "							</div>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "			<div id=\"exportthis\" class=\"col-md-3\">\n" +
    "				<h4 class=\"heading-primary\">Cart Totals</h4>\n" +
    "				<table class=\"cart-totals\">\n" +
    "					<tbody>\n" +
    "						<tr class=\"cart-subtotal\">\n" +
    "							<th>\n" +
    "								<strong>Cart Subtotal</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "						<tr class=\"shipping\">\n" +
    "							<th>\n" +
    "								Shipping\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "							</td>\n" +
    "						</tr>	\n" +
    "						<tr class=\"total\">\n" +
    "							<th>\n" +
    "								<strong>Order Total</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "					</tbody>\n" +
    "				</table>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/checkout/order-summary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/checkout/order-summary.tpl.html",
    "<div class=\"main shop\">\n" +
    "<div id= \"confirmation-email\" class=\"col-md-9\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"section-title\">\n" +
    "        <h2 class=\"heading-font heading-tertiary spacing-top-md\">Thank you for your order!</h2>\n" +
    "        <br>\n" +
    "        <h4 class=\"mb-none preheading-font spacing-bot-sm\">Order Summary</h4>\n" +
    "        <br>\n" +
    "    </div>  \n" +
    "\n" +
    "\n" +
    "    <div class=\"accordion-body\" align=\"center\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            <table class=\"shop_table cart\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th class=\"product-thumbnail\">\n" +
    "                            &nbsp;\n" +
    "                        </th>\n" +
    "                        <th class=\"product-name\">\n" +
    "                            Product\n" +
    "                        </th>\n" +
    "                        <th class=\"product-price\">\n" +
    "                            Price\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                        </th>\n" +
    "                        <th class=\"product-quantity\">\n" +
    "                            Quantity\n" +
    "                        </th>\n" +
    "                        <th class=\"product-subtotal\">\n" +
    "                            Total\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody ng-if=\"cart.length\">\n" +
    "                    <tr class=\"cart_table_item\" ng-repeat=\"product in cart | filter: greaterThan('quantity', 0)\">\n" +
    "                        <td class=\"product-thumbnail\">\n" +
    "                            <a><img width=\"100\" height=\"100\" alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\">\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "                        <td class=\"product-name\">\n" +
    "                            <a href=\"shop-product-sidebar.html\">{{product.title}}</a>\n" +
    "                        </td>\n" +
    "                        <td class=\"product-price\">\n" +
    "                            <span class=\"amount\">${{product.price}}</span>\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            &nbsp;\n" +
    "                        </td>\n" +
    "                        <td class=\"product-quantity\">\n" +
    "                            <span>{{product.quantity}}</span>\n" +
    "                        </td>\n" +
    "                        <td class=\"product-subtotal\">\n" +
    "                            <span class=\"amount\">${{getProductPrice(product)}}</span>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "\n" +
    "\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "\n" +
    "            <div style=\"width:50%; float:left;\">\n" +
    "                <br>\n" +
    "                <table class=\"cart-totals\">\n" +
    "                    <tbody >\n" +
    "                        <tr class=\"cart-subtotal\">\n" +
    "                            <th>\n" +
    "                                <strong>Subtotal</strong>\n" +
    "                            </th>\n" +
    "                            <td>\n" +
    "                                <strong>${{getCartPrice()}}</strong>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr class=\"shipping\">\n" +
    "                            <th>\n" +
    "                                Shipping\n" +
    "                            </th>\n" +
    "                            <td>\n" +
    "                                Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        <tr class=\"total\">\n" +
    "                            <th>\n" +
    "                                <strong>Order Total</strong>\n" +
    "                            </th>\n" +
    "                            <td>\n" +
    "                                <strong><span class=\"amount\">${{getCartPrice()}}</span></strong>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- \n" +
    "<div role=\"main\" class=\"main\">\n" +
    "\n" +
    "    <div class=\"\" >\n" +
    "\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"section-title\">\n" +
    "                <h1 class=\"heading-font heading-tertiary spacing-top-md spacing-bot-sm\">Thank you for your order!</h1>\n" +
    "                <br>\n" +
    "                <h1 class=\"heading-font heading-tertiary spacing-top-md spacing-bot-sm\">Order Summary</h1>\n" +
    "                <br>\n" +
    "            </div>              \n" +
    "            \n" +
    "            \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-8\">\n" +
    "                    <legend>Order Contents</legend>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Product: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Price: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Quantity: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Subtotal: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                        <br>\n" +
    "                    </div>\n" +
    "                    <legend>Shipping and Payment</legend>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Shipping Address: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Billing Address: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Payment Method: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Shipping Speed: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-9\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4\">\n" +
    "                    <legend>Order Details</legend>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Order Number: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Order Date: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">##/##/####</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Order Status: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###############</label>\n" +
    "                    </div>\n" +
    "                    <legend> </legend>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">########</label>\n" +
    "                    </div>\n" +
    "                    <legend></legend>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Subtotal: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###.##</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Shipping: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">##.##</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Tax: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">##.##</label>\n" +
    "                    </div>\n" +
    "                    <legend> </legend>\n" +
    "                    <div class=\"col-md-5\">\n" +
    "                        <label class=\"control-label\" for=\"full\">Total: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7\" style=\"float: right; text-align: right;\">\n" +
    "                        <label class=\"control-label\" for=\"full\">###.##</label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<button ng-click=\"returnHome()\">Return Home</button> -->");
}]);

angular.module("account/purchaseHistory/purchaseHistory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/purchaseHistory/purchaseHistory.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-lg-12\">\n" +
    "        <h1>Purchase History</h1>\n" +
    "        <br>\n" +
    "        <div class=\"sidebar-search\" style=\"width: 30%;\">\n" +
    "            <div class=\"input-group custom-search-form\">\n" +
    "                <input name=\"username\" type=\"text\" class=\"form-control\" ng-model=\"filters.username\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\" placeholder=\"Search...\">\n" +
    "                <div class=\"input-group-btn\">\n" +
    "                    <button class=\"btn btn-default\" type=\"button\">\n" +
    "                        <i class=\"fa fa-search\"></i>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                Purchase History\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Date</th>\n" +
    "                            <th>Transaction #</th>\n" +
    "                            <th>Purchase Amount</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <!-- <tr ng-repeat=\"user in users\" ng-click=\"goToUser();\"> -->\n" +
    "                        <tr ng-repeat=\"ph in phList\" class=\"odd gradeX\" ng-click=\"goToPH();\">\n" +
    "                            <!-- <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/users/{{user._id}}\">Edit</a></td> -->\n" +
    "                            <td ng-bind=\"ph.orderDate | date:'MM/dd/yyyy'\"></td>\n" +
    "                            <td ng-bind=\"ph.orderNumber\"></td>\n" +
    "                            <td ng-bind=\"ph.cost.total | currency\"></td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"phList.length === 0\">\n" +
    "                            <td colspan=\"5\">no documents matched</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "                <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "                    <div class=\"btn-group pull-left\">\n" +
    "                        <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                        <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-group pull-right\">\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/purchaseHistory/purchaseHistoryOne.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/purchaseHistory/purchaseHistoryOne.tpl.html",
    "<div id=\"admin-purchase-history-single\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div>\n" +
    "            <h1>Purchase Record</h1>\n" +
    "            <h6><big><a ng-href=\"/account/purchaseHistory\">&nbsp&nbspBack to Purchase History</a></big></h6>\n" +
    "        </div>\n" +
    "        \n" +
    "        <p style=\"padding-left: .8em\">Date: <span ng-bind=\"phDetail.orderDate | date:'MM/dd/yyyy'\"/>\n" +
    "        <br>Customer: \n" +
    "        <br>Company: </p>\n" +
    "\n" +
    "        <br>\n" +
    "        <p style=\"padding-left: .8em\">Transaction Number: {{phDetail.orderNumber}}\n" +
    "        <br>Purchase Amount: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "        <br>Payment Method: </p>\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <h4>Order</h4>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "                    <!-- <div class=\"panel-heading\">\n" +
    "                        Order\n" +
    "                    </div> -->\n" +
    "            <div class=\"panel-body\">\n" +
    "                    <table width=\"100%\" class=\"table\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Item</th>\n" +
    "                                <th>Unit Cost</th>\n" +
    "                                <th>Quantity</th>\n" +
    "                                <th>Total</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        \n" +
    "                        <tbody>\n" +
    "                            <tr class=\"odd gradeX\">\n" +
    "                                <td> Cable </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                                <td> 1 </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                            </tr>\n" +
    "                            \n" +
    "                        </tbody>\n" +
    "                        <tfoot>\n" +
    "                            <tr>\n" +
    "                                <td class=\"align-right\" colspan=\"6\">\n" +
    "                                    <p>\n" +
    "                                        Shipping cost: <span ng-bind=\"phDetail.cost.shipping | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Taxes: <span ng-bind=\"phDetail.cost.tax | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Total: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "                                    </p>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </tfoot>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/settings/account-settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/settings/account-settings.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div><h1>Account Settings</h1></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<br>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-9\">\n" +
    "        <form name=\"identityForm\">\n" +
    "            <legend>Identity</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                </div>\n" +
    "                <alert ng-repeat=\"alert in alerts.identity\" type=\"{{alert.type}}\" close=\"closeAlert('identity', $index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"submit(identityForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"passwordForm\">\n" +
    "            <legend>Change Password</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                </div>\n" +
    "                <alert ng-repeat=\"alert in alerts.pass\" type=\"{{alert.type}}\" close=\"closeAlert('pass', $index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\" style=\"padding-right: 0px;\">\n" +
    "                    <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                    <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-2\" style=\"float: right; width: 45%;\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-password\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"submit(passwordForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"detailForm\">\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                </div>\n" +
    "                <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"col-md-4 form-group\" ng-class=\"{'has-error': hasError(detailForm.first)}\">\n" +
    "                    <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"userDetail.first\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(detailForm.first, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-4 form-group\" ng-class=\"{'has-error': hasError(detailForm.last)}\">\n" +
    "                    <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"userDetail.last\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(detailForm.last, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(detailForm.company)}\">\n" +
    "                    <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"userDetail.company\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-2\">\n" +
    "                    <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(detailForm.phone)}\">\n" +
    "                    <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"userDetail.phone\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"submit(detailForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"shipinfoForm\">\n" +
    "            <legend>Shipping Information</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-1\">\n" +
    "                    <!-- MAKE THIS NUMBER MOTHER FUCKING CHANGE WHEN THERE ARE MORE ADDRESSES -->\n" +
    "                    <span>1)</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-11\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-2\">\n" +
    "                            <label class=\"control-label\" for=\"full\">Full Name:</label>\n" +
    "                        </div>\n" +
    "\n" +
    "                    <!--        PUT PROPER ALERT HERE\n" +
    "                    <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "                    -->\n" +
    "\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.full)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"full\" id=\"full\" class=\"form-control\" ng-model=\"userDetail.full\" required>\n" +
    "                        <span class=\"help-block\" ng-show=\"showError(shipinfoForm.full, 'required')\">This field is required</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address\">Address Line 1: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\" ng-model=\"userDetail.address\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address2\">Address Line 2: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address2\" id=\"address2\" class=\"form-control\" ng-model=\"userDetail.address2\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"city\">City</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.city)}\">\n" +
    "                        <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" ng-model=\"userDetail.city\">\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"usstate\">State</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.usstate)}\" style=\"width: 13.5%;\">\n" +
    "                        <select name=\"usstate\" class=\"form-control\" ng-model=\"filters.usstate\" ng-change=\"filtersUpdated()\">\n" +
    "                            <option ng-repeat=\"x in usstates\">{{x}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"zip\">Zip</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(shipinfoForm.zip)}\">\n" +
    "                        <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(shipinfoForm)\" ng-click=\"submit(shipinfoForm)\">Update</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 form-group\" style=\"float: right;\">\n" +
    "\n" +
    "                    <!-- MAKE CLICKING THIS TEXT CREATE ANOTHER MOTHER FUCKING ADDRESS -->\n" +
    "\n" +
    "                    <span><a id=\"panel_view\" href ng-click=\"panelModal()\">Add Another Address</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "\n" +
    "        <form name=\"billinfoForm\">\n" +
    "            <legend>Billing Information</legend>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-1\">\n" +
    "                    <!-- MAKE THIS NUMBER MOTHER FUCKING CHANGE WHEN THERE ARE MORE ADDRESSES -->\n" +
    "                    <span>1)</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-11\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-2\">\n" +
    "                            <label class=\"control-label\" for=\"full\">Full Name:</label>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--        PUT PROPER ALERT HERE\n" +
    "                        <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "                    -->\n" +
    "\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.full)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"full\" id=\"full\" class=\"form-control\" ng-model=\"userDetail.full\" required>\n" +
    "                        <span class=\"help-block\" ng-show=\"showError(billinfoForm.full, 'required')\">This field is required</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address\">Address Line 1: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address\" id=\"address\" class=\"form-control\" ng-model=\"userDetail.address\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"address2\">Address Line 2: </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.address)}\" style=\"width: 47%;\">\n" +
    "                        <input type=\"text\" name=\"address2\" id=\"address2\" class=\"form-control\" ng-model=\"userDetail.address2\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-2\">\n" +
    "                        <label class=\"control-label\" for=\"city\">City</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.city)}\">\n" +
    "                        <input type=\"text\" name=\"city\" id=\"city\" class=\"form-control\" ng-model=\"userDetail.city\">\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"usstate\">State</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.usstate)}\" style=\"width: 13.5%;\">\n" +
    "                        <select name=\"usstate\" class=\"form-control\" ng-model=\"filters.usstate\" ng-change=\"filtersUpdated()\">\n" +
    "                            <option ng-repeat=\"x in usstates\">{{x}}</option>\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-1\">\n" +
    "                        <label class=\"control-label\" for=\"zip\">Zip</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-2 form-group\" ng-class=\"{'has-error': hasError(billinfoForm.zip)}\">\n" +
    "                        <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"form-group col-md-6\" style=\"float: right; width: 45%;\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(billinfoForm)\" ng-click=\"submit(billinfoForm)\">Update</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-md-3 form-group\" style=\"float: right;\">\n" +
    "\n" +
    "                    <!-- MAKE CLICKING THIS TEXT CREATE ANOTHER MOTHER FUCKING ADDRESS -->\n" +
    "\n" +
    "                    <span><a id=\"panel_view\" href ng-click=\"panelModal()\">Add Another Address</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("account/verification/account-verification.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/verification/account-verification.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"page-header\"><h1>Verification Required</h1></div>\n" +
    "        <div class=\"alert alert-warning\">Your account is nearly ready. Check your inbox for next steps.</div>\n" +
    "        <div id=\"verify\"></div>\n" +
    "        <form name=\"verificationForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"not-received\" ng-show=\"!formVisible\">\n" +
    "                <a class=\"btn btn-link btn-resend\" ng-click=\"showForm()\">I checked my email and spam folder, nothing yet.</a>\n" +
    "            </div>\n" +
    "            <div class=\"verify-form\" ng-show=\"formVisible\">\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(verificationForm.email)}\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Your Email:</label>\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(verificationForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary btn-verify\" ng-click=\"submit()\">Re-Send Verification</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 special\">\n" +
    "        <div class=\"page-header\"><h1>You're Almost Done</h1></div>\n" +
    "        <i class=\"fa fa-key super-awesome\"></i></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/Pricing/admin-pricing-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/Pricing/admin-pricing-modal.tpl.html",
    "<div class=\"text-right\">\n" +
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Update Price</h3>\n" +
    "</header>\n" +
    "</div>\n" +
    "<div class=\"text-right\">\n" +
    "	<div class=\"modal-body\" id=\"modal-body\">\n" +
    "		Price: <input  type=\"number\" ng-model=\"newPrice\"  placeholder=${{placehold}}>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<footer class=\"modal-footer\">\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"updatePrice()\">Update</button>\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("admin/Pricing/admin-pricing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/Pricing/admin-pricing.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-lg-10\">\n" +
    "      <h1> Pricing</h1>\n" +
    "      <br>\n" +
    "\n" +
    "      <h2>Smart Box</h2>\n" +
    "      <div table-layout=\"fixed\" style=\"padding-left: 3em\">\n" +
    "        <table style=\"width:100%\">\n" +
    "          <tr ng-repeat=\"product in products| filter:{type:'SmartBox'}\">\n" +
    "            <td width=\"33%\">{{product.title}}</td>\n" +
    "            <td width=\"33%\">${{product.price}} ea</td>\n" +
    "            <td class=\"update-price\" style=\"cursor: pointer;\" width=\"33%\"><a ng-click=\"updateModal(product)\">Update Price</a></td>\n" +
    "            <!-- <td width=\"33%\" ng-click=\"updateModal(product)\" style=\"cursor: pointer; color: #0645AD; hover:text-decoration: underline;\"\">Update Price</td> -->\n" +
    "            <!-- <td><a ng-href=\"/admin/users/{{user._id}}\">Edit</a></td> -->\n" +
    "\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "      <h2>Cabling</h2>\n" +
    "      <div table-layout=\"fixed\" style=\"padding-left: 3em\">\n" +
    "        <table style=\"width:100%\">\n" +
    "          <tr ng-repeat=\"product in products| filter:{type:'Cabling'}\">\n" +
    "            <td width=\"33%\">{{product.title}}</td>\n" +
    "            <td width=\"33%\">${{product.price}} ea</td>\n" +
    "            <td class=\"update-price\" style=\"cursor: pointer;\" width=\"33%\"><a ng-click=\"updateModal(product)\">Update Price</a></td>\n" +
    "            <!-- <td width=\"33%\" ng-click=\"updateModal(product)\">Update Price</td> -->\n" +
    "\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "      <h2>Connectors</h2>\n" +
    "      <div table-layout=\"fixed\" style=\"padding-left: 3em\">\n" +
    "        <table style=\"width:100%\">\n" +
    "          <tr ng-repeat=\"product in products| filter:{type:'Adapter'}\">\n" +
    "            <td width=\"33%\">{{product.title}}</td>\n" +
    "            <td width=\"33%\">${{product.price}} ea</td>\n" +
    "            <td class=\"update-price\" style=\"cursor: pointer;\" width=\"33%\"><a ng-click=\"updateModal(product)\">Update Price</a></td>\n" +
    "            <!-- <td width=\"33%\" ng-click=\"updateModal(product)\">Update Price</td> -->\n" +
    "\n" +
    "          </tr>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <h2>Change History</h2>\n" +
    "\n" +
    "  <br>\n" +
    "\n" +
    "  <div>\n" +
    "    <table width=\"100%\" class=\"table\">\n" +
    "      <thead>\n" +
    "        <tr>\n" +
    "          <th>Item</th>\n" +
    "          <th>Date</th>\n" +
    "          <th>New Price</th>\n" +
    "          <th>Old Price</th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "\n" +
    "      <tbody>\n" +
    "\n" +
    "        <tr ng-repeat=\"product in products | orderBy:'title'\">\n" +
    "          <td>{{product.title}}</td>\n" +
    "          <td>\n" +
    "            <ul style=\"list-style: none; list-style-position:inside; margin:0; padding:0;\">\n" +
    "              <li ng-repeat=\"record in product.priceHistory\">\n" +
    "                <span>{{record.date | date:\"MM/dd/yyyy\"}}</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <ul style=\"list-style: none; list-style-position:inside; margin:0; padding:0;\">\n" +
    "              <li ng-repeat=\"record in product.priceHistory\">\n" +
    "                <span>${{record.newPrice}}</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </td>\n" +
    "          <td>\n" +
    "            <ul style=\"list-style: none; list-style-position:inside; margin:0; padding:0;\">\n" +
    "              <li ng-repeat=\"record in product.priceHistory\">\n" +
    "                <span>${{record.oldPrice}}</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "               <!--  <tr class=\"odd gradeX\">\n" +
    "                    <td> Date </td>\n" +
    "                    <td> Item</td>\n" +
    "                    <td> New Price </td>\n" +
    "                    <td> Old Price </td>\n" +
    "                  </tr> -->\n" +
    "\n" +
    "<!-- \n" +
    "                                \n" +
    "                                <tr ng-repeat=\"ph in phList\" ng-click=\"goToPH();\">\n" +
    "                                    \n" +
    "                                    <td>{{ph.orderDate |  date:\"MM/dd/yyyy\"}}</td>\n" +
    "                                    <td ng-bind=\"ph.company\"></td>\n" +
    "                                    <td ng-bind=\"ph.user.name\"></td>\n" +
    "                                    <td ng-bind=\"ph.user._id\"></td>\n" +
    "                                    <td></td>\n" +
    "                                    <td>${{ph.cost.total}}</td>\n" +
    "                                    <td ng-bind=\"ph.orderNumber\"></td>\n" +
    "                                </tr>\n" +
    "                                <tr ng-show=\"phList.length === 0\">\n" +
    "                                    <td colspan=\"5\">no documents matched</td>\n" +
    "                                  </tr> -->\n" +
    "\n" +
    "      </tbody>\n" +
    "\n" +
    "    </table>\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("admin/Sales/admin-sales.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/Sales/admin-sales.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\">   \n" +
    "        <h1>Sales</h1>\n" +
    "        <br> \n" +
    "\n" +
    "        <div id=\"stats\" class=\"container\" style=\"height: 180px;\">\n" +
    "            <div style='float:left;width:50%'>\n" +
    "                <h4>Lifetime</h4>\n" +
    "                <div style=\"padding-left: 3em\">\n" +
    "                    <p>Number of Purchases: {{tallyOverall}}</p>\n" +
    "                    <p>Total Revenue: ${{totalOverall}}</p>\n" +
    "                    <p>Average Purchase Size: ${{averageOverall | number:2}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style='float:right;width:50%'>\n" +
    "                <h4>Last 30 Days</h4>\n" +
    "                <div style=\"padding-left: 3em\">\n" +
    "                    <p>Number of Purchases: {{tally30Days}}</p>\n" +
    "                    <p>Total Revenue: ${{total30Days}}</p>\n" +
    "                    <p>Average Purchase Size: ${{average30Days | number:2}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Monthly</h4>\n" +
    "            <br>\n" +
    "            <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"totalDay\" chart-labels=\"labelDay\" chart-legend=\"true\" chart-options=\"optionsDayTotal\"\n" +
    "            chart-click=\"onClick\">></canvas>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div>\n" +
    "            <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Yearly Sales</h4>\n" +
    "            <br>\n" +
    "            <canvas class=\"chart chart-bar\" chart-options=\"optionsMonthTotal\" chart-data=\"totalMonth\" chart-labels=\"labels\" chart-colors=\"xcolors\" chart-legend=\"true\" chart-click=\"onClick\" chart-dataset-override=\"datasetOverride1\"></canvas>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div>\n" +
    "            <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Sales Size and Quantity</h4>\n" +
    "            <canvas id=\"line\" class=\"chart chart-line\" chart-legend=\"true\" chart-data=\"sizeQuantityData\"\n" +
    "            chart-labels=\"labels\" chart-series=\"series\" chart-options=\"sizeQuantityOptions\"\n" +
    "            chart-dataset-override=\"datasetOverride\" chart-click=\"onClick\"></canvas>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/accounts/admin-account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/accounts/admin-account.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a ng-href=\"/admin/accounts\">Accounts</a> / {{account.name.full}}</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\" id=\"admin-accounts-detail\">\n" +
    "    <div class=\"col-sm-8\">\n" +
    "        <form name=\"contactForm\"><fieldset>\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in contactAlerts\" type=\"{{alert.type}}\" close=\"closeContactAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"account.name.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"account.name.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"account.name.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.company)}\">\n" +
    "                <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"account.company\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.phone)}\">\n" +
    "                <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"account.phone\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.zip)}\">\n" +
    "                <label class=\"control-label\" for=\"zip\">Zip:</label>\n" +
    "                <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"account.zip\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(contactForm)\" ng-click=\"updateAccount()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"loginForm\"><fieldset>\n" +
    "            <legend>Login</legend>\n" +
    "            <alert ng-repeat=\"alert in loginAlerts\" type=\"{{alert.type}}\" close=\"closeLoginAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': loginForm.newUsername && hasError(loginForm.newUsername)}\">\n" +
    "                <label class=\"control-label\">Username:</label>\n" +
    "                <!-- show this div if there is an user linked to this account -->\n" +
    "                <div class=\"input-group\" ng-show=\"account.user && account.user.name\">\n" +
    "                    <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"account.user.name\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkUser()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/users/{{account.user.id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an user linked to this account -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(account.user && account.user.name)\">\n" +
    "                    <input type=\"text\" name=\"newUsername\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"account.newUsername\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(loginForm.newUsername.$dirty && loginForm.newUsername.$valid)\" ng-click=\"linkUser()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(account.user && account.user.name)\" ng-show=\"showError(loginForm.newUsername, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteAccount()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-4\">\n" +
    "        <fieldset>\n" +
    "            <div class=\"status-new\">\n" +
    "                <legend>Status</legend>\n" +
    "                <alert ng-repeat=\"alert in statusAlerts\" type=\"{{alert.type}}\" close=\"closeStatusAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <select name=\"statusSelect\" class=\"form-control\" ng-model=\"selectedStatus\" ng-options=\"status.name for status in statuses track by status._id\">\n" +
    "                        <option value=\"\">-- choose --</option>\n" +
    "                    </select>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" ng-click=\"changeStatus()\">Change</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"status-items\">\n" +
    "                <div class=\"status\" ng-repeat=\"status in account.statusLog | orderBy:'-_id'\">\n" +
    "                    <div class=\"pull-right badge author\">{{status.userCreated.name}} -&nbsp;<span class=\"timeago\" ng-bind=\"formatTime(status.userCreated.time)\"></span></div>\n" +
    "                    <div ng-bind=\"status.name\"></div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "        <fieldset>\n" +
    "            <div class=\"notes-new\">\n" +
    "                <legend>Notes</legend>\n" +
    "                <alert ng-repeat=\"alert in noteAlerts\" type=\"{{alert.type}}\" close=\"closeNoteAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <textarea rows=\"3\" name=\"note\" placeholder=\"enter notes\" class=\"form-control\" ng-model=\"newNote\"></textarea>\n" +
    "                <button class=\"btn btn-default btn-block\" ng-click=\"addNote()\">Add New Note</button>\n" +
    "            </div>\n" +
    "            <div class=\"notes-items\">\n" +
    "                <div class=\"note\" ng-repeat=\"note in account.notes | orderBy: '-_id'\">\n" +
    "                    <div class=\"force-wrap\" ng-bind=\"note.data\"></div>\n" +
    "                    <div class=\"pull-right badge author\">{{note.userCreated.name}} -&nbsp;<span class=\"timeago\" ng-bind=\"formatTime(note.userCreated.time)\"></span></div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"note text-muted\" ng-show=\"account.notes.length === 0\">no notes found</div>\n" +
    "            </div>\n" +
    "        </fieldset>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/accounts/admin-accounts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/accounts/admin-accounts.tpl.html",
    "<div class=\"row\" id=\"admin-accounts-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addAccountForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"fullname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addAccountForm)\" ng-click=\"addAccount()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Accounts</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.search\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Status</label>\n" +
    "                    <select name=\"status\" class=\"form-control\" ng-model=\"filters.status\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"status._id as status.name for status in statuses\" ng-change=\"filtersUpdated()\">\n" +
    "                        <option value=\"\">-- any --</option>\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                        <!--<option value=\"company\">company &#9650;</option>-->\n" +
    "                        <!--<option value=\"-company\">company &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>name<span class=\"pull-right\">age</span></th>\n" +
    "                <th>phone</th>\n" +
    "                <th>status</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"account in accounts\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/accounts/{{account._id}}\">Edit</a></td>\n" +
    "                <td class=\"stretch\"><span class=\"badge badge-clear pull-right\" ng-bind=\"formatTime(account.userCreated.time, 'old')\"></span>{{account.name.full}}</td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"account.phone\"></td>\n" +
    "                <td class=\"nowrap\">\n" +
    "                    <div ng-bind=\"account.status.name\"></div>\n" +
    "                    <div ng-bind=\"formatTime(account.status.userCreated.time)\"></div>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"accounts.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/activity/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/activity/activity.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div ng-show=\"isSet(1)\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h1>Activity this Month</h1>\n" +
    "                <br>\n" +
    "                <div class=\"row\">\n" +
    "                    <ul class=\"nav nav-tabs\">\n" +
    "                        <li ng-class=\"{ active: isSet(1) }\">\n" +
    "                            <a href ng-click=\"setTab(1)\">Month</a>\n" +
    "                        </li>\n" +
    "                        <li ng-class=\"{ active: isSet(2) }\">\n" +
    "                            <a href ng-click=\"setTab(2)\">Year</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Past 30 Day Sales</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"totalDay\" chart-labels=\"labelDay\" chart-options=\"optionsSalesDayTotal\" \n" +
    "                    chart-click=\"onClick\"></canvas>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Home Page Views</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"homeView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" \n" +
    "                    chart-click=\"onClick\"></canvas>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Cart Page Views</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"cartView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" \n" +
    "                    chart-click=\"onClick\"></canvas>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div ng-show=\"isSet(2)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n" +
    "            <h1>Activity this Year</h1>\n" +
    "            <br>\n" +
    "            <div class=\"row\">\n" +
    "                <ul class=\"nav nav-tabs\">\n" +
    "                    <li ng-class=\"{ active: isSet(1) }\">\n" +
    "                        <a href ng-click=\"setTab(1)\">Month</a>\n" +
    "                    </li>\n" +
    "                    <li ng-class=\"{ active: isSet(2) }\">\n" +
    "                        <a href ng-click=\"setTab(2)\">Year</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Sales this Year</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-bar\" chart-type=\"bar\" chart-options=\"optionsMonthTotal\" chart-data=\"totalMonth\" chart-labels=\"labels\" \n" +
    "                chart-legend=\"true\" chart-click=\"onClick\"></canvas>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Home Page Views</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"homeViewMonth\" chart-labels=\"labels\" chart-options=\"optionsMonthViews\" \n" +
    "                chart-click=\"onClick\"></canvas>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Cart Page Views</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"cartViewMonth\" chart-labels=\"labels\" chart-options=\"optionsMonthViews\" \n" +
    "                chart-click=\"onClick\"></canvas>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin-account-settings/admin-account-settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-account-settings/admin-account-settings.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div><h1>Account Settings</h1></div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "        <form name=\"detailForm\">\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.detail\" type=\"{{alert.type}}\" close=\"closeAlert('detail', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"userDetail.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"userDetail.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"userDetail.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.company)}\">\n" +
    "                <label class=\"control-label\" for=\"company\">Company Name:</label>\n" +
    "                <input type=\"text\" name=\"company\" id=\"company\" class=\"form-control\" ng-model=\"userDetail.company\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.phone)}\">\n" +
    "                <label class=\"control-label\" for=\"phone\">Phone:</label>\n" +
    "                <input type=\"text\" name=\"phone\" id=\"phone\" class=\"form-control\" ng-model=\"userDetail.phone\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.zip)}\">\n" +
    "                <label class=\"control-label\" for=\"zip\">Zip:</label>\n" +
    "                <input type=\"text\" name=\"zip\" id=\"zip\" class=\"form-control\" ng-model=\"userDetail.zip\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"submit(detailForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <form name=\"identityForm\">\n" +
    "            <legend>Identity</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.identity\" type=\"{{alert.type}}\" close=\"closeAlert('identity', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"submit(identityForm)\">Update</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <form name=\"passwordForm\">\n" +
    "            <legend>Set Password</legend>\n" +
    "            <alert ng-repeat=\"alert in alerts.pass\" type=\"{{alert.type}}\" close=\"closeAlert('pass', $index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-password\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"submit(passwordForm)\">Set Password</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3\" ng-if=\"social\">\n" +
    "        <legend>Social Connections</legend>\n" +
    "        <alert ng-repeat=\"alert in socialAlerts\" type=\"{{alert.type}}\" close=\"closeSocialAlert($index)\">{{alert.msg}}</alert>\n" +
    "        <a ng-repeat-start=\"(provider, property) in social\" ng-if=\"property.connected\" ng-click=\"disconnect(provider)\" class=\"btn btn-block btn-danger\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> Disconnect {{property.text}}</a>\n" +
    "        <a ng-repeat-end target=\"_self\" href=\"{{property.connect}}\" ng-if=\"!property.connected\" class=\"btn btn-block btn-default\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> Connect {{property.text}}</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("admin/admin-groups/admin-group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-groups/admin-group.tpl.html",
    "<div class=\"row\" id=\"admin-groups-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/admin-groups\">Admin Groups</a> / {{group.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"group.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"permissionForm\"><fieldset>\n" +
    "            <legend>Permissions</legend>\n" +
    "            <alert ng-repeat=\"alert in permissionAlerts\" type=\"{{alert.type}}\" close=\"closePermissionAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">New Setting:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"permission\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"newPermission\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addPermission()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Settings:</label>\n" +
    "                <div class=\"permissions\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"permission in group.permissions\">\n" +
    "                        <input disabled ng-model=\"permission.name\" class=\"form-control\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: permission.permit}\" ng-click=\"togglePermission($index)\">Allow</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: !permission.permit}\" ng-click=\"togglePermission($index)\">Deny</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deletePermission($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"group.permissions.length === 0\">no permissions defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings()\">Save Settings</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteAdminGroup()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin-groups/admin-groups.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin-groups/admin-groups.tpl.html",
    "<div class=\"row\" id=\"admin-groups-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addGroupForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"groupname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addGroupForm)\" ng-click=\"addGroup()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Admin Groups</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"group in groups\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/admin-groups/{{group._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"group.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"group._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"groups.length === 0\">\n" +
    "                <td colspan=\"3\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1>Dashboard</h1>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Home Page Views</h4>\n" +
    "                <br>\n" +
    "                <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"homeView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" chart-click=\"onClick\">\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:15px\">Shopping Cart Views</h4>\n" +
    "                    <br>\n" +
    "                    <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"cartView30Day\" chart-labels=\"labelDay\" chart-options=\"optionsViewsDayTotal\" chart-click=\"onClick\">\n" +
    "                    </div>\n" +
    "                    <br>\n" +
    "                    <div>\n" +
    "                    <h4 class=\"spacing-top-lg spacing-bot-md\" style=\"padding-left:10px\">Recent Purchases</h4>\n" +
    "                        <br>\n" +
    "                        <div class=\"table table-striped\">\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>4 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>12 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "                                <span class=\"pull-right text-muted small\"><em>27 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>43 minutes ago</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "                                <span class=\"pull-right text-muted small\"><em>11:32 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>11:13 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>10:57 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n" +
    "                                <span class=\"pull-right text-muted small\"><em>9:49 AM</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                            <a href=\"#\" class=\"list-group-item\">\n" +
    "                                <i class=\"fa fa-money fa-fw\"></i> Payment Received\n" +
    "                                <span class=\"pull-right text-muted small\"><em>Yesterday</em>\n" +
    "                                </span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "");
}]);

angular.module("admin/administrators/admin-administrator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/administrators/admin-administrator.tpl.html",
    "<div class=\"row\" id=\"admin-administrators-detail\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/administrators\">Administrators</a> / {{administrator.name.full}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"contactForm\"><fieldset>\n" +
    "            <legend>Contact Info</legend>\n" +
    "            <alert ng-repeat=\"alert in contactAlerts\" type=\"{{alert.type}}\" close=\"closeContactAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.first)}\">\n" +
    "                <label class=\"control-label\" for=\"first\">First Name:</label>\n" +
    "                <input type=\"text\" name=\"first\" id=\"first\" class=\"form-control\" ng-model=\"administrator.name.first\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.first, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.middle)}\">\n" +
    "                <label class=\"control-label\" for=\"middle\">Middle Name:</label>\n" +
    "                <input type=\"text\" name=\"middle\" id=\"middle\" class=\"form-control\" ng-model=\"administrator.name.middle\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(contactForm.last)}\">\n" +
    "                <label class=\"control-label\" for=\"last\">Last Name:</label>\n" +
    "                <input type=\"text\" name=\"last\" id=\"last\" class=\"form-control\" ng-model=\"administrator.name.last\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(contactForm.last, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(contactForm)\" ng-click=\"updateAdmin()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"loginForm\"><fieldset>\n" +
    "            <legend>Login</legend>\n" +
    "            <alert ng-repeat=\"alert in loginAlerts\" type=\"{{alert.type}}\" close=\"closeLoginAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': loginForm.newUsername && hasError(loginForm.newUsername)}\">\n" +
    "                <label class=\"control-label\">Username:</label>\n" +
    "                <!-- show this div if there is an user linked to this administrator -->\n" +
    "                <div class=\"input-group\" ng-show=\"administrator.user && administrator.user.name\">\n" +
    "                    <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"administrator.user.name\" disabled>\n" +
    "                    <div class=\"input-group-btn\" >\n" +
    "                        <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkUser()\">Unlink</button>\n" +
    "                        <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/users/{{administrator.user.id}}\">Open</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!-- show this div if there isn't an user linked to this administrator -->\n" +
    "                <div class=\"input-group\" ng-if=\"!(administrator.user && administrator.user.name)\">\n" +
    "                    <input type=\"text\" name=\"newUsername\" placeholder=\"enter a username\" class=\"form-control\" ng-model=\"administrator.newUsername\" required>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(loginForm.newUsername.$dirty && loginForm.newUsername.$valid)\" ng-click=\"linkUser()\">Link</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"help-block\" ng-if=\"!(administrator.user && administrator.user.name)\" ng-show=\"showError(loginForm.newUsername, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"groupForm\"><fieldset>\n" +
    "            <legend>Groups</legend>\n" +
    "            <alert ng-repeat=\"alert in groupAlerts\" type=\"{{alert.type}}\" close=\"closeGroupAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Add Membership:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <select name=\"newMembership\" class=\"form-control\" ng-options=\"group as group.name for group in groups\" ng-model=\"selectedNewGroup\"></select>\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addGroup()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">Memberships:</label>\n" +
    "                <div class=\"groups\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"group in administrator.groups\">\n" +
    "                        <input disabled class=\"form-control\" ng-model=\"group.name\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteGroup($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"administrator.groups.length === 0\">no memberships defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveGroups()\">Save Groups</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"permissionForm\"><fieldset>\n" +
    "            <legend>Permissions</legend>\n" +
    "            <alert ng-repeat=\"alert in permissionAlerts\" type=\"{{alert.type}}\" close=\"closePermissionAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\">New Setting:</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"permission\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"newPermission\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button type=\"button\" class=\"btn btn-success\" ng-click=\"addPermission()\">Add</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>Settings:</label>\n" +
    "                <div class=\"permissions\">\n" +
    "                    <div class=\"input-group\" ng-repeat=\"permission in administrator.permissions\">\n" +
    "                        <input disabled ng-model=\"permission.name\" class=\"form-control\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: permission.permit}\" ng-click=\"togglePermission($index)\">Allow</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\" ng-class=\"{disabled: !permission.permit}\" ng-click=\"togglePermission($index)\">Deny</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deletePermission($index)\"><i class=\"fa fa-trash-o fa-inverse\"></i></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"badge\" ng-show=\"administrator.permissions.length === 0\">no permissions defined</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"saveSettings()\">Save Settings</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteAdministrator()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("admin/administrators/admin-administrators.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/administrators/admin-administrators.tpl.html",
    "<div class=\"row\" id=\"admin-administrators-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addAdminForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"enter a name\" class=\"form-control\" ng-model=\"fullname\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addAdminForm)\" ng-click=\"addAdmin()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Administrators</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"search\" type=\"text\" class=\"form-control\" ng-model=\"filters.search\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"administrator in administrators\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/administrators/{{administrator._id}}\">Edit</a></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"administrator.name.full\"></td>\n" +
    "                <td ng-bind=\"administrator._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"administrators.length === 0\">\n" +
    "                <td colspan=\"3\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/developers/developers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/developers/developers.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1>API/Developers</h1>\n" +
    "            <p style=\"padding-left: 1.8em\">Number of Developers: 8</p>\n" +
    "            <div>\n" +
    "                <p class=\"pull-right\" style=\"padding-right: 3.8em\">API Calls Last Month: 18<br>API Calls Last Year: 180</p>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4>30 Day API Calculations</h4>\n" +
    "                <br>\n" +
    "                <div\n" +
    "                    area-chart\n" +
    "                    area-data='[\n" +
    "                    { y: \"2006\", a: 100},\n" +
    "                    { y: \"2007\", a: 75},\n" +
    "                    { y: \"2008\", a: 50},\n" +
    "                    { y: \"2009\", a: 75},\n" +
    "                    { y: \"2010\", a: 50},\n" +
    "                    { y: \"2011\", a: 75},\n" +
    "                    { y: \"2012\", a: 100}\n" +
    "                    ]'\n" +
    "                    area-xkey='y'\n" +
    "                    area-ykeys='[\"a\"]'\n" +
    "                    area-labels='[\"Month\"]'\n" +
    "                    line-colors='[\"#89b4f9\"]'>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "                <h4>12 Month API Calls</h4>\n" +
    "                <br>\n" +
    "                <div bar-chart bar-data='[\n" +
    "                    { y: \"2009\", a: 75,  b: 65 },\n" +
    "                    { y: \"2010\", a: 50,  b: 40 },\n" +
    "                    { y: \"2011\", a: 75,  b: 65 },\n" +
    "                    { y: \"2012\", a: 100, b: 90 }\n" +
    "                    ]' bar-x='y' bar-y='[\"a\", \"b\"]' bar-labels='[\"Year\", \"Month\"]' bar-colors='[\"#89b4f9\", \"#5f7dae\"]'>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "    <br>\n" +
    "    <div class=\"table-responsive\">\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>ID</th>\n" +
    "                    <th>Name</th>\n" +
    "                    <th>Company</th>\n" +
    "                    <th>Number of API Calls</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td>12</td>\n" +
    "                    <td>Website</td>\n" +
    "                    <td>Company One</td>\n" +
    "                    <td>22</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>23</td>\n" +
    "                    <td>Website</td>\n" +
    "                    <td>Company One</td>\n" +
    "                    <td>12</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>31</td>\n" +
    "                    <td>Website</td>\n" +
    "                    <td>Company Two</td>\n" +
    "                    <td>5</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/purchase-history/admin-purchase-histories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/purchase-history/admin-purchase-histories.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 class=\"spacing-bot-lg\">Purchase History</h1>\n" +
    "            <br>\n" +
    "            <div class=\"sidebar-search spacing-bot-lg\" style=\"width: 30%; float:right;\">\n" +
    "                <div class=\"input-group custom-search-form\">\n" +
    "                    <input name=\"orderNumber\" type=\"text\" class=\"form-control\" ng-model=\"filters.orderNumber\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\" placeholder=\"Search\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" type=\"button\">\n" +
    "                            <i class=\"fa fa-search\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <div>\n" +
    "            <br>\n" +
    "                <table class=\"table table-striped\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Date</th>\n" +
    "                            <th>Company</th>\n" +
    "                            <th>Customer</th>\n" +
    "                            <th>Customer ID</th>\n" +
    "                            <th>Shipping State</th>\n" +
    "                            <th>Purchase Amount</th>\n" +
    "                            <th>Transaction ID</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <!-- <tr ng-repeat=\"user in users\" ng-click=\"goToUser();\"> -->\n" +
    "                        <tr ng-repeat=\"ph in phList\" ng-click=\"goToPH();\">\n" +
    "                            <!-- <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/users/{{user._id}}\">Edit</a></td> -->\n" +
    "                            <td>{{ph.orderDate | date:\"MM/dd/yyyy\"}}</td>\n" +
    "                            <td ng-bind=\"ph.company\"></td>\n" +
    "                            <td ng-bind=\"ph.user.name\"></td>\n" +
    "                            <td ng-bind=\"ph.user._id\"></td>\n" +
    "                            <td></td>\n" +
    "                            <td>${{ph.cost.total}}</td>\n" +
    "                            <td ng-bind=\"ph.orderNumber\"></td>\n" +
    "                        </tr>\n" +
    "                        <tr ng-show=\"phList.length === 0\">\n" +
    "                            <td colspan=\"5\">no documents matched</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "                    <div class=\"btn-group pull-left\">\n" +
    "                        <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                        <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-group pull-right\">\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                        <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/purchase-history/admin-purchase-histories2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/purchase-history/admin-purchase-histories2.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "   \n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <h1 >Purchase History</h1>\n" +
    "            <br>\n" +
    "             <div class=\"sidebar-search\" style=\"width: 30%;\">\n" +
    "                <div class=\"input-group custom-search-form\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <button class=\"btn btn-default\" type=\"button\">\n" +
    "                            <i class=\"fa fa-search\"></i>\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            \n" +
    "            <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    Purchase History\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\">\n" +
    "                    <table width=\"100%\" class=\"table table-striped table-hover\" id=\"dataTables-example\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Date</th>\n" +
    "                                <th>Customer</th>\n" +
    "                                <th>Company</th>\n" +
    "                                <th>Purchase Amount</th>\n" +
    "                                <th>Transaction #</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr class=\"odd gradeX\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 4.0</td>\n" +
    "                                <td>Win 95+</td>\n" +
    "                                <td class=\"center\">4</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"even gradeC\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 5.0</td>\n" +
    "                                <td>Win 95+</td>\n" +
    "                                <td class=\"center\">5</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"odd gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 5.5</td>\n" +
    "                                <td>Win 95+</td>\n" +
    "                                <td class=\"center\">5.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"even gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 6</td>\n" +
    "                                <td>Win 98+</td>\n" +
    "                                <td class=\"center\">6</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"odd gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>Internet Explorer 7</td>\n" +
    "                                <td>Win XP SP2+</td>\n" +
    "                                <td class=\"center\">7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"even gradeA\">\n" +
    "                                <td>Trident</td>\n" +
    "                                <td>AOL browser (AOL desktop)</td>\n" +
    "                                <td>Win XP</td>\n" +
    "                                <td class=\"center\">6</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 1.0</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 1.5</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 2.0</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Firefox 3.0</td>\n" +
    "                                <td>Win 2k+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">1.9</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Camino 1.0</td>\n" +
    "                                <td>OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Camino 1.5</td>\n" +
    "                                <td>OSX.3+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Netscape 7.2</td>\n" +
    "                                <td>Win 95+ / Mac OS 8.6-9.2</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Netscape Browser 8</td>\n" +
    "                                <td>Win 98SE+</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Netscape Navigator 9</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.0</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.1</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.2</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.2</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.3</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.3</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.4</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.4</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.5</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.6</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.6</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.7</td>\n" +
    "                                <td>Win 98+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.7</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Mozilla 1.8</td>\n" +
    "                                <td>Win 98+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Seamonkey 1.1</td>\n" +
    "                                <td>Win 98+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Gecko</td>\n" +
    "                                <td>Epiphany 2.20</td>\n" +
    "                                <td>Gnome</td>\n" +
    "                                <td class=\"center\">1.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 1.2</td>\n" +
    "                                <td>OSX.3</td>\n" +
    "                                <td class=\"center\">125.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 1.3</td>\n" +
    "                                <td>OSX.3</td>\n" +
    "                                <td class=\"center\">312.8</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 2.0</td>\n" +
    "                                <td>OSX.4+</td>\n" +
    "                                <td class=\"center\">419.3</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>Safari 3.0</td>\n" +
    "                                <td>OSX.4+</td>\n" +
    "                                <td class=\"center\">522.1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>OmniWeb 5.5</td>\n" +
    "                                <td>OSX.4+</td>\n" +
    "                                <td class=\"center\">420</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>iPod Touch / iPhone</td>\n" +
    "                                <td>iPod</td>\n" +
    "                                <td class=\"center\">420.1</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Webkit</td>\n" +
    "                                <td>S60</td>\n" +
    "                                <td>S60</td>\n" +
    "                                <td class=\"center\">413</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 7.0</td>\n" +
    "                                <td>Win 95+ / OSX.1+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 7.5</td>\n" +
    "                                <td>Win 95+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 8.0</td>\n" +
    "                                <td>Win 95+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 8.5</td>\n" +
    "                                <td>Win 95+ / OSX.2+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 9.0</td>\n" +
    "                                <td>Win 95+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 9.2</td>\n" +
    "                                <td>Win 88+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera 9.5</td>\n" +
    "                                <td>Win 88+ / OSX.3+</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Opera for Wii</td>\n" +
    "                                <td>Wii</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Nokia N800</td>\n" +
    "                                <td>N800</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Presto</td>\n" +
    "                                <td>Nintendo DS browser</td>\n" +
    "                                <td>Nintendo DS</td>\n" +
    "                                <td class=\"center\">8.5</td>\n" +
    "                                <td class=\"center\">C/A<sup>1</sup>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>KHTML</td>\n" +
    "                                <td>Konqureror 3.1</td>\n" +
    "                                <td>KDE 3.1</td>\n" +
    "                                <td class=\"center\">3.1</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>KHTML</td>\n" +
    "                                <td>Konqureror 3.3</td>\n" +
    "                                <td>KDE 3.3</td>\n" +
    "                                <td class=\"center\">3.3</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>KHTML</td>\n" +
    "                                <td>Konqureror 3.5</td>\n" +
    "                                <td>KDE 3.5</td>\n" +
    "                                <td class=\"center\">3.5</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Tasman</td>\n" +
    "                                <td>Internet Explorer 4.5</td>\n" +
    "                                <td>Mac OS 8-9</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Tasman</td>\n" +
    "                                <td>Internet Explorer 5.1</td>\n" +
    "                                <td>Mac OS 7.6-9</td>\n" +
    "                                <td class=\"center\">1</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Tasman</td>\n" +
    "                                <td>Internet Explorer 5.2</td>\n" +
    "                                <td>Mac OS 8-X</td>\n" +
    "                                <td class=\"center\">1</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>NetFront 3.1</td>\n" +
    "                                <td>Embedded devices</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeA\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>NetFront 3.4</td>\n" +
    "                                <td>Embedded devices</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">A</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>Dillo 0.8</td>\n" +
    "                                <td>Embedded devices</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>Links</td>\n" +
    "                                <td>Text only</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeX\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>Lynx</td>\n" +
    "                                <td>Text only</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">X</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>IE Mobile</td>\n" +
    "                                <td>Windows Mobile 6</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeC\">\n" +
    "                                <td>Misc</td>\n" +
    "                                <td>PSP browser</td>\n" +
    "                                <td>PSP</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">C</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"gradeU\">\n" +
    "                                <td>Other browsers</td>\n" +
    "                                <td>All others</td>\n" +
    "                                <td>-</td>\n" +
    "                                <td class=\"center\">-</td>\n" +
    "                                <td class=\"center\">U</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/purchase-history/admin-purchase-history.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/purchase-history/admin-purchase-history.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "<div id=\"admin-purchase-history-single\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div>\n" +
    "            <!-- <h1><a ng-href=\"/admin/purchase-history\">Purchase Record</a> / {{phDetail.orderNumber}}</h1> -->\n" +
    "            <h1>Purchase Record</h1>\n" +
    "        </div>\n" +
    "        \n" +
    "        <p style=\"padding-left: .8em\">Date: <span ng-bind=\"phDetail.orderDate | date:'MM/dd/yyyy'\"/>\n" +
    "        <br>Customer: <span ng-bind=\"phDetail.user.name\"/>\n" +
    "        <br>Company: <span ng-bind=\"phDetail.company\"/></p>\n" +
    "\n" +
    "        <br>\n" +
    "        <p style=\"padding-left: .8em\">Transaction Number: {{phDetail.orderNumber}}\n" +
    "        <br>Purchase Amount: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "        <br>Payment Method: <span ng-bind=\"phDetail.paymentMethod\"/></p>\n" +
    "\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <h4>Order</h4>\n" +
    "        <div class=\"panel panel-default\">\n" +
    "                    <!-- <div class=\"panel-heading\">\n" +
    "                        Order\n" +
    "                    </div> -->\n" +
    "            <div class=\"panel-body\">\n" +
    "                    <table width=\"100%\" class=\"table\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Item</th>\n" +
    "                                <th>Unit Cost</th>\n" +
    "                                <th>Quantity</th>\n" +
    "                                <th>Total</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        \n" +
    "                        <tbody>\n" +
    "                            <tr class=\"odd gradeX\">\n" +
    "                                <td> Cable </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                                <td> 1 </td>\n" +
    "                                <td ng-bind=\"phDetail.cost.raw | currency\"></td>\n" +
    "                            </tr>\n" +
    "                            \n" +
    "                        </tbody>\n" +
    "                        <tfoot>\n" +
    "                            <tr>\n" +
    "                                <td class=\"align-right\" colspan=\"6\">\n" +
    "                                    <p>\n" +
    "                                        Shipping cost: <span ng-bind=\"phDetail.cost.shipping | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Taxes: <span ng-bind=\"phDetail.cost.tax | currency\"/>\n" +
    "                                    <br>\n" +
    "                                        Total: <span ng-bind=\"phDetail.cost.total | currency\"/>\n" +
    "                                    </p>\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </tfoot>\n" +
    "                    </table>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <br>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!-- <form name=\"identityForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"orderNumber\">Order Number:</label>\n" +
    "                <input type=\"text\" name=\"orderNumber\" id=\"orderNumber\" class=\"form-control\" ng-model=\"phDetail.orderNumber\" required server-error>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"orderDate\">Order Date:</label>\n" +
    "                <input type=\"text\" name=\"orderDate\" id=\"orderDate\" class=\"form-control\" ng-model=\"phDetail.orderDate\" required server-error>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"cost\">Cost:</label>\n" +
    "                <input type=\"text\" name=\"cost\" id=\"cost\" class=\"form-control\" ng-model=\"phDetail.cost.total\" required server-error>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"updateIdentity()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form> -->\n" +
    "\n" +
    "        <!-- <form name=\"deleteForm\"><fieldset>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteUser()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form> -->\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("admin/statuses/admin-status.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/statuses/admin-status.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <h1><a href=\"/admin/statuses\">Statuses</a> / {{status.name}}</h1>\n" +
    "        </div>\n" +
    "        <form name=\"detailForm\"><fieldset>\n" +
    "            <legend>Details</legend>\n" +
    "            <alert ng-repeat=\"alert in detailAlerts\" type=\"{{alert.type}}\" close=\"closeDetailAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.pivot)}\">\n" +
    "                <label class=\"control-label\" for=\"pivot\">pivot:</label>\n" +
    "                <input type=\"text\" name=\"pivot\" id=\"pivot\" class=\"form-control\" ng-model=\"status.pivot\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.pivot, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(detailForm.name)}\">\n" +
    "                <label class=\"control-label\" for=\"name\">Name:</label>\n" +
    "                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"status.name\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(detailForm.name, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(detailForm)\" ng-click=\"update()\">Update</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "        <form name=\"deleteForm\"><fieldset>\n" +
    "            <legend>Danger Zone</legend>\n" +
    "            <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span class=\"help-block\">\n" +
    "                    <span class=\"label label-danger\">If you do this, it cannot be undone.</span>&nbsp;<span class=\"text-muted\">You may also create orphaned document relationships too.</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-delete\" ng-click=\"deleteStatus()\">Delete</button>\n" +
    "            </div>\n" +
    "        </fieldset></form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/statuses/admin-statuses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/statuses/admin-statuses.tpl.html",
    "<div class=\"row\" id=\"admin-statuses-index\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"page-header\">\n" +
    "            <form class=\"form-inline pull-right\" name=\"addStatusForm\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input name=\"pivot\" type=\"text\" placeholder=\"pivot\" class=\"form-control\" ng-model=\"add.pivot\" required>\n" +
    "                    <input name=\"name\" type=\"text\" placeholder=\"name\" class=\"form-control\" ng-model=\"add.name\" required>\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(addStatusForm)\" ng-click=\"addStatus()\">Add New</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <h1>Statuses</h1>\n" +
    "        </div>\n" +
    "        <form class=\"filters\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Pivot Search</label>\n" +
    "                    <input name=\"pivot\" type=\"text\" class=\"form-control\" ng-model=\"filters.pivot\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Name Search</label>\n" +
    "                    <input name=\"name\" type=\"text\" class=\"form-control\" ng-model=\"filters.name\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\">\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Sort By</label>\n" +
    "                    <select name=\"sort\" class=\"form-control\" ng-model=\"filters.sort\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"sort.value as sort.label for sort in sorts\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"_id\">id &#9650;</option>-->\n" +
    "                        <!--<option value=\"-_id\">id &#9660;</option>-->\n" +
    "                        <!--<option value=\"name\">name &#9650;</option>-->\n" +
    "                        <!--<option value=\"-name\">name &#9660;</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <label>Limit</label>\n" +
    "                    <select name=\"limit\" class=\"form-control\" ng-model=\"filters.limit\" ng-model-options=\"{ debounce: 500 }\" ng-options=\"limit.value as limit.label for limit in limits\" ng-change=\"filtersUpdated()\">\n" +
    "                        <!--<option value=\"10\">10 items</option>-->\n" +
    "                        <!--<option value=\"20\" selected=\"selected\">20 items</option>-->\n" +
    "                        <!--<option value=\"50\">50 items</option>-->\n" +
    "                        <!--<option value=\"100\">100 items</option>-->\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "            <tr>\n" +
    "                <th></th>\n" +
    "                <th>pivot</th>\n" +
    "                <th class=\"stretch\">name</th>\n" +
    "                <th>id</th>\n" +
    "            </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"status in statuses\">\n" +
    "                <td><a class=\"btn btn-default btn-sm\" ng-href=\"/admin/statuses/{{status._id}}\">Edit</a></td>\n" +
    "                <td ng-bind=\"status.pivot\"></td>\n" +
    "                <td ng-bind=\"status.name\"></td>\n" +
    "                <td class=\"nowrap\" ng-bind=\"status._id\"></td>\n" +
    "            </tr>\n" +
    "            <tr ng-show=\"statuses.length === 0\">\n" +
    "                <td colspan=\"4\">no documents matched</td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "            <div class=\"btn-group pull-left\">\n" +
    "                <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "            </div>\n" +
    "            <div class=\"btn-group pull-right\">\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/users/admin-user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/admin-user.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div class=\"row\" id=\"admin-users-detail\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div>\n" +
    "                <h1><a ng-href=\"/admin/users\">Users</a> / {{user.username}}</h1>\n" +
    "            </div>\n" +
    "            <form name=\"identityForm\"><fieldset>\n" +
    "                <legend>Identity</legend>\n" +
    "                <alert ng-repeat=\"alert in identityAlerts\" type=\"{{alert.type}}\" close=\"closeIdentityAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.isActive)}\">\n" +
    "                    <label class=\"control-label\" for=\"isActive\">Is Active:</label>\n" +
    "                    <select name=\"isActive\" id=\"isActive\" class=\"form-control\" ng-model=\"user.isActive\" ng-options=\"active for active in isActives\" server-error></select>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.isActive, 'server')\">{{errfor.isActive}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.username)}\">\n" +
    "                    <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                    <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(identityForm.email)}\">\n" +
    "                    <label class=\"control-label\" for=\"email\">Email:</label>\n" +
    "                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'required')\">This field is required</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(identityForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(identityForm)\" ng-click=\"updateIdentity()\">Update</button>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "            <form name=\"roleForm\"><fieldset>\n" +
    "                <legend>Roles</legend>\n" +
    "                <alert ng-repeat=\"alert in roleAlerts\" type=\"{{alert.type}}\" close=\"closeRoleAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': roleForm.newAdminId && hasError(roleForm.newAdminId)}\">\n" +
    "                    <label class=\"control-label\">Admin:</label>\n" +
    "                    <!-- show this div if there is an admin linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-show=\"user.roles && user.roles.admin\">\n" +
    "                        <input type=\"text\" name=\"adminId\" class=\"form-control\" ng-model=\"user.roles.admin.name.full\" disabled>\n" +
    "                        <div class=\"input-group-btn\" >\n" +
    "                            <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkAdmin()\">Unlink</button>\n" +
    "                            <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/administrators/{{user.roles.admin._id}}\">Open</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- show this div if there isn't an admin linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-if=\"!(user.roles && user.roles.admin)\">\n" +
    "                        <input type=\"text\" name=\"newAdminId\" placeholder=\"enter admin id\" class=\"form-control\" ng-model=\"role.newAdminId\" required>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(roleForm.newAdminId.$dirty && roleForm.newAdminId.$valid)\" ng-click=\"linkAdmin()\">Link</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"help-block\" ng-if=\"!(user.roles && user.roles.admin)\" ng-show=\"showError(roleForm.newAdminId, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': roleForm.newAccountId && hasError(roleForm.newAccountId)}\">\n" +
    "                    <label class=\"control-label\">Account:</label>\n" +
    "                    <!-- show this div if there is an account linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-show=\"user.roles && user.roles.account\">\n" +
    "                        <input type=\"text\" name=\"accountId\" class=\"form-control\" ng-model=\"user.roles.account.name.full\" disabled>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-warning\" ng-click=\"unlinkAccount()\">Unlink</button>\n" +
    "                            <a type=\"button\" class=\"btn btn-default\" ng-href=\"/admin/accounts/{{user.roles.account._id}}\">Open</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <!-- show this div if there isn't an account linked to this user -->\n" +
    "                    <div class=\"input-group\" ng-if=\"!(user.roles && user.roles.account)\">\n" +
    "                        <input type=\"text\" name=\"newAccountId\" placeholder=\"enter account id\" class=\"form-control\" ng-model=\"role.newAccountId\" required>\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button type=\"button\" class=\"btn btn-success\" ng-disabled=\"!(roleForm.newAccountId.$dirty && roleForm.newAccountId.$valid)\" ng-click=\"linkAccount()\">Link</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"help-block\" ng-if=\"!(user.roles && user.roles.account)\" ng-show=\"showError(roleForm.newAccountId, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "            <form name=\"passwordForm\"><fieldset>\n" +
    "                <legend>Set Password</legend>\n" +
    "                <alert ng-repeat=\"alert in passwordAlerts\" type=\"{{alert.type}}\" close=\"closePasswordAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.password)}\">\n" +
    "                    <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"pass.newPassword\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.password, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-class=\"{'has-error': hasError(passwordForm.confirm)}\">\n" +
    "                    <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                    <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"pass.confirm\" required>\n" +
    "                    <span class=\"help-block\" ng-show=\"showError(passwordForm.confirm, 'required')\">This field is required</span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canSave(passwordForm)\" ng-click=\"setPassword()\">Set Password</button>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "            <form name=\"deleteForm\"><fieldset>\n" +
    "                <alert ng-repeat=\"alert in deleteAlerts\" type=\"{{alert.type}}\" close=\"closeDeleteAlert($index)\">{{alert.msg}}</alert>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <span class=\"help-block\">\n" +
    "                        <span class=\"label label-danger\">If you do this, it cannot be undone.</span>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteUser()\">Delete</button>\n" +
    "                </div>\n" +
    "            </fieldset></form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("admin/users/admin-users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users/admin-users.tpl.html",
    "<div id=\"page-wrapper\">\n" +
    "    <div id=\"admin-users-index\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12\">\n" +
    "                <h1>Customer Information</h1>\n" +
    "                <br>\n" +
    "                <p style=\"padding-left:15px\">Number of Customer Accounts: {{numberOfCustomers}}</p>\n" +
    "                <div class=\"sidebar-search\" style=\"width: 30%;float:right\">\n" +
    "                    <div class=\"input-group custom-search-form\">\n" +
    "                        <input name=\"username\" type=\"text\" class=\"form-control\" ng-model=\"filters.username\" ng-model-options=\"{ debounce: 500 }\" ng-change=\"filtersUpdated()\" placeholder=\"Search...\">\n" +
    "                        <div class=\"input-group-btn\">\n" +
    "                            <button class=\"btn btn-default\" type=\"button\">\n" +
    "                                <i class=\"fa fa-search\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <div>\n" +
    "                    <h4>User Information</h4>\n" +
    "                    <br>\n" +
    "                    <table class=\"table table-striped\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Username</th>\n" +
    "                                <th>Name</th>\n" +
    "                                <th>Company</th>\n" +
    "                                <th>Number of Purchases</th>\n" +
    "                                <th>Total Purchase Amount</th>\n" +
    "                                \n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <!-- <tr ng-repeat=\"account in accounts\" ng-click=\"goToAccount();\"> -->\n" +
    "                            <tr ng-repeat=\"account in accounts\" ng-click=\"accountPurchases();\">\n" +
    "                                <td ng-bind=\"account.user.name\"></td>\n" +
    "                                <td ng-bind=\"account.name.full\"></td>\n" +
    "                                <td ng-bind=\"account.company\"></td>\n" +
    "                                <td class=\"stretch\" ng-bind=\"account.purchaseHistoryLog.length\"></td>\n" +
    "                                <td ng-bind=\"account.purchaseAmount\"></td>\n" +
    "                            </tr>\n" +
    "                            <tr ng-show=\"users.length === 0\">\n" +
    "                                <td colspan=\"5\">no documents matched</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                    <div class=\"well\" ng-if=\"pages.total > 1\">\n" +
    "                        <div class=\"btn-group pull-left\">\n" +
    "                            <button disabled class=\"btn btn-default\">Page {{pages.current}} of {{pages.total}}</button>\n" +
    "                            <button disabled class=\"btn btn-default\">Rows {{items.begin}} - {{items.end}} of {{items.total}}</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-group pull-right\">\n" +
    "                            <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasPrev}\" ng-click=\"prev()\">Prev</button>\n" +
    "                            <button class=\"btn btn-default\" ng-class=\"{disabled: !pages.hasNext}\" ng-click=\"next()\"> Next</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact.tpl.html",
    "<div role=\"main\" class=\"main\">\n" +
    "\n" +
    "    <div class=\"container\"><div class=\"row\"></div></div>\n" +
    "\n" +
    "    <ng-map style=\"width:100%; height: 55%; position: absolute; background-color: rgb(229, 227, 223); left: 0px; top: 0px; overflow: hidden; z-index: 0;\" zoom=\"15\" center=\"[21.309063, -157.860265]\">\n" +
    "        <marker position=\"1003 Bishop St Suite 2020, Honolulu, HI 96813\"\n" +
    "        title=\"Pauahi Tower Office\"\n" +
    "        centered=\"true\"></marker>\n" +
    "    </ng-map>\n" +
    "\n" +
    "    <div class=\"container\"><div class=\"row\"></div></div>\n" +
    "\n" +
    "    <div class=\"container\" style=\"margin-top: 30%;\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "\n" +
    "                <h2 class=\"mb-sm mt-sm\"><strong>Contact</strong> Us</h2>\n" +
    "                \n" +
    "                <form name=\"msgForm\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(msgForm.name)}\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <label class=\"control-label\" for=\"name\">Your name *</label>\n" +
    "                                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"msg.name\" required>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.name, 'required')\">Please enter your name.</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(msgForm.email)}\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <label class=\"control-label\" for=\"email\">Your email address *</label>\n" +
    "                                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"msg.email\" required>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.email, 'required')\">Email address is required.</span>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group\" ng-class=\"{'has-error': hasError(msgForm.message)}\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <label class=\"control-label\" for=\"message\">Message *</label>\n" +
    "                                <textarea name=\"message\" id=\"message\" rows=\"5\" class=\"form-control\" ng-model=\"msg.message\" required></textarea>\n" +
    "                                <span class=\"help-block\" ng-show=\"showError(msgForm.message, 'required')\">Please enter your message.</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <button type=\"button\" class=\"btn btn-primary btn-contact\" ng-disabled=\"!canSave(msgForm)\" ng-click=\"submit()\">Send Message</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div> \n" +
    "\n" +
    "            <div class=\"col-md-5 col-md-offset-1\">\n" +
    "\n" +
    "                <h4 class=\"heading-primary mt-lg\">Get in <strong>Touch</strong></h4>\n" +
    "                <p>Thank you for your interest in SafeConnect Solar! If you would like to contact us, either use the contact form or send us an email at <a href=\"mailto:info@safeconnectsolar.com\">info@safeconnectsolar.com</a>. </p>\n" +
    "\n" +
    "                <hr>\n" +
    "\n" +
    "                <ul class=\"list list-icons list-icons-style-3 mt-xlg\">\n" +
    "                    <li><i class=\"fa fa-envelope\"></i> <strong>Email:</strong> <a href=\"mailto:info@safeconnectsolar.com\">info@safeconnectsolar.com</a></li>\n" +
    "                    <li><i class=\"fa fa-map-marker\"></i> <strong>Address:</strong> 1003 Bishop Street, Suite 2020, Honolulu, HI 96813, United States</li>\n" +
    "                    \n" +
    "                </ul>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer.tpl.html",
    "<div ng-controller=\"FooterCtrl\">\n" +
    "	<footer id=\"footer\" class=\"light\">\n" +
    "	    \n" +
    "		<div class=\"footer-copyright\">\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"row\">\n" +
    "	                <div class=\"col-xs-5\">\n" +
    "	                    <span>© Copyright 2016. All Rights Reserved.</span>\n" +
    "	                </div>\n" +
    "	                \n" +
    "					<div class=\"col-xs-7 col-xs-offset-0 text-right\">\n" +
    "						<a href=\"/\" class=\"logo footer-logo\">\n" +
    "							<img alt=\"Porto Website Template\" class=\"img-responsive\" src=\"img/sc_logo.png\">\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</footer>\n" +
    "</div>");
}]);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "    <header hl-sticky=\"\">\n" +
    "    <div id=\"header\" class=\"header-narrow\" ng-if=\"!isAdmin()\">\n" +
    "        <div class=\"header-body\"  style=\"color:#ffffff\">\n" +
    "            <div class=\"header-container container\">\n" +
    "                <div class=\"header-row\">\n" +
    "                    <div class=\"header-column\">\n" +
    "                        <div class=\"header-logo\">\n" +
    "                            <a href=\"/\">\n" +
    "                                <img alt=\"SafeConnect Solar\" width=\"\" height=\"40\" src=\"img/sc_logo.png\">\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"header-column\">\n" +
    "                        <div class=\"header-row\">\n" +
    "                            <div class=\"header-nav header-nav-top-line\">\n" +
    "                                <button class=\"btn header-btn-collapse-nav\" ng-init=\"menuCollapsed = true\" ng-click=\"menuCollapsed = !menuCollapsed\">\n" +
    "                                    <i class=\"fa fa-bars\"></i>\n" +
    "                                </button>\n" +
    "\n" +
    "                                <div class=\"header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse\" collapse=\"menuCollapsed\" ng-click=\"menuCollapsed = true\">\n" +
    "                                    <nav>\n" +
    "                                        <ul class=\"nav nav-pills\" id=\"mainNav\">\n" +
    "                                            <li ng-class=\"{active: isActive('/')}\"><a href=\"/\">Home</a></li>\n" +
    "                                            <li ng-class=\"{active: isActive('/specs')}\"><a href=\"/specs\">Product Details</a></li>\n" +
    "                                            <li class=\"dropdown\">\n" +
    "                                                <a href=\"/pricing/information\" class=\"dropdown-toggle\">Pricing / Purchase</a>\n" +
    "                                                <ul class=\"dropdown-menu\">\n" +
    "                                                    <li ><a href=\"/pricing/information\">What Do I Need For My Installation?</a></li>\n" +
    "                                                    <li><a href=\"/pricing\">Pricing/Purchasing</a></li>\n" +
    "                                                </ul>\n" +
    "                                            </li>\n" +
    "                                            <li ng-class=\"{active: isActive('/about')}\"><a href=\"/about\">About Us</a></li>\n" +
    "                                            <li ng-class=\"{active: isActive('/contact')}\"><a href=\"/contact\">Contact</a></li>\n" +
    "                                            <li ng-if=\"isAuthenticated()\" class=\"dropdown\">\n" +
    "                                                <a href=\"/account/settings\" class=\"dropdown-toggle\">My Account</a>\n" +
    "                                                <ul href=\"/account/purchaseHistory\" ng-if=\"isAuthenticated()\" class=\"dropdown-menu\">\n" +
    "                                                    <li ng-if=\"isAuthenticated()\" ><a href=\"/account/purchaseHistory\">Purchase History</a></li>\n" +
    "                                                    <li ng-if=\"isAuthenticated()\" ><a href=\"/account/settings\">Settings</a></li>\n" +
    "                                                    <li ng-if=\"isAuthenticated()\"><a href=\"\" ng-click=\"logout()\">Sign Out</a></li>\n" +
    "                                                </ul>\n" +
    "                                            </li>\n" +
    "\n" +
    "                                            \n" +
    "                                            <li ng-if=\"!isAuthenticated()\"><a href=\"/login\"><i class=\"fa fa-user\"></i> My Account</a></li>\n" +
    "                                            \n" +
    "                                        </ul>\n" +
    "                                        \n" +
    "                                    </nav>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        </div>\n" +
    "        <div class=\"header-narrow\" ng-if=\"isAdmin()\" ng-controller=\"AdminHeaderCtrl\">\n" +
    "            <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n" +
    "                <div class=\"navbar-header\">\n" +
    "                        <div class=\"header-logo\">\n" +
    "                            <a href=\"/admin\">\n" +
    "                                <img alt=\"SafeConnect Solar\" width=\"\" height=\"40\" src=\"img/sc_logo.png\">\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"navbar-form navbar-right\">\n" +
    "                        <div ng-if=\"isAuthenticated()\" class=\"header-nav header-nav-top-line\">\n" +
    "                            <a href=\"/admin/admin-account-settings/\">{{name}}&nbsp&nbsp&nbsp</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </nav>\n" +
    "            </div>\n" +
    "    </header>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/forgot/login-forgot.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/forgot/login-forgot.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div><h1>Forgot Your Password?</h1></div>\n" +
    "        <form name=\"loginForgotForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForgotForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Enter Your Email:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForgotForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForgotForm.email, 'email')\">Please enter a valid email</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-forgot\" ng-disabled=\"!canSave(loginForgotForm)\" ng-click=\"submit()\">Send Reset</button>\n" +
    "                &nbsp;<a href=\"/login\" class=\"btn btn-link\">Back to Login</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div class=\"header\"><h1><strong>Sign In</strong></h1></div>\n" +
    "        <form name=\"loginForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username or Email:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error onkeydown = \"if (event.keyCode == 13)\n" +
    "                        document.getElementById('Submit').click()\">\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(loginForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required server-error onkeydown = \"if (event.keyCode == 13)\n" +
    "                        document.getElementById('Submit').click()\">\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.password, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(loginForm.password, 'server')\">{{errfor.password}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" id=\"Submit\" class=\"btn btn-primary btn-login\" ng-disabled=\"!canSave(loginForm)\" ng-click=\"submit()\">Sign In</button>\n" +
    "                <!--<button type=\"button\" class=\"btn btn-primary btn-login\">Sign In</button>-->\n" +
    "                &nbsp;<a href=\"/login/forgot\" class=\"btn btn-link\">Forgot your password?</a>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <span>Don't have an account?</span>\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-login\" ng-click=\"signUp()\">Create An Account</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div ng-if=\"social\">\n" +
    "            <hr>\n" +
    "            <p>Or sign in using...</p>\n" +
    "            <div class=\"btn-group btn-group-justified\">\n" +
    "                <a ng-repeat=\"(provider, property) in social\" ng-href=\"{{property.login}}\" target=\"_self\" class=\"btn btn-info\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> {{property.text}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("login/reset/login-reset.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/reset/login-reset.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <div><h1>Reset Your Password</h1></div>\n" +
    "        <form name=\"resetForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetForm.password)}\" ng-show=\"(id && email && !success)\">\n" +
    "                <label class=\"control-label\" for=\"password\">New Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(resetForm.password, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(resetForm.confirm)}\" ng-show=\"(id && email && !success)\">\n" +
    "                <label class=\"control-label\" for=\"confirm\">Confirm Password:</label>\n" +
    "                <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"user.confirm\" required>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(resetForm.confirm, 'required')\">This field is required</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-reset\" ng-show=\"(id && email && !success)\" ng-disabled=\"!canSave(resetForm)\" ng-click=\"submit()\">Set Password</button>\n" +
    "                &nbsp;<a href=\"/login\" class=\"btn btn-link\">Back to Login</a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div role=\"main\" class=\"main\">         \n" +
    "        <div id=\"home-section-1\">\n" +
    "            <div class=\"container\"> \n" +
    "                <div align=\"center\" class=\"row\">\n" +
    "                    <img padding-top=\"-20px\" src=\"/img/pv_appliance.png\" style=\"width:80%;height:80%;align:center\" alt=\"\" class=\"img-responsive\" >\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "       \n" +
    "        \n" +
    "        <div class=\"container\">\n" +
    "        \n" +
    "            <div class=\"row\">\n" +
    "                <hr class=\"tall\">\n" +
    "            </div>\n" +
    "        \n" +
    "        </div>\n" +
    "        \n" +
    "        <div id=\"home-section-2\">\n" +
    "            <div class=\"container\"> \n" +
    "                <div class=\"row\">\n" +
    "                    \n" +
    "                    \n" +
    "                    <div class=\"col-md-7\">\n" +
    "                        <h1 class=\"heading-secondary heading-font spacing-top-lg spacing-bot-lg\">Value Proposition</h1>\n" +
    "                        <h4 class=\"text-color-tertiary subheading-font italic spacing-top-lg spacing-bot-sm\">Safe & Easy Installation</h4>\n" +
    "                        <p class=\"primary-font text-color-tertiary\">SafeConnect Solar is a safer and more-cost effective way to install a solar energy system on your home. SafeConnect's patent-pending safety technology allows us to offer the first complete, UL-approved solar appliance. The appliance simply connects to pre-flashed roof mounts on one side and plugs into a PV Plug (akin to a 240 V dryer plug) on the other. Transforming residential PV in to an appliance cuts the cost in half, while making your home PV system simpler and safer. Watch <a href=\"http://www.youtube.com/embed/oNBBijn4JuY?showinfo=0&amp;wmode=opaque\">SafeConnect’s SafeSolar video</a> to see how.</p>\n" +
    "                       \n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div class=\"col-md-5 col-md-offset-0\">\n" +
    "\n" +
    "                        <img width=\"100%\" height=\"100%\" src=\"/img/SmartBoxMainPageIcon.jpg\" alt=\"SmartBox\">\n" +
    "                        \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <div id=\"home-section-2-callout\">\n" +
    "            <div class=\"container callout-rbox spacing-top-xlg \"> \n" +
    "                <div class=\"row\">\n" +
    "                    \n" +
    "                \n" +
    "                        \n" +
    "                    <div class=\"col-md-8 col-md-offset-0 spacing-top-lg spacing-bot-lg\">\n" +
    "                        <h4 class=\"text-color-tertiary subheading-font spacing-bot-sm\">No Electrical Permit Required</h4>\n" +
    "                        <p class=\"primary-font text-color-tertiary\">SafeConnect sells complete ready-to-use solar appliances, not high-touch, custom contracting installations. Everything works out of the box and is UL-certified as an appliance. SafeConnect's web-based, up-front pricing eliminates the expensive sales process and gets you a better deal. Start saving on your electrical bill today with SafeConnect.</p> \n" +
    "                        \n" +
    "                    </div>\n" +
    "\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <hr class=\"tall\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        \n" +
    "        \n" +
    "        <div id=\"home-section-3\">\n" +
    "            <div class=\"container\"> \n" +
    "                <div class=\"row\">\n" +
    "                    \n" +
    "                    <h1 class=\"heading-secondary heading-font spacing-top-md spacing-bot-lg\">Product Demo</h1>\n" +
    "                    \n" +
    "                    <div class=\"embed-responsive embed-responsive-16by9\">\n" +
    "                        <iframe frameborder=\"0\" allowfullscreen=\"\" src=\"http://www.youtube.com/embed/oNBBijn4JuY?showinfo=0&amp;wmode=opaque\"></iframe>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("pricing/checkout/checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/checkout/checkout.tpl.html",
    "<div role=\"main\" class=\"main shop\">\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h2 class=\"mb-none\"><strong>Checkout</strong></h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-9\">\n" +
    "				<div class=\"panel-group\" id=\"accordion\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading active\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Shipping Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<div class=\"paneling\" style='max-height: 100%;'>\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "\n" +
    "									<br>\n" +
    "									<form id=\"frmShippingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnameMailing\" ng-model=\"mailingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnameMailing\" ng-model=\"mailingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companyMailing\" ng-model=\"mailingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1Mailing\" ng-model=\"mailingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2Mailing\" ng-model=\"mailingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"cityMailing\" ng-model=\"mailingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"stateMailing\" ng-model=\"mailingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipMailing\" ng-model=\"mailingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countryMailing\" ng-model=\"mailingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Billing Address\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "						<div class=\"paneling\">\n" +
    "							<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "									<br>\n" +
    "									<form id=\"frmBillingAddress\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-md-12\">\n" +
    "												<span class=\"remember-box checkbox\">\n" +
    "													<label>\n" +
    "														<input type=\"checkbox\" ng-click=\"checkBillAddress()\" ng-Model=\"billingChecked\">Use shipping address?\n" +
    "													</label>\n" +
    "												</span>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>First Name</label>\n" +
    "													<input type=\"text\" name=\"firstnamebilling\" ng-model=\"billingAddress.name.first\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-6\">\n" +
    "													<label>Last Name</label>\n" +
    "													<input type=\"text\" name=\"lastnamebilling\" ng-model=\"billingAddress.name.last\"  class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Company Name</label>\n" +
    "													<input type=\"text\" name=\"companybilling\" ng-model=\"billingAddress.company\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 1</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine1billing\" ng-model=\"billingAddress.addressLine1\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label class=\"control-label\">Address Line 2</label>\n" +
    "													<input type=\"text\" class=\"form-control\" name=\"addressLine2billing\" ng-model=\"billingAddress.addressLine2\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>City </label>\n" +
    "													<input type=\"text\" name=\"citybilling\" ng-model=\"billingAddress.city\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>State </label>\n" +
    "													<input type=\"text\" name=\"statebilling\" ng-model=\"billingAddress.state\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"form-group\">\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Zip Code</label>\n" +
    "													<input type=\"text\" name=\"zipbilling\" ng-model=\"billingAddress.zip\" class=\"form-control\">\n" +
    "												</div>\n" +
    "												<div class=\"col-md-12\">\n" +
    "													<label>Country</label>\n" +
    "													<input type=\"text\" name=\"countrybilling\" ng-model=\"billingAddress.country\" class=\"form-control\">\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "					<form stripe-form=\"stripeSubmit\" name=\"paymentinfo\">\n" +
    "						<div class=\"panel-group\" id=\"accordion\">\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Payment Method\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<br>\n" +
    "\n" +
    "											<div class=\"row\">\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Card number</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"number\" payments-validate=\"card\" payments-format=\"card\" payments-type-model=\"type\" ng-class=\"myForm.number.$card.type\"/>\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Name on card </label>\n" +
    "														<input type=\"text\" ng-model=\"name\" class=\"form-control\">\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">Expiration Date</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"expiry\" payments-validate=\"expiry\" payments-format=\"expiry\" />\n" +
    "													</div>\n" +
    "													<div class=\"col-md-6\">\n" +
    "														<label for=\"\">CVC</label>\n" +
    "														<input type=\"text\" class=\"form-control\" ng-model=\"cvc\" payments-validate=\"cvc\" payments-format=\"cvc\" payments-type-model=\"type\"/>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<br>\n" +
    "\n" +
    "\n" +
    "							<div class=\"panel panel-default\">\n" +
    "								<div class=\"panel-heading active\">\n" +
    "									<h4 class=\"panel-title\">\n" +
    "										<a class=\"accordion\">\n" +
    "											Order Review\n" +
    "										</a>\n" +
    "									</h4>\n" +
    "								</div>\n" +
    "								<div class=\"paneling\">\n" +
    "									<div id=\"collapseOne\" class=\"accordion-body\">\n" +
    "										<div class=\"panel-body\">\n" +
    "											<table class=\"shop_table cart\">\n" +
    "												<thead>\n" +
    "													<tr>\n" +
    "														<th class=\"product-thumbnail\">\n" +
    "															&nbsp;\n" +
    "														</th>\n" +
    "														<th class=\"product-name\">\n" +
    "															Product\n" +
    "														</th>\n" +
    "														<th class=\"product-price\">\n" +
    "															Price\n" +
    "														</th>\n" +
    "														<th class=\"product-quantity\">\n" +
    "															Quantity\n" +
    "														</th>\n" +
    "														<th class=\"product-subtotal\">\n" +
    "															Total\n" +
    "														</th>\n" +
    "													</tr>\n" +
    "												</thead>\n" +
    "												<tbody>\n" +
    "\n" +
    "													<tr ng-repeat=\"item in cart\" class=\"cart_table_item\">\n" +
    "														<td class=\"product-thumbnail\">\n" +
    "															<img ng-src=\"{{item.imagePath}}\" alt=\"{{item.title}}\">\n" +
    "														</td>\n" +
    "														<td class=\"product-name\">\n" +
    "															{{item.title}}\n" +
    "														</td>\n" +
    "														<td class=\"product-price\">\n" +
    "															${{item.price}}\n" +
    "														</td>\n" +
    "														<td class=\"product-quantity\">\n" +
    "															{{item.quantity}}\n" +
    "														</td>\n" +
    "														<td class=\"product-subtotal\">\n" +
    "															${{cart.getProductPrice(item)}}\n" +
    "														</td>\n" +
    "													</tr>\n" +
    "												</tbody>\n" +
    "											</table>\n" +
    "										</div>\n" +
    "\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"actions-continue\">\n" +
    "								<input type=\"submit\" value=\"Place Order\" name=\"proceed\" class=\"btn btn-lg btn-primary mt-xl\">\n" +
    "							</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "						</form>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "			<div id=\"exportthis\" class=\"col-md-3\">\n" +
    "				<h4 class=\"heading-primary\">Cart Totals</h4>\n" +
    "				<table class=\"cart-totals\">\n" +
    "					<tbody>\n" +
    "						<tr class=\"cart-subtotal\">\n" +
    "							<th>\n" +
    "								<strong>Cart Subtotal</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "						<tr class=\"shipping\">\n" +
    "							<th>\n" +
    "								Shipping\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "							</td>\n" +
    "						</tr>	\n" +
    "						<tr class=\"total\">\n" +
    "							<th>\n" +
    "								<strong>Order Total</strong>\n" +
    "							</th>\n" +
    "							<td>\n" +
    "								<strong><span class=\"amount\">${{cart.getCartPrice()}}</span></strong>\n" +
    "							</td>\n" +
    "						</tr>\n" +
    "					</tbody>\n" +
    "				</table>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "");
}]);

angular.module("pricing/information-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/information-modal.tpl.html",
    "<header class=\"modal-header\">\n" +
    " 	<h3 class=\"modal-title\" id=\"modal-title\">Need more information?</h3>\n" +
    " </header>\n" +
    " <div class=\"modal-body\" id=\"modal-body\">\n" +
    " 	<p>If you need more information before selecting a product, read more about the SafeConnect Solar process.</p>\n" +
    " </div>\n" +
    " <footer class=\"modal-footer\">\n" +
    " 	<div class=\"row\">\n" +
    " 		<div class=\"col-md-12 text-right\">\n" +
    " 			<button class=\"btn btn-primary modal-confirm\" ng-click=\"newPage()\">More Information</button>\n" +
    " 			<button class=\"btn btn-default modal-dismiss\" ng-click=\"cancel()\">Close</button>\n" +
    " 		</div>\n" +
    " 	</div>\n" +
    " </footer>\n" +
    "");
}]);

angular.module("pricing/information/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/information/information.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<div class=\"portfolio-title\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-12 center\">\n" +
    "						<h1 class=\"header\"><strong>What Do I Need For My Installation?</strong></h1>\n" +
    "						<br>\n" +
    "						<p><strong>How to Fill in The Required Information. </strong>SafeConnect’s design software determines which products you need. At this stage, the necessary information comes from a solar professional. After your contractor determines how much solar energy your home requires, ask him or her to tell you the (1) AC system size, (2) bus bar rating, (3) compatibility of your solar panels, (4) number of panels, and (5) distance from the last panel to the SmartBox mounting location. Enter this information below.</p>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<br>\n" +
    "			<br>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<br>\n" +
    "			<br>\n" +
    "			<form name=\"calculatingForm\">\n" +
    "				\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.AC_size_input)}\">\n" +
    "							<label class=\"control-label\" for=\"AC_size_input\">AC System Size (kW): </label>\n" +
    "							<input type=\"text\" name=\"AC_size_input\" id=\"AC_size_input\" class=\"form-control\" ng-model=\"AC_size_input\" ng-change=\"change();\" pos valid-number acmax required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'server')\">{{errfor.username}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'pos')\">System size must be a positive number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'isNum')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.AC_size_input, 'acmax')\">Maximum AC system size is 7.6 kW</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<div class=\"form-group\" >\n" +
    "							<label class=\"control-label\" for=\"bus_bar_rating\">Bus Bar Rating: </label>\n" +
    "							<select id=\"bus_bar_rating\" name=\"bus_bar_rating\" class=\"form-control\" ng-model=\"bus_bar_rating\">\n" +
    "								<option value=\"1\">1-99</option>\n" +
    "								<option value=\"2\">100-199</option>\n" +
    "								<option value=\"3\">200+</option>\n" +
    "							</select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-8 \">\n" +
    "						<div class=\"form-group\">\n" +
    "							<label class=\"control-label\" for=\"acceptable_panels\">Do You Have SafeConnect Compatible Solar Panels? </label><br>\n" +
    "							\n" +
    "							<label float=\"left;\" style=\"padding-left:30px\">\n" +
    "								<input type=\"radio\" name=\"acceptable_panels\" ng-change=\"panels_check(2)\" data-ng-model=\"acceptable_panels\" value=\"2\">\n" +
    "								Yes&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "							</label>\n" +
    "							<label>\n" +
    "								<input type=\"radio\" name=\"acceptable_panels\" ng-change=\"panels_check(1)\" data-ng-model=\"acceptable_panels\" value=\"1\">\n" +
    "								No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "							</label>\n" +
    "							<span><a id=\"panel_view\" href ng-click=\"panelModal()\">view compatible modules</a></span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class =\"row\">\n" +
    "					<div class=\"col-md-8\">\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.num_panels_input)}\">\n" +
    "							<label class=\"control-label\" for=\"num_panels_input\">Number of Panels: </label>\n" +
    "							<input type=\"text\" name=\"num_panels_input\" id=\"num_panels_input\" class=\"form-control\" ng-model=\"num_panels_input\" ng-model-options=\"{ updateOn: 'blur'}\" pos valid-number-no-decimals required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'server')\">{{errfor.num_panels_input}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'pos')\">Number of panels must be a positive number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.num_panels_input, 'isInt')\">Please enter a valid number</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class =\"row\">\n" +
    "					<div ng-attr-class=\"{{(AC_size_input>3.6) && 'col-md-4' || 'col-md-8' }}\" >\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.d_length_input)}\">\n" +
    "							<label ng-show=\"(AC_size_input>3.6)\" class=\"control-label\" for=\"d_length_input\">Length of Roof Run to SmartBox 1: </label>\n" +
    "							<label ng-hide=\"(AC_size_input>3.6)\" class=\"control-label\" for=\"d_length2_input\">Length of Roof Run to SmartBox: </label>\n" +
    "							<input type=\"text\" name=\"d_length_input\" ng-model-options=\"{ updateOn: 'blur'}\" id=\"d_length_input\" class=\"form-control\" ng-model=\"d_length_input\" cablemin cablemax valid-number required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'server')\">{{errfor.d_length_input}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'cablemin')\">Minimum cable length is 8 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'cablemax')\">Maximum cable length is 80 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length_input, 'isNum')\">Please enter a valid number</span>\n" +
    "						</div>\n" +
    "						\n" +
    "\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-show=\"(AC_size_input>3.6)\" class=\"col-md-4\">\n" +
    "						<alert ng-repeat=\"alert in alerts.calculating\" type=\"{{alert.type}}\" close=\"closeAlert('calculating', $index)\">{{alert.msg}}</alert>\n" +
    "						<div class=\"form-group\" ng-class=\"{'has-error': hasError(calculatingForm.d_length2_input)}\">\n" +
    "							<div title=\"Your system requires two SmartBoxes. You need a length of cable to run to the solar array from each SmartBox. Please enter the lengths of cable for the two SmartBoxes.\" data-toggle=\"tooltip\" data-placement=\"bottom\">\n" +
    "								<label class=\"control-label\" for=\"d_length2_input\"><i class=\"fa fa-info-circle\" style=\"color:#545454\"></i> Length of Roof Run to SmartBox 2: </label>\n" +
    "							</div>\n" +
    "							<input type=\"text\" name=\"d_length2_input\" id=\"d_length2_input\" class=\"form-control\" ng-model=\"d_length2_input\" cable2min cablemax valid-number required server-error>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'required')\">Please enter a valid number</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'server')\">{{errfor.d_length_input}}</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'cable2min')\">Minimum cable length is 8 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'cablemax')\">Maximum cable length is 80 feet</span>\n" +
    "							<span class=\"help-block\" ng-show=\"showError(calculatingForm.d_length2_input, 'isNum')\">Please enter a valid number</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class =\"row\">\n" +
    "						<div class=\"col-md-8\" align=\"right\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<button type=\"button\" class=\"btn btn-primary btn-update\" ng-disabled=\"!canSave(calculatingForm)\" ng-click=\"calculate(acceptable_panels, d_length_input, d_length2_input)\">Calculate</button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<div class=\"col-md-4\">\n" +
    "			<div class=\"spacing-bot-md spacing-left-md center\">\n" +
    "				<img padding-left=\"20%\" width=\"140%\" height=\"140%\" src=\"/img/SmartBoxMainPageIcon.jpg\" alt=\"SmartBox\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-show=\"no_cart_bus_bar\" class=\"row\" style=\"margin-top:50px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<br>\n" +
    "				<br>\n" +
    "			</div>\n" +
    "			<div class=\"row\" style=\"padding-left:30px;padding-top:30px;\">\n" +
    "				<div class=\"col-md-8\" align=\"left\">\n" +
    "					<font size=\"3\">You do not have a sufficient bus bar rating for the recommended configuration. Please contact your contractor if you would like to upgrade your system. </font>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-show=\"no_cart_panels\" class=\"row\" style=\"margin-top:50px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<br>\n" +
    "				<br>\n" +
    "			</div>\n" +
    "			<div class=\"row\" style=\"padding-left:30px;padding-top:30px;\">\n" +
    "				<div class=\"col-md-8\" align=\"left\">\n" +
    "					<font size=\"3\">Your panels are not compatible with current SafeConnect configurations. To view compatible panels view <a id=\"panel_view\" href ng-click=\"panelModal()\">compatible solar panels</a> .<br /> </font>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "		<a name=\"cart\">\n" +
    "			<div ng-show=\"calculated\" class=\"row\">\n" +
    "				<div class=\"col-md-8\">\n" +
    "					<h4>What you need: </h4>\n" +
    "					<br>\n" +
    "					<br>\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							<h4 class=\"panel-title\">\n" +
    "								<a class=\"accordion\">\n" +
    "									Cart\n" +
    "								</a>\n" +
    "							</h4>\n" +
    "						</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "						<div class=\"main shop\">\n" +
    "							<div class=\"accordion-body\">\n" +
    "								<div class=\"panel-body\">\n" +
    "									<table class=\"shop_table cart\">\n" +
    "										<thead>\n" +
    "											<tr>\n" +
    "												<th class=\"product-remove\">\n" +
    "													&nbsp;\n" +
    "												</th>\n" +
    "												<th class=\"product-thumbnail\">\n" +
    "													&nbsp;\n" +
    "												</th>\n" +
    "												<th class=\"product-name\">\n" +
    "													Product\n" +
    "												</th>\n" +
    "												<th class=\"product-price\">\n" +
    "													Price\n" +
    "												</th>\n" +
    "												<th>\n" +
    "												</th>\n" +
    "												<th class=\"product-quantity\">\n" +
    "													Quantity\n" +
    "												</th>\n" +
    "												<th class=\"product-subtotal\">\n" +
    "													Total\n" +
    "												</th>\n" +
    "											</tr>\n" +
    "										</thead>\n" +
    "										<tbody ng-if=\"cart.length\">\n" +
    "											<tr class=\"cart_table_item\" ng-repeat=\"product in cart | filter: greaterThan('quantity', 0)\">\n" +
    "												<td class=\"product-remove\">\n" +
    "													<a title=\"Remove this item\" class=\"remove\" ng-click=\"removeFromCart(product)\">\n" +
    "														<i class=\"fa fa-times\"></i>\n" +
    "													</a>\n" +
    "												</td>\n" +
    "												<td class=\"product-thumbnail\">\n" +
    "													<a><img width=\"100\" height=\"100\" alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\">\n" +
    "													</a>\n" +
    "												</td>\n" +
    "												<td class=\"product-name\">\n" +
    "													<a href=\"shop-product-sidebar.html\">{{product.title}}</a>\n" +
    "												</td>\n" +
    "												<td class=\"product-price\">\n" +
    "													<span class=\"amount\">${{product.price}}</span>\n" +
    "												</td>\n" +
    "												<td>\n" +
    "													&nbsp;\n" +
    "												</td>\n" +
    "												<td class=\"product-quantity\">\n" +
    "													<form class=\"cart\">\n" +
    "														<div class=\"quantity\">\n" +
    "															<button class=\"minus\" ng-click=\"subtractQty(product)\">-</button>\n" +
    "															<input type=\"text\" name=\"quantity\" id=\"qty\" class=\"input-text qty text\" ng-model=\"product.quantity\">\n" +
    "															<button class=\"plus\" ng-click=\"addQty(product)\">+</button>\n" +
    "														</div>\n" +
    "													</form>\n" +
    "												</td>\n" +
    "												<td class=\"product-subtotal\">\n" +
    "													<span class=\"amount\">${{getProductPrice(product)}}</span>\n" +
    "												</td>\n" +
    "											</tr>\n" +
    "										</tbody>\n" +
    "									</table>\n" +
    "\n" +
    "\n" +
    "									<div style=\"width:50%; float:right;\">\n" +
    "										<!-- <h4 class=\"heading-primary\">Cart Totals</h4> -->\n" +
    "										<br>\n" +
    "										<table class=\"cart-totals\">\n" +
    "											<tbody >\n" +
    "												<tr class=\"cart-subtotal\">\n" +
    "													<th>\n" +
    "														<strong>Cart Subtotal</strong>\n" +
    "													</th>\n" +
    "													<td>\n" +
    "														<strong>${{getCartPrice()}}</strong>\n" +
    "													</td>\n" +
    "												</tr>\n" +
    "												<tr class=\"shipping\">\n" +
    "													<th>\n" +
    "														Shipping\n" +
    "													</th>\n" +
    "													<td>\n" +
    "														Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "													</td>\n" +
    "												</tr>\n" +
    "												<tr class=\"total\">\n" +
    "													<th>\n" +
    "														<strong>Order Total</strong>\n" +
    "													</th>\n" +
    "													<td>\n" +
    "														<strong><span class=\"amount\">${{getCartPrice()}}</span></strong>\n" +
    "													</td>\n" +
    "												</tr>\n" +
    "											</tbody>\n" +
    "										</table>\n" +
    "\n" +
    "										<div class=\"actions-continue\">\n" +
    "											<input type=\"submit\" value=\"Checkout\" name=\"update_cart\" ng-disabled=\"cart.length == 0\" ng-click=\"checkout();\" class=\"btn btn-default\">\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("pricing/login-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/login-modal.tpl.html",
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Do you want to sign in?</h3>\n" +
    "</header>\n" +
    "<footer class=\"modal-footer\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12 text-right\">\n" +
    "			<button class=\"btn btn-primary modal-confirm\" ng-click=\"signin()\">Sign in or create account</button>\n" +
    "		<button class=\"btn btn-primary modal-confirm\" ng-click=\"guest()\">Continue as guest</button>\n" +
    "		<button class=\"btn btn-default modal-dismiss\" ng-click=\"cancel()\">Cancel</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("pricing/login-modal2.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/login-modal2.tpl.html",
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Do you want to sign in?</h3>\n" +
    "</header>\n" +
    "<footer class=\"modal-footer\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12 text-right\">\n" +
    "			<button class=\"btn btn-primary modal-confirm\" ng-click=\"signin2()\">Sign in or create account</button>\n" +
    "		<button class=\"btn btn-primary modal-confirm\" ng-click=\"guest2()\">Continue as guest</button>\n" +
    "		<button class=\"btn btn-default modal-dismiss\" ng-click=\"cancel2()\">Cancel</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("pricing/panel-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/panel-modal.tpl.html",
    "<header class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\" id=\"modal-title\">Compatible Modules</h3>\n" +
    "</header>\n" +
    "\n" +
    "\n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h1 style=\"padding: 25px 25px;\" class=\"mb-none preheading-font\">ET Solar</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "		<ul style=\"list-style: none;margin-right: 30px;\">\n" +
    "			<li class=\"col-md-6 col-sm-6 col-xs-12\" ng-repeat=\"product in etproducts\">\n" +
    "				<span >\n" +
    "					<span class=\"product-thumb-info\" style=\"margin-bottom: 30px;padding: 25px 25px;\">\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<p>{{product.title}}</p>\n" +
    "					</span>\n" +
    "				\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		</div>\n" +
    "	\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h1 style=\"padding: 25px 25px;\" class=\"mb-none preheading-font\">SunPower</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<br>\n" +
    "\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "		<ul style=\"list-style: none;margin-right: 30px;\">\n" +
    "			<li class=\"col-md-6 col-sm-6 col-xs-12\" ng-repeat=\"product in sunproducts\">\n" +
    "				<span >\n" +
    "					<span class=\"product-thumb-info\" style=\"margin-bottom: 30px;padding: 25px 25px;\">\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<p>{{product.title}}</p>\n" +
    "					</span>\n" +
    "				\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		</div>\n" +
    "\n" +
    "");
}]);

angular.module("pricing/pricing.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("pricing/pricing.tpl.html",
    "<div role=\"main\" class=\"main shop\">\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		\n" +
    "		<div class=\"row spacing-bot-neg hidden\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<hr class=\"tall\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"spacing-top-md spacing-bot-neg\">\n" +
    "			<div class=\"row spacing-top-neg\">\n" +
    "				<div class=\"col-md-6\" style=\"margin-top: 50px;\">\n" +
    "					<h1 class=\"mb-none\"><strong>Smart Shop</strong></h1>\n" +
    "				</div>\n" +
    "				\n" +
    "				<div class=\"col-md-6 col-md-offset-0\">\n" +
    "					<div class=\"featured-box featured-box-primary featured-box-text-left\" style=\"height: 90px; min-height:20px;\">\n" +
    "						<div id=\"cart-total-box\" class=\"box-content\">\n" +
    "							<div class=\"row spacing-top-neg spacing-bot-none\">\n" +
    "								<div class=\"col-xs-6\">\n" +
    "									<h4 class=\"heading-font font-color-tertiary\"><strong>Cart Total: </strong><span>${{getCartPrice()}}</span></h4>\n" +
    "								</div>\n" +
    "								<div class=\"col-xs-6\">\n" +
    "									<div class=\"align-right\">\n" +
    "										<button class=\"btn btn-lg btn-primary mr-xs mb-lg\" type=\"button\" ng-disabled=\"cart.length == 0\" ng-click=\"checkout();\">Checkout</button>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row spacing-top-sm\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h1 class=\"mb-none preheading-font\">SmartBox</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<ul class=\"products product-thumb-info-list\">\n" +
    "				<li class=\"col-md-6 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products| filter:{type:'SmartBox'}\">\n" +
    "					<span style=\"width:50%; height:50%;\" class=\"product-thumb-info\">\n" +
    "						<a href=\"\" class=\"add-to-cart-product\">\n" +
    "							<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "								<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "							</span>\n" +
    "						</a>\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "							<span class=\"price text-color-primary\">\n" +
    "								<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "							</span>\n" +
    "						</span>\n" +
    "						\n" +
    "\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "\n" +
    "				\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-6\">\n" +
    "						<h1 class=\"mb-none preheading-font\">SmartCabling</h1>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "\n" +
    "				<div class=\"row\">\n" +
    "					<ul class=\"products product-thumb-info-list\">\n" +
    "						<li class=\"col-md-4 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products | filter:{type:'Cabling'}\"\">\n" +
    "							<span style=\"width:75%; height:75%;\" class=\"product-thumb-info\">\n" +
    "								<span class=\"product-thumb-info\">\n" +
    "									<a href=\"\" class=\"add-to-cart-product\">\n" +
    "										<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "											<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "										</span>\n" +
    "									</a>\n" +
    "									\n" +
    "									<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "									\n" +
    "									<span class=\"product-thumb-info-content\">\n" +
    "										<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "										<span class=\"price text-color-primary\">\n" +
    "											<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "								</span>\n" +
    "								\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-md-6\">\n" +
    "							<h1 class=\"mb-none preheading-font\">SmartConnector</h1>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<ul class=\"products product-thumb-info-list\">\n" +
    "							<li class=\"col-md-6 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products | filter:{type:'Adapter'}\"\">\n" +
    "								<span style=\"width:47%; height:47%;\" class=\"product-thumb-info\">\n" +
    "									<span class=\"product-thumb-info\">\n" +
    "										<a href=\"\" class=\"add-to-cart-product\">\n" +
    "											<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "												<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "											</span>\n" +
    "										</a>\n" +
    "										\n" +
    "										<img class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "										\n" +
    "										<span class=\"product-thumb-info-content\">\n" +
    "											<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "											<span class=\"price text-color-primary\">\n" +
    "												<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "											</span>\n" +
    "										</span>\n" +
    "									</span>\n" +
    "								</li>\n" +
    "							</ul>\n" +
    "						</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "						\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "					\n" +
    "					<div ng-if=\"cart.length\" class=\"container\">\n" +
    "						\n" +
    "						<div class=\"row spacing-bot-neg\">\n" +
    "							<div class=\"col-md-12\">\n" +
    "								<hr class=\"tall\">\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"row\">\n" +
    "							<h1 class=\"mb-none\"><strong>Your Cart</strong></h1>\n" +
    "						</div>\n" +
    "						\n" +
    "						<div class=\"featured-boxes spacing-top-lg\">\n" +
    "							<div class=\"row\">\n" +
    "								<div class=\"col-md-12\">\n" +
    "									<div class=\"panel panel-default\">\n" +
    "										<div class=\"panel-heading\">\n" +
    "											<h4 class=\"panel-title\">\n" +
    "												<a class=\"accordion\">\n" +
    "													Cart\n" +
    "												</a>\n" +
    "											</h4>\n" +
    "										</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "										<div class=\"main shop\">\n" +
    "											<div class=\"accordion-body\">\n" +
    "												<div class=\"panel-body\">\n" +
    "													<table class=\"shop_table cart\">\n" +
    "														<thead>\n" +
    "															<tr>\n" +
    "																<th class=\"product-remove\">\n" +
    "																	&nbsp;\n" +
    "																</th>\n" +
    "																<th class=\"product-thumbnail\">\n" +
    "																	&nbsp;\n" +
    "																</th>\n" +
    "																<th class=\"product-name\">\n" +
    "																	Product\n" +
    "																</th>\n" +
    "																<th class=\"product-price\">\n" +
    "																	Price\n" +
    "																</th>\n" +
    "																<th>\n" +
    "																</th>\n" +
    "																<th class=\"product-quantity\">\n" +
    "																	Quantity\n" +
    "																</th>\n" +
    "																<th class=\"product-subtotal\">\n" +
    "																	Total\n" +
    "																</th>\n" +
    "															</tr>\n" +
    "														</thead>\n" +
    "														<tbody ng-if=\"cart.length\">\n" +
    "															<tr class=\"cart_table_item\" ng-repeat=\"product in cart | filter: greaterThan('quantity', 0)\">\n" +
    "																<td class=\"product-remove\">\n" +
    "																	<a title=\"Remove this item\" class=\"remove\" ng-click=\"removeFromCart(product)\">\n" +
    "																		<i class=\"fa fa-times\"></i>\n" +
    "																	</a>\n" +
    "																</td>\n" +
    "																<td class=\"product-thumbnail\">\n" +
    "																	<a><img width=\"100\" height=\"100\" alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\">\n" +
    "																	</a>\n" +
    "																</td>\n" +
    "																<td class=\"product-name\">\n" +
    "																	<a href=\"shop-product-sidebar.html\">{{product.title}}</a>\n" +
    "																</td>\n" +
    "																<td class=\"product-price\">\n" +
    "																	<span class=\"amount\">${{product.price}}</span>\n" +
    "																</td>\n" +
    "																<td>\n" +
    "																	&nbsp;\n" +
    "																</td>\n" +
    "																<td class=\"product-quantity\">\n" +
    "																	<form class=\"cart\">\n" +
    "																		<div class=\"quantity\">\n" +
    "																			<button class=\"minus\" ng-click=\"subtractQty(product)\">-</button>\n" +
    "																			<input type=\"text\" name=\"quantity\" id=\"qty\" class=\"input-text qty text\" ng-model=\"product.quantity\">\n" +
    "																			<button class=\"plus\" ng-click=\"addQty(product)\">+</button>\n" +
    "																		</div>\n" +
    "																	</form>\n" +
    "																</td>\n" +
    "																<td class=\"product-subtotal\">\n" +
    "																	<span class=\"amount\">${{getProductPrice(product)}}</span>\n" +
    "																</td>\n" +
    "															</tr>\n" +
    "														</tbody>\n" +
    "													</table>\n" +
    "\n" +
    "\n" +
    "													<div style=\"width:50%; float:right;\">\n" +
    "														<!-- <h4 class=\"heading-primary\">Cart Totals</h4> -->\n" +
    "														<br>\n" +
    "														<table class=\"cart-totals\">\n" +
    "															<tbody >\n" +
    "																<tr class=\"cart-subtotal\">\n" +
    "																	<th>\n" +
    "																		<strong>Cart Subtotal</strong>\n" +
    "																	</th>\n" +
    "																	<td>\n" +
    "																		<strong>${{getCartPrice()}}</strong>\n" +
    "																	</td>\n" +
    "																</tr>\n" +
    "																<tr class=\"shipping\">\n" +
    "																	<th>\n" +
    "																		Shipping\n" +
    "																	</th>\n" +
    "																	<td>\n" +
    "																		Free Shipping<input type=\"hidden\" value=\"free_shipping\" id=\"shipping_method\" name=\"shipping_method\">\n" +
    "																	</td>\n" +
    "																</tr>\n" +
    "																<tr class=\"total\">\n" +
    "																	<th>\n" +
    "																		<strong>Order Total</strong>\n" +
    "																	</th>\n" +
    "																	<td>\n" +
    "																		<strong><span class=\"amount\">${{getCartPrice()}}</span></strong>\n" +
    "																	</td>\n" +
    "																</tr>\n" +
    "															</tbody>\n" +
    "														</table>\n" +
    "\n" +
    "														<div class=\"actions-continue\">\n" +
    "															<input type=\"submit\" value=\"Checkout\" name=\"update_cart\" ng-disabled=\"cart.length == 0\" ng-click=\"checkout();\" class=\"btn btn-default\">\n" +
    "														</div>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>");
}]);

angular.module("sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar.tpl.html",
    "<div ng-controller=\"SidebarCtrl\" flex layout=\"row\">\n" +
    "    <md-sidenav flex=\"15\" md-is-locked-open=\"true\" class=\"md-whiteframe-4dp\">\n" +
    "        <md-content flex layout=\"column\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <div class=\"sidebar-nav navbar-collapse\">\n" +
    "                    <nav class=\"navbar-sidebar\" ng-if=\"isAdmin()\" role=\"navigation\">\n" +
    "                        <ul class=\"nav\" id=\"side-menu\">\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin\"><i class=\"fa fa-bar-chart-o fa-fw\"></i> Dashboard</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/activity\"><i class=\"fa fa-bar-chart-o fa-fw\"></i> Activity</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/sales\"><i class=\"fa fa-table fa-fw\"></i> Sales</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/purchase-history\"><i class=\"fa fa-edit fa-fw\"></i> Purchase History</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/users\"><i class=\"fa fa-wrench fa-fw\"></i> User Info</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/developers\"><i class=\"fa fa-sitemap fa-fw\"></i> Developers</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"/admin/pricing\"><i class=\"fa fa-files-o fa-fw\"></i> Pricing</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"\" ng-click=\"logout()\"><i class=\"fa fa-user\"></i> Sign Out</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </nav>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-content>\n" +
    "    </md-sidenav>\n" +
    "</div>\n" +
    "");
}]);

angular.module("signup/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signup/signup.tpl.html",
    "<div class=\"row\" id=\"signup\">\n" +
    "    <div class=\"col-sm-6\">\n" +
    "        <h1 class=\"header\"><strong>Create an Account</strong></h1>\n" +
    "        <form name=\"signupForm\">\n" +
    "            <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.username)}\">\n" +
    "                <label class=\"control-label\" for=\"username\">Username:</label>\n" +
    "                <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"user.username\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.username, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.username, 'server')\">{{errfor.username}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.email)}\">\n" +
    "                <label class=\"control-label\" for=\"email\">Email Address:</label>\n" +
    "                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"user.email\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'email')\">Please enter a valid email</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.email, 'server')\">{{errfor.email}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': hasError(signupForm.password)}\">\n" +
    "                <label class=\"control-label\" for=\"password\">Password:</label>\n" +
    "                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"user.password\" required server-error>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.password, 'required')\">This field is required</span>\n" +
    "                <span class=\"help-block\" ng-show=\"showError(signupForm.password, 'server')\">{{errfor.password}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button type=\"button\" class=\"btn btn-primary btn-signup\" ng-disabled=\"!canSave(signupForm)\" ng-click=\"submit()\">Create My Account</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <div ng-if=\"social\">\n" +
    "            <hr>\n" +
    "            <p>Or sign in using...</p>\n" +
    "            <div class=\"btn-group btn-group-justified\">\n" +
    "                <a ng-repeat=\"(provider, property) in social\" ng-href=\"{{property.login}}\" target=\"_self\" class=\"btn btn-info\"><i ng-class=\"'fa ' + property.icon + ' fa-lg'\"></i> {{property.text}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6 smartboxlogo\">\n" +
    "        <img src=\"../img/SmartBox_home.png\" alt=\"SmartBox\" width: 100%;>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("specs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("specs.tpl.html",
    "<div role=\"main\" class=\"main\">		\n" +
    "	<div class=\"container\" align=\"middle\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h1 class=\"header\"><strong>Product Specifications</strong></h1>\n" +
    "			<div class=\"row mt-xlg\">\n" +
    "				<div ng-controller=\"OwlCtrl\" id=\"slides_control\">\n" +
    "					<div class=\"col-md-6 col-md-offset-3\">					\n" +
    "						<carousel interval=\"3000\">\n" +
    "							<slide ng-repeat=\"product in products\" active=\"slide.active\">\n" +
    "								<img ng-src=\"{{product.image}}\"  class=\"img-responsive center-block\" style=\"margin:0 auto;\">\n" +
    "								<div class=\"carousel-caption\">\n" +
    "									<h4>{{product.title}}</h4>\n" +
    "								</div>\n" +
    "							</slide>\n" +
    "						</carousel>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<ul class=\"products product-thumb-info-list\">\n" +
    "			<li class=\"col-md-3 col-sm-6 col-xs-12 product\" ng-repeat=\"product in products | filter:{type:'Cabling'}\"\">\n" +
    "				<span class=\"product-thumb-info\">\n" +
    "					<span class=\"product-thumb-info\">\n" +
    "						<a href=\"\" class=\"add-to-cart-product\">\n" +
    "							<span><i class=\"fa fa-shopping-cart\"></i>\n" +
    "								<button ng-click=\"addToCart(product);\">Add to cart</button>\n" +
    "							</span>\n" +
    "						</a>\n" +
    "						\n" +
    "						<img alt=\"\" class=\"img-responsive\" ng-src=\"{{product.imagePath}}\" alt=\"{{product.title}}\">\n" +
    "						\n" +
    "						<span class=\"product-thumb-info-content\">\n" +
    "							<h4 class=\"heading-tertiary\">{{product.title}}</h4>\n" +
    "							<span class=\"price text-color-primary\">\n" +
    "								<ins><span class=\"amount\">${{product.price}}</span></ins>\n" +
    "							</span>\n" +
    "						</span>\n" +
    "					</span>\n" +
    "				\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		  \n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			\n" +
    "			<div style=\"margin-top: 50px;\" class=\"col-md-12\">\n" +
    "				<div class=\"tabs tabs-secondary\">\n" +
    "					<ul class=\"nav nav-tabs\">\n" +
    "						<li ng-class=\"{ active: isSet(1) }\">\n" +
    "							<a href ng-click=\"setTab(1)\"><h4 class=\"tabheading-font text-color-secondary\">3.6 kW SmartBox</h4></a>\n" +
    "						</li>\n" +
    "						<li ng-class=\"{ active: isSet(2) }\">\n" +
    "							<a href ng-click=\"setTab(2)\"><h4 class=\"tabheading-font text-color-secondary\">SmartCabling</h4></a>\n" +
    "						</li>\n" +
    "						<li ng-class=\"{ active: isSet(3) }\">\n" +
    "							<a href ng-click=\"setTab(3)\"><h4 class=\"tabheading-font text-color-secondary\">SmartConnectors</h4></a>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<div class=\"tab-content\">\n" +
    "						<div ng-show=\"isSet(1)\">\n" +
    "							<div id=\"36-smart-box-tb\" class=\"tab-pane active\">\n" +
    "								<h4>3.6 kW SmartBox</h4>\n" +
    "								<p>The SmartBox masterminds all of the electrical safety functionality behind your home PV system.  The SmartBox continuously manages voltage and frequency, checks for electrical faults, and ensures that the right number of PV panels are connected. If any of these operating conditions are violated the system shuts down safely and immediately, protecting you and your family.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-show=\"isSet(2)\">\n" +
    "							<div id=\"72-smart-box-tb\" class=\"tab-pane\">\n" +
    "								<h4>SmartCabling</h4>\n" +
    "								<p>SafeConnect’s SmartCabling ends the era of specialized electricians connecting bare wires to connect your solar panels to your home’s electrical system.  SafeConnect replaces failure-prone and cumbersome on-site wiring with pluggable connections that are safe for anyone to click together.  The cables come in various lengths. SafeConnect’s PV system design tool will specify the right ones based on the design of your home PV system.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-show=\"isSet(3)\">\n" +
    "							<div id=\"cabling-tb\" class=\"tab-pane\">\n" +
    "								<h4>SmartConnectors</h4>\n" +
    "								<p>SafeConnect’s cabling system and SmartBox work with standard AC solar panels. The panels are simply connected to each other using one SmartConnector for each. The last module is connected to the SmartCabling and run down to the SmartBox mounted on the side of your home.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>");
}]);

angular.module('templates.common', ['security/login/form.tpl.html', 'security/login/toolbar.tpl.html']);

angular.module("security/login/form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/login/form.tpl.html",
    "<form name=\"form\" novalidate class=\"login-form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h4>Sign in</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <alert ng-repeat=\"alert in alerts\" type=\"{{alert.type}}\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label\" for=\"login\">Username or Email:</label>\n" +
    "            <input class=\"form-control\" type=\"text\" name=\"login\" id=\"login\" ng-model=\"user.email\" required autofocus>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label\" for=\"pass\">Password:</label>\n" +
    "            <input class=\"form-control\" type=\"password\" name=\"pass\" id=\"pass\" ng-model=\"user.password\" required>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-primary login\" ng-click=\"login()\" ng-disabled='form.$invalid'>Sign in</button>\n" +
    "        <button class=\"btn clear\" ng-click=\"clearForm()\">Clear</button>\n" +
    "        <button class=\"btn btn-warning cancel\" ng-click=\"cancelLogin()\">Cancel</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("security/login/toolbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/login/toolbar.tpl.html",
    "<ul class=\"nav pull-right\">\n" +
    "  <li class=\"divider-vertical\"></li>\n" +
    "  <li ng-show=\"isAuthenticated()\">\n" +
    "      <a href=\"#\">{{currentUser.firstName}} {{currentUser.lastName}}</a>\n" +
    "  </li>\n" +
    "  <li ng-show=\"isAuthenticated()\" class=\"logout\">\n" +
    "      <form class=\"navbar-form\">\n" +
    "          <button class=\"btn logout\" ng-click=\"logout()\">Log out</button>\n" +
    "      </form>\n" +
    "  </li>\n" +
    "  <li ng-hide=\"isAuthenticated()\" class=\"login\">\n" +
    "      <form class=\"navbar-form\">\n" +
    "          <button class=\"btn login\" ng-click=\"login()\">Log in</button>\n" +
    "      </form>\n" +
    "  </li>\n" +
    "</ul>");
}]);
