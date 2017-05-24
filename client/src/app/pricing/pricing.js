angular.module('pricing.index', ['ngRoute', 'ui.bootstrap', 'account.settings.social', 'security.service', 'security.authorization', 'services.accountResource', 'services.products', 'services.utility', 'services.cart']);
angular.module('pricing.index').config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/pricing', {
    templateUrl: 'pricing/pricing.tpl.html',
    controller: 'PricingCtrl',
    title: 'Pricing',
    resolve: {
      productList: prodListService
    }
  });
}]);
function prodListService(productService) {
  return productService.getProductList();
}

angular.module('pricing.index').controller('PricingCtrl', ['$scope', '$q', '$http', '$modal', 'security', '$location', '$timeout', 'productService', 'productList', 'cartService',
  function($scope, $q, $http, $modal, security, $location, $timeout, productService, productList, cartService){
    
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

    $scope.getItemAmount = function () {
      return cartService.getItemAmount();
    };

    $scope.addQty = function(product) {
      return cartService.addQty(product);
    }
    $scope.subtractQty = function(product) {
      return cartService.subtractQty(product);
    }
    $scope.openInfoModal = function () {
      var modalInstance = $timeout(function(){ $modal.open({
        templateUrl: 'pricing/information-modal.tpl.html',
        controller: 'InfoModalCtrl',
        resolve: {
          totalAmount: $scope.getCartPrice
        }
      })}, 2000);
    };

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

    $scope.greaterThan = function(prop, val){
      return function(item){
        return item[prop] > val;
      }
    }

    $scope.openInfoModal();

  }])
.controller('InfoModalCtrl',
  function($scope, $location, $modalInstance){

    $scope.newPage = function(){
      $location.path("/pricing/information");
      $modalInstance.dismiss('cancel');
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })
.controller('LoginOrGuestCtrl',
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

