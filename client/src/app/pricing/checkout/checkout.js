Stripe.setPublishableKey('pk_test_1Ol0KXlUc2OASvEVg1JwhHp2');

angular.module('pricing.checkout', ['ngRoute', 'angularPayments', 'services.cart']);
angular.module('pricing.checkout').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/pricing/checkout', {
      templateUrl: 'pricing/checkout/checkout.tpl.html',
      controller: 'CheckoutCtrl',
      title: 'Checkout'
    });
}]);
<<<<<<< HEAD
angular.module('pricing.checkout').controller('CheckoutCtrl', ['$scope','$routeParams', function ($scope, $routeParams) {
	var totalAmount = $routeParams.totalAmount;

	$scope.onSubmit = function () {
		$scope.processing = true;
	};
=======
angular.module('pricing.checkout').controller('CheckoutCtrl', ['$scope','$routeParams', 'cartService', function ($scope, $routeParams, cartService) {
		
		//var totalAmount = $routeParams.totalAmount;
		var totalAmount = cartService.getCartPrice;

		$scope.cart = cartService;
>>>>>>> 212bec6d48db1270d24dbcc86459b09bb8b0e112

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

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
}]);