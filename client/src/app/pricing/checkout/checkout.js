Stripe.setPublishableKey('pk_test_1Ol0KXlUc2OASvEVg1JwhHp2');

angular.module('pricing.checkout', ['ngRoute', 'angularPayments']);
angular.module('pricing.checkout').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/pricing/checkout/:totalAmount', {
      templateUrl: 'pricing/checkout/checkout.tpl.html',
      controller: 'CheckoutCtrl',
      title: 'Checkout'
    });
}]);
angular.module('pricing.checkout').controller('CheckoutCtrl', ['$scope','$routeParams', function ($scope, $routeParams) {
	var totalAmount = $routeParams.totalAmount;

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