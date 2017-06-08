Stripe.setPublishableKey('pk_test_1Ol0KXlUc2OASvEVg1JwhHp2');

angular.module('pricing.checkout', ['ngRoute', 'angularPayments', 'services.cart', 'ui.bootstrap']);
angular.module('pricing.checkout').config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/pricing/checkout', {
		templateUrl: 'pricing/checkout/checkout.tpl.html',
		controller: 'CheckoutCtrl',
		title: 'Checkout'
	});
}]);
angular.module('pricing.checkout').controller('CheckoutCtrl', ['$scope','$routeParams', 'cartService', function ($scope, $routeParams, cartService) {

		var totalAmount = cartService.getCartPrice;

		$scope.cart = cartService;

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

		var acc = document.getElementsByClassName("panel-heading");
		var paneling = document.getElementsByClassName("panel-body");
		
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].onclick = function() {
				this.classList.toggle("active");
				var pan = paneling[i];
				if (pan.style.maxHeight){
					pan.style.maxHeight = null;
				} else {
					pan.style.maxHeight = pan.scrollHeight + "px";
				} 
			}
		}


	}]);