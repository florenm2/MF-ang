angular.module('services.products', []);
angular.module('services.products').factory('productService', ['$http', '$q', function($http, $q){


  var processResponse = function(res){
    return res.data;
  };

  var processError = function(e){
    var msg = [];
    if(e.status)         { msg.push(e.status); }
    if(e.statusText)     { msg.push(e.statusText); }
    if(msg.length === 0) { msg.push('Unknown Server Error'); }
    return $q.reject(msg.join(' '));
  };

  var productList = {};
  productList.getProductList = function() {
    return $http.get('/api/getProducts').then(processResponse, processError);
  };

  return productList;
}]);