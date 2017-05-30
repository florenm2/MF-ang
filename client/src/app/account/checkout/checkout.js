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
    var address =  accountDetails.mailingAddress;
    $scope.cart =  cartService;
    $scope.billingChecked = false;

    //mailing address
    $scope.name = {
      first: account.name.first,
      last: account.name.last
    };

    $scope.company = account.company;
    $scope.addressLine1 = address.addressLine1;
    $scope.addressLine2 = address.addressLine2;
    $scope.city = address.city;
    $scope.state = address.state;
    $scope.zip = address.zip;
    $scope.country = address.country;

    

    //billing address
    $scope.checkBillAddress = function(){
      if($scope.billingChecked){
        $scope.nameBilling = $scope.name;
        $scope.companyBilling = $scope.company;
        $scope.addressLine1Billing = $scope.addressLine1;
        $scope.addressLine2Billing = $scope.addressLine2;
        $scope.cityBilling = $scope.city;
        $scope.stateBilling = $scope.state;
        $scope.zipBilling = $scope.zip;
        $scope.countryBilling = $scope.country;
      } else {
        $scope.nameBilling = {
          first: "",
          last: ""
        };
        $scope.companyBilling = "";
        $scope.addressLine1Billing = "";
        $scope.addressLine2Billing = "";
        $scope.cityBilling = "";
        $scope.stateBilling = "";
        $scope.zipBilling = "";
        $scope.countryBilling = "";
      }
    }


    //credit card
    $scope.cardNumber = 0;
    $scope.exprationDate = 0;
    $scope.cvv = 0;


    
    
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

    var acc = document.getElementsByClassName("accordion");
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