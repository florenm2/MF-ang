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
    
    $scope.returnHome = function(){
      $location.path('/');
    }

    $scope.hideAlerts = function () {
      $scope.stripeError = null;
      $scope.stripeToken = null;
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