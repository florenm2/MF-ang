angular.module('pricing.information', ['ngRoute', 'ui.bootstrap', 'services.products', 'services.utility', 'services.cart', 'services.utility', 'directives.serverError', 'security.service', 'security.authorization']);
angular.module('pricing.information').config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/pricing/information', {
		templateUrl: 'pricing/information/information.tpl.html',
		controller: 'InfoCtrl',
		title: 'Information',
		resolve: {
			productList: prodListService
		}
	});
}]);

angular.module('pricing.information').controller('InfoCtrl', ['$scope', '$modal', 'productService', 'productList', 'cartService', '$log', 'utility', 'security', '$location', '$anchorScroll',
	function ($scope, $modal, productService, productList, cartService, $log, utility, security, $location, $anchorScroll) {

		$scope.cart = cartService;

		$scope.products = productList;

		$scope.addToCart = function (product) {
			return cartService.addToCart(product);
			console.log($scope.cart);
		};

		$scope.removeFromCart = function (product) {
			return cartService.removeFromCart(product); 
		};

		$scope.getProductPrice = function (product) {
			return (product.price)*(product.quantity);
		};

		$scope.getCartPrice = function () {
			return cartService.getCartPrice(); 
		};

		$scope.clearCart = function (){
			console.log(cartService.getItemAmount());
			cartService.clearItemAmount();
			
			$scope.calculated=false;
			$scope.arr_to_fill = [0,0,0,0,0,0,0,0];
			$scope.cable2 =0;
			$scope.cable5 =0;
			$scope.cable8 =0;
			$scope.cable12 =0;
			$scope.cable20 = 0;
		};

		$scope.getItemAmount = function () {
			return cartService.getItemAmount();
		};

		$scope.addQty = function(product) {
			return cartService.addQty(product);
		}
		$scope.subtractQty = function(product) {
			return cartService.subtractQty(product);
		}

		$scope.AC_size_input;
		$scope.num_panels_input;
		$scope.d_length_input;
		$scope.d_length2_input=0;
		$scope.calculated = false;
		$scope.productList;
		$scope.acceptable_panels;
		$scope.bus_bar_rating;
		$scope.no_cart_bus_bar=false;
		$scope.no_cart_panels;

	//User entered information
	$scope.AC_size = 3.4;
	$scope.num_panels = 34; //1000 panel limit
	$scope.d_length = 26;
    //will need second desired lenght if 2 smart boxes

	//Database Parameters
	var c_lengths = [20,12,8,5,2];
	var c_lengths2 = [2,5,8,12,20];
	var sb_size = 3.8;

	// Hardcoded constants
	var buffer_constant = 4;
	var max_cable_length = 80; //100

	$scope.cableLabel1 = "Cable length (ft)";


	//Desired Results
	$scope.num_smartboxes = 0;
	$scope.num_connectors = 0;
	$scope.cable_segments = [];

	$scope.hover = false;


	//Smartbox Calculation
	if ($scope.AC_size > sb_size)
		$scope.num_smartboxes = 2;
	else
		$scope.num_smartboxes = 1;

	//Connector Calculation 
	$scope.num_connectors = $scope.num_panels;

	$scope.arr_to_fill = [0,0,0,0,0,0,0,0];
	$scope.cables = [];

	$scope.calculate_test = function(amount){
		console.log($scope.arr_to_fill);
		amount++;

		var count; 
		var count2; 
		var arr_pos = 0;
		console.log($scope.arr_to_fill);
			//for(count = 0; count<$scope.arr_to_fill.length; count++){
				while(1>0){
					console.log($scope.arr_to_fill);
					for(count = 0; count<5; count++){
						console.log($scope.arr_to_fill);
						$scope.arr_to_fill[arr_pos] = c_lengths2[count];
						console.log($scope.arr_to_fill);

						if ($scope.arr_to_fill.reduce(function(a, b) { return a + b; }, 0) >= amount){

							$scope.calculated = true;
							if($scope.AC_size_input>sb_size){
								$scope.addToCart($scope.products[0]);
								$scope.addToCart($scope.products[0]);
							} else{
								$scope.addToCart($scope.products[0]);
							}
							for(i = 0; i<$scope.arr_to_fill.length;i++){
								if($scope.arr_to_fill[i]!=0){
									for(n=0;n<$scope.products.length;n++){
										if($scope.products[n].length == $scope.arr_to_fill[i]){
											$scope.addToCart($scope.products[n]);
											$scope.cables[i] = $scope.arr_to_fill[i];
										}
									}
								}
							}
							for(m=0;m<$scope.num_panels_input;m++){
								$scope.addToCart($scope.products[4]);
							}

							console.log($scope.cart);
							return $scope.arr_to_fill;

						}
					} arr_pos++;

				}
			}

			$scope.cable2 =0;
			$scope.cable5 =0;
			$scope.cable8 =0;
			$scope.cable12 =0;
			$scope.cable20 =0;

			$scope.panels_check = function(value) {
			     $scope.acceptable_panels == value;
			}



			$scope.calculate = function(acceptable, amount, amount2){
				$scope.clearCart();


				//perfect these
				if($scope.bus_bar_rating==1){
					$scope.no_cart_bus_bar=true;
					$scope.calculated=false;
					return;
				}
				if(!($scope.AC_size_input>3.6)){
					amount2=0;
				}
				if($scope.AC_size_input>3.6 && $scope.bus_bar_rating!=3){
					$scope.no_cart_bus_bar=true;
					$scope.calculated=false;
					return;
				}
				// if(($scope.AC_size_input>3.6) && ($scope.d_length2_input==0)){
				// 	amount2 = amount;
				// }

				if($scope.acceptable_panels==1){
					$scope.no_cart_panels=true;
					$scope.calculated=false;
					return;
				} else {
					$scope.no_cart_panels=false;
				}


				var amount_copy = amount;


				if (amount== 18 || amount == 19 || (amount > 35 && amount < 40) || (amount > 53 && amount < 60) || (amount > 71 && amount < 80)){

					while (amount_copy>0){
						$scope.cable20++;
						amount_copy=amount_copy-20;
					}

				} else if (amount > 67 && amount < 72){
					$scope.cable20 = 3;
					$scope.cable12 = 1;

				} else if (amount > 64 && amount < 68){
					$scope.cable20 = 3;
					$scope.cable8 = 1;

				} else if (amount == 64){
					$scope.cable20 = 3;
					$scope.cable5 = 1;

				} else if (amount == 80){
					$scope.cable20 = 4;
					$scope.cable2 = 1;

				} else if (amount == 62 || amount == 63){
					$scope.cable20 = 2;
					$scope.cable12 = 2;

				} else if (amount == 60 || amount == 61){
					$scope.cable20 = 3;
					$scope.cable2 = 1;

				} else if (amount == 53){
					$scope.cable20 = 2;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 52){
					$scope.cable20 = 2;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 47 && amount < 52){
					$scope.cable20 = 2;
					$scope.cable12 = 1;

				} else if (amount > 48 || amount > 44){
					$scope.cable20 = 2;
					$scope.cable8 = 1;

				} else if (amount == 44){
					$scope.cable20 = 2;
					$scope.cable5 = 1;

				} else if (amount == 42 || amount == 43){
					$scope.cable20 = 1;
					$scope.cable12 = 2;

				} else if (amount == 41 || amount == 40){
					$scope.cable20 = 2;
					$scope.cable2 = 1;

				} else if (amount == 34 || amount == 35){
					$scope.cable20 = 1;
					$scope.cable8 = 2;

				} else if (amount == 33){
					$scope.cable20 = 1;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 32){
					$scope.cable20 = 1;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 28 && amount < 32){
					$scope.cable20 = 1;
					$scope.cable12 = 1;

				} else if (amount == 28){
					$scope.cable12 = 2;
					$scope.cable5 = 1;

				} else if (amount < 28 && amount > 24){
					$scope.cable20 = 1;
					$scope.cable8 = 1;

				} else if (amount == 24){
					$scope.cable20 = 1;
					$scope.cable5 = 1;

				} else if (amount == 22 || amount == 23){
					$scope.cable12 = 2;

				} else if (amount == 20 || amount == 21){
					$scope.cable20 = 1;
					$scope.cable2 = 1;

				} else if (amount == 17){
					$scope.cable8 = 2;
					$scope.cable2 = 1;

				} else if (amount == 16){
					$scope.cable12 = 1;
					$scope.cable5 = 1;

				} else if (amount == 14 || amount == 15){
					$scope.cable8 = 2;

				} else if (amount == 13){
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 12){
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount == 11 || amount == 10){
					$scope.cable12 = 1;

				} else if (amount == 9){
					$scope.cable8 = 1;
					$scope.cable2 = 1;

				} else if (amount == 8){
					$scope.cable5 = 1;
					$scope.cable2 = 2;

				} else if (amount == 7){
					$scope.cable8 = 1;

				} else if (amount == 6){
					$scope.cable5 = 1;
					$scope.cable2 = 1;

				} else if (amount == 5){
					$scope.cable2 = 3;

				} else if (amount == 4){
					$scope.cable5 = 1;

				} else {
					$scope.cable2 = 2;
				} 

				$scope.no_cart_panels=false;
				$scope.no_cart_bus_bar=false;
				$scope.calculated = true;

				if($scope.AC_size_input>sb_size){
					$scope.addToCart($scope.products[0]);
					$scope.addToCart($scope.products[0]);
				} else{
					$scope.addToCart($scope.products[0]);
				}

				for(m=0;m<$scope.num_panels_input;m++){
					$scope.addToCart($scope.products[4]);
				}

				while($scope.cable20>0){
					$scope.addToCart($scope.products[1]);
					$scope.cable20--;
				}
				while($scope.cable12>0){
					$scope.addToCart($scope.products[2]);
					$scope.cable12--;
				}
				while($scope.cable8>0){
					$scope.addToCart($scope.products[3]);
					$scope.cable8--;
				}
				while($scope.cable5>0){
					$scope.addToCart($scope.products[6]);
					$scope.cable5--;
				}
				while($scope.cable2>0){
					$scope.addToCart($scope.products[5]);
					$scope.cable2--;
				}


				if(amount2>0){
					$scope.calculate2(amount2);
				}

				console.log($scope.cart);
				return $scope.cart;

			}

			$scope.calculate2 = function(amount){

				var amount2 = amount;


				if (amount== 18 || amount == 19 || (amount > 35 && amount < 40) || (amount > 53 && amount < 60) || (amount > 71 && amount < 80)){

					while (amount2>0){
						$scope.cable20++;
						amount2=amount2-20;
					}

				} else if (amount > 67 && amount < 72){
					$scope.cable20 = 3;
					$scope.cable12 = 1;

				} else if (amount > 64 && amount < 68){
					$scope.cable20 = 3;
					$scope.cable8 = 1;

				} else if (amount == 64){
					$scope.cable20 = 3;
					$scope.cable5 = 1;

				} else if (amount == 80){
					$scope.cable20 = 4;
					$scope.cable2 = 1;

				} else if (amount == 62 || amount == 63){
					$scope.cable20 = 2;
					$scope.cable12 = 2;

				} else if (amount == 60 || amount == 61){
					$scope.cable20 = 3;
					$scope.cable2 = 1;

				} else if (amount == 53){
					$scope.cable20 = 2;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 52){
					$scope.cable20 = 2;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 47 && amount < 52){
					$scope.cable20 = 2;
					$scope.cable12 = 1;

				} else if (amount > 48 || amount > 44){
					$scope.cable20 = 2;
					$scope.cable8 = 1;

				} else if (amount == 44){
					$scope.cable20 = 2;
					$scope.cable5 = 1;

				} else if (amount == 42 || amount == 43){
					$scope.cable20 = 1;
					$scope.cable12 = 2;

				} else if (amount == 41 || amount == 40){
					$scope.cable20 = 2;
					$scope.cable2 = 1;

				} else if (amount == 34 || amount == 35){
					$scope.cable20 = 1;
					$scope.cable8 = 2;

				} else if (amount == 33){
					$scope.cable20 = 1;
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 32){
					$scope.cable20 = 1;
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount > 28 && amount < 32){
					$scope.cable20 = 1;
					$scope.cable12 = 1;

				} else if (amount == 28){
					$scope.cable12 = 2;
					$scope.cable5 = 1;

				} else if (amount < 28 && amount > 24){
					$scope.cable20 = 1;
					$scope.cable8 = 1;

				} else if (amount == 24){
					$scope.cable20 = 1;
					$scope.cable5 = 1;

				} else if (amount == 22 || amount == 23){
					$scope.cable12 = 2;

				} else if (amount == 20 || amount == 21){
					$scope.cable20 = 1;
					$scope.cable2 = 1;

				} else if (amount == 17){
					$scope.cable8 = 2;
					$scope.cable2 = 1;

				} else if (amount == 16){
					$scope.cable12 = 1;
					$scope.cable5 = 1;

				} else if (amount == 14 || amount == 15){
					$scope.cable8 = 2;

				} else if (amount == 13){
					$scope.cable12 = 1;
					$scope.cable2 = 1;

				} else if (amount == 12){
					$scope.cable8 = 1;
					$scope.cable5 = 1;

				} else if (amount == 11 || amount == 10){
					$scope.cable12 = 1;

				} else if (amount == 9){
					$scope.cable8 = 1;
					$scope.cable2 = 1;

				} else if (amount == 8){
					$scope.cable5 = 1;
					$scope.cable2 = 2;

				} else if (amount == 7){
					$scope.cable8 = 1;

				} else if (amount == 6){
					$scope.cable5 = 1;
					$scope.cable2 = 1;

				} else if (amount == 5){
					$scope.cable2 = 3;

				} else if (amount == 4){
					$scope.cable5 = 1;

				} else {
					$scope.cable2 = 2;
				} 


				while($scope.cable20>0){
					$scope.addToCart($scope.products[1]);
					$scope.cable20--;
				}
				while($scope.cable12>0){
					$scope.addToCart($scope.products[2]);
					$scope.cable12--;
				}
				while($scope.cable8>0){
					$scope.addToCart($scope.products[3]);
					$scope.cable8--;
				}
				while($scope.cable5>0){
					$scope.addToCart($scope.products[6]);
					$scope.cable5--;
				}
				while($scope.cable2>0){
					$scope.addToCart($scope.products[5]);
					$scope.cable2--;
				}


				console.log($scope.cart);
				
				return $scope.cart;

			}


			$scope.change = function(){
				if(!($scope.AC_size_input>3.6)){
					$scope.calculatingForm.d_length2_input.$setValidity("pos", true);
				}
			}

			$scope.checkout = function () {
				var total = $scope.getCartPrice;

				if(!security.isAuthenticated()){
					$modal.open({
						templateUrl: 'pricing/login-modal.tpl.html',
						controller: 'LoginOrGuestCtrl',
						resolve: {
							totalAmount: total
						}
					});
				}
				else {
					$location.path('/account/checkout/' + total);
				}
			};

			$scope.panelModal = function () {
				$modal.open({
					templateUrl: 'pricing/panel-modal.tpl.html',
					controller: 'PanelModalCtrl'
				});
			};


			$scope.greaterThan = function(prop, val){
				return function(item){
					return item[prop] > val;
				}
			}

			$scope.errfor = {}; 
			$scope.alerts = {
				calculating: []
			};

			// $scope.gotoBottom = function() {
		 //      // set the location.hash to the id of
		 //      // the element you wish to scroll to.
		 //      $location.hash('bottom');

		 //      // call $anchorScroll()
		 //      $anchorScroll();
		 //    };


	     // method def
	     $scope.hasError = utility.hasError;
	     $scope.showError = utility.showError;
	     $scope.canSave = utility.canSave;
	     $scope.closeAlert = function(key, ind){
	     	$scope.alerts[key].splice(ind, 1);
	     };

	 }]);

angular.module('pricing.information').controller('LoginOrGuestCtrl',
	function($scope, $location, $modalInstance, totalAmount){

		$scope.signin = function(){
			$location.path("/account/checkout/" + totalAmount);
			$modalInstance.dismiss('cancel');
		};
		$scope.guest = function(){
			$location.path("/pricing/checkout/" + totalAmount);
			$modalInstance.dismiss('cancel');
		};
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	});

angular.module('pricing.information').controller('PanelModalCtrl',
	function($scope, $location, $modalInstance){


		$scope.sunproducts = [
		{
			"id": 1,
			"type": "SunPower",
			"title": "SunPower SPR-X19-240-BLK-B-AC",
			"image": "/img/SmartBox1.png",
			"price": 25
		},
		{
			"id": 2,
			"title": "SunPower SPR-X20_250-BLK-A-AC",
			"type": "SunPower",
			"image": "/img/SmartBox4.png",
			"price": 50
		},
		{
			"id": 3,
			"title": "SunPower SPR-X20-250-BLK-B-AC",
			"type": "SunPower",
			"image": "/img/SmartBox3.png",
			"price": 80
		},
		{
			"id": 4,
			"type": "SunPower",
			"title": "SunPower  SPR-X20-327-BLK-C-AC",
			"image": "/img/SmartBox2.png",
			"price": 25
		},
		{
			"id": 5,
			"type": "SunPower",
			"title": "SunPower  SPR-X20-327-C-AC",
			"image": "/img/projects/project-1.jpg",
			"price": 25
		},
		{
			"id": 6,
			"title": "SunPower  SPR-X21-335-BLK-C-AC",
			"type": "SunPower",
			"image": "/img/projects/project-1.jpg",
			"price": 8
		},
		{
			"id": 7,
			"title": "SunPower  SPR-X21-345-C-AC",
			"type": "SunPower",
			"image": "/img/projects/project-1.jpg",
			"price": 2
		}
		];

		$scope.etproducts = [
		{
			"id": 1,
			"type": "ET",
			"title": "ET-P660265WWAC",
			"image": "/img/SmartBox1.png",
			"price": 25
		},
		{
			"id": 2,
			"title": "ET-P660265WBAC",
			"type": "ET",
			"image": "/img/SmartBox4.png",
			"price": 50
		},
		{
			"id": 3,
			"title": "ET-P660260WWAC",
			"type": "ET",
			"image": "/img/SmartBox3.png",
			"price": 80
		},
		{
			"id": 4,
			"type": "ET",
			"title": "ET-P660260WBAC",
			"image": "/img/SmartBox2.png",
			"price": 25
		}
		];


		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

	});


// angular.module('pricing.information').directive('cableMax', function() {
//   return {
//     require: 'ngModel',
//     link: function(scope, element, attr, mCtrl) {
//       function checkMax(value) {
//         if (!isEmpty(value) && value < 80) {
//           mCtrl.$setValidity('max', true);
//         } else {
//           mCtrl.$setValidity('max', false);
//         }
//         return value;
//       }
//       mCtrl.$parsers.push(checkMax);
//     }
//   };
// });

angular.module('pricing.information').directive('pos', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMin, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var minValidator = function(value) {
				var min = 1;
				if (!isEmpty(value) && value < min) {
					ctrl.$setValidity('pos', false);
					return undefined;
				} else {
					ctrl.$setValidity('pos', true);
					return value;
				}
			};

			ctrl.$parsers.push(minValidator);
			ctrl.$formatters.push(minValidator);
		}
	};
});

angular.module('pricing.information').directive('cablemin', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMin, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var minValidator = function(value) {
				var min = 6;
				if (!isEmpty(value) && value < min) {
					ctrl.$setValidity('cablemin', false);
					return undefined;
				} else {
					ctrl.$setValidity('cablemin', true);
					return value;
				}
			};

			ctrl.$parsers.push(minValidator);
			ctrl.$formatters.push(minValidator);
		}
	};
});

angular.module('pricing.information').directive('cable2min', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMin, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var minValidator = function(value) {
				var min = 6;
				if (!isEmpty(value) && value < min && value!= 0) {
					ctrl.$setValidity('cable2min', false);
					return undefined;
				} else {
					ctrl.$setValidity('cable2min', true);
					return value;
				}
			};

			ctrl.$parsers.push(minValidator);
			ctrl.$formatters.push(minValidator);
		}
	};
});

angular.module('pricing.information').directive('cablemax', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMax, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var maxValidator = function(value) {
				var max = 80;
				if (!isEmpty(value) && value > max) {
					ctrl.$setValidity('cablemax', false);
					return undefined;
				} else {
					ctrl.$setValidity('cablemax', true);
					return value;
				}
			};

			ctrl.$parsers.push(maxValidator);
			ctrl.$formatters.push(maxValidator);
		}
	};
});

angular.module('pricing.information').directive('acmax', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr, ctrl) {
			scope.$watch(attr.ngMax, function(){
				if (ctrl.$isDirty) ctrl.$setViewValue(ctrl.$viewValue);
			});

			var isEmpty = function (value) {
				return angular.isUndefined(value) || value === "" || value === null;
			}

			var maxValidator = function(value) {
				var max = 7.6;
				if (!isEmpty(value) && value > max) {
					ctrl.$setValidity('acmax', false);
					return undefined;
				} else {
					ctrl.$setValidity('acmax', true);
					return value;
				}
			};

			ctrl.$parsers.push(maxValidator);
			ctrl.$formatters.push(maxValidator);
		}
	};
});

angular.module('pricing.information').directive('validNumber', function() {
	return {
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelCtrl) {
			if(!ngModelCtrl) {
				return; 
			}

			ngModelCtrl.$parsers.push(function(val) {
				if (angular.isUndefined(val)) {
					var val = '';
				}
				var clean = val.replace(/[^0-9\.]/g, '');
				var decimalCheck = clean.split('.');

				if(!angular.isUndefined(decimalCheck[1])) {
					decimalCheck[1] = decimalCheck[1].slice(0,8);
					clean =decimalCheck[0] + '.' + decimalCheck[1];
				}

				if (val !== clean) {
              //ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$setValidity('isNum', false);
              ngModelCtrl.$render();
          }
          if (val == clean) {
          	ngModelCtrl.$setValidity('isNum', true);
          	ngModelCtrl.$render();
          }

          return clean;
      });

			element.bind('keypress', function(event) {
				if(event.keyCode === 32) {
					event.preventDefault();
				}
			});
		}
	};
});

angular.module('pricing.information').directive('validNumberNoDecimals', function() {
	return {
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelCtrl) {
			if(!ngModelCtrl) {
				return; 
			}

			ngModelCtrl.$parsers.push(function(val) {
				if (angular.isUndefined(val)) {
					var val = '';
				}
				var clean = val.replace(/\D/g, '');


				if (val !== clean) {
              //ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$setValidity('isInt', false);
              ngModelCtrl.$render();
          }
          if (val == clean) {
          	ngModelCtrl.$setValidity('isInt', true);
          	ngModelCtrl.$render();
          }

          return clean;
      });

			element.bind('keypress', function(event) {
				if(event.keyCode === 32) {
					event.preventDefault();
				}
			});
		}
	};
});


angular.module('pricing.information').directive('toggle', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			if (attrs.toggle=="tooltip"){
				$(element).tooltip();
			}
			if (attrs.toggle=="popover"){
				$(element).popover();
			}
		}
	};
});

// angular.module('pricing.information').directive('defaultToZero', function(){
// 	return {
//     restrict: 'A',
//     require: 'ngModel',
//     link: function (scope, elem, attrs, ngModelCtrl) {
//         elem.on('blur', function() {
//             if (!elem.val()) {
//                 elem.val('0');
//                 ngModelCtrl.$setViewValue('0');
//             }
//         });
//     }
// };
// });

