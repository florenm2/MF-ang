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

    //console.log($scope.cart.getCartProducts());
    console.log($scope.cart.getCart());

    $scope.stripeSubmit = function(status, response){
      if(response.error) {
          // there was an error. Fix it.
        } else {
          // got stripe token, now charge it or smt
          token = response.id;
          $scope.submitAddress();
        }
      }


    // $scope.onSubmit = function () {
    //   $scope.processing = true;
    // };

    // $scope.stripeCallback = function (code, result) {
    //   //$scope.processing = false;
    //   $scope.hideAlerts();
    //   if (result.error) {
    //     $scope.stripeError = result.error.message;
    //   } else {
    //     $scope.stripeToken = result.id;
    //   }
    // };

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
  


  //console.log($scope.mailingAddress);
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

    $scope.test = function(){
      console.log("hello");
    }

    // $scope.purchaseInformation = {
    //   //orderNumber: ,
    //   product: cart,
    //   billingAddress: req.body.billingAddress,
    //   mailingAddress: req.body.mailingAddress,
    //   orderDate: req.body.orderDate,
    //   company: req.body.company,
    //   paymentMethod: req.body.paymentMethod,
    //   cost: {
    //     raw: req.body.cost.raw,
    //     shipping: req.body.cost.shipping,
    //     tax: req.body.cost.tax,
    //     total: req.body.cost.total
    //   }
    // };


    $scope.submitAddress = function(){

      $scope.alerts.address = [];
      restResource.setMailingAddress($scope.mailingAddress).then(function(data){
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

    $scope.submitPurchaseHistory = function(){

      $scope.alerts.address = [];
      restResource.newPurchase($scope.purchaseInformation).then(function(data){
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
    

    // $scope.onSubmit = function () {
    //   $scope.processing = true;
    // };

    // $scope.stripeCallback = function (code, result) {
    //   $scope.processing = false;
    //   $scope.hideAlerts();
    //   if (result.error) {
    //     $scope.stripeError = result.error.message;
    //   } else {
    //     $scope.stripeToken = result.id;
    //   }
    // };

    $scope.hideAlerts = function () {
      $scope.stripeError = null;
      $scope.stripeToken = null;
    };

    // $scope.submit = function(){
    //   restResource.newAddress($scope.addressDetail).then(function(result){
    //     if(result.success){
    //       console.log(result.account);
    //     }else{
    //       //error due to server side validation
    //       angular.forEach(result.errors, function(err, index){
    //         console.log(err);
    //       });
    //     }
    //   }), function(x){
    //     console.log(x);
    //   }
    // };

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