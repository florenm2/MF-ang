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
    return $http.get('/api/getProducts').then(processResponse, processError);
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

  resource.tryWebhook = function(token){
      $http.post("/my/webhook/url", function(request, response) {
      // Retrieve the request's body and parse it as JSON
      var event_json = JSON.parse(request.body);

      // Do something with event_json

      response.send(200);
    });
  };

  return resource;
}]);
