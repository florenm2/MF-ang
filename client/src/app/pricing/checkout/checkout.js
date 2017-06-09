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