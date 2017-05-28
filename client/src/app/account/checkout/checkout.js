angular.module('account.checkout', ['config', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.utility','ui.bootstrap', 'directives.serverError', 'services.cart']);
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
    });
}]);
angular.module('account.checkout').controller('CheckoutLoggedInCtrl', [ '$scope', '$location', '$log', 'security', 'utility', 'accountResource', 'accountDetails', 'SOCIAL', 'cartService',
  function($scope, $location, $log, security, utility, restResource, accountDetails, SOCIAL, cartService){
    //local vars
    var account = accountDetails.account;
    var user = accountDetails.user;
    $scope.address =  accountDetails.mailingAddress;
    $scope.cart =  cartService;
  
    console.log($scope.address);

    $scope.submitADDRESS = function(){

      $scope.alerts.address = [];
      restResource.setMailingAddress($scope.addressDetail).then(function(data){
        if(data.success){
          console.log("hi");
          $scope.alerts.address.push({
            type: 'success',
            msg: 'User identity is updated.'
          });
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


     $scope.errfor = {}; //for identity server-side validation
    $scope.alerts = {
      detail: [], address: [], pass: []
    };
    
    $scope.addressDetail = {
      addressLine1:    $scope.address.addressLine1
    };

    $scope.onSubmit = function () {
      $scope.processing = true;
    };

    $scope.stripeCallback = function (code, result) {
      $scope.processing = false;
      $scope.hideAlerts();
      if (result.error) {
        $scope.stripeError = result.error.message;
      } else {
        $scope.stripeToken = result.id;
      }
    };

    $scope.hideAlerts = function () {
      $scope.stripeError = null;
      $scope.stripeToken = null;
    };

    $scope.submit = function(){
      restResource.newAddress($scope.addressDetail).then(function(result){
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
  }]);