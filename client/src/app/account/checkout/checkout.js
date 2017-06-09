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