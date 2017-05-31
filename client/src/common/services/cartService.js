angular.module('services.cart', []);
angular.module('services.cart').factory('cartService', ['$http', '$q', function($http, $q){

  var cart = [];

  cart.addToCart = function (product) {
      var found = false;
      this.forEach(function (item) {
        if (item.title === product.title) {
          item.quantity++;
          found = true;
        }
      });
      if (!found) {
        this.push(angular.extend({quantity: 1}, product));
      }
    };

  cart.removeFromCart = function (product) {
      var ind = this.indexOf(product);
      this.splice(ind, 1);  
    };

  cart.getProductPrice = function (product) {
      return (product.price)*(product.quantity);
    };

  cart.getCartPrice = function () {
      var total = 0;
      this.forEach(function (product) {
        total += product.price * product.quantity;
      });
      return total;
    };

  cart.getCartProducts = function () {
      var total = [];
      this.forEach(function (product) {
        //console.log(product.title);
        total.push((product.title, product.quantity));
      });
      return total;
    };

    cart.getCart = function () {
      return this;
    };

  cart.getItemAmount = function () {
      var total = 0;
      this.forEach(function (product) {
        total += product.quantity;
      });
      return total;
    };

 cart.clearItemAmount = function() {
      this.forEach(function (product) {
        product.quantity = 0;
      });
  } 

  cart.addQty = function(product) {
        product.quantity++;
    }
  cart.subtractQty = function(product) {
        if(product.quantity>0) {
          product.quantity--;
        }
    }

  return cart;
}]);