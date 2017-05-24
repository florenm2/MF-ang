angular.module('admin.pricing', ['ngRoute', 'security.authorization', 'services.utility', 'services.adminResource', 'ui.bootstrap', 'directives.serverError']);
angular.module('admin.pricing').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/admin/pricing', {
      templateUrl: 'admin/Pricing/admin-pricing.tpl.html',
      controller: 'AdminPricingCtrl',
      title: 'Pricing Area',
      resolve: {
        products: ['$q', '$location', 'securityAuthorization', 'adminResource', function($q, $location, securityAuthorization, adminResource){
          //get app stats only for admin-user, otherwise redirect to /account
          var redirectUrl;
          var promise = securityAuthorization.requireAdminUser()
            .then(adminResource.getAllProducts, function(reason){
              //rejected either user is un-authorized or un-authenticated
              redirectUrl = reason === 'unauthorized-client'? '/account': '/login';
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
angular.module('admin.pricing').controller('AdminPricingCtrl', ['$scope', '$log', '$route', '$modal', 'products','adminResource', 'utility',
  function($scope, $log, $route, $modal, products, adminResource, utility){
    
    $scope.products = products.data;
    
    var deserializeProduct = function(product){
      $scope.products = products.data;
    };

    $scope.updateModal = function (product) {
      var modalInstance = $modal.open({
        templateUrl: 'admin/Pricing/admin-pricing-modal.tpl.html',
        controller: ModalInstanceCtrl,
        resolve: {
        data: function () {
          return product;
        }
      }
      });


       modalInstance.result.then(function (newPrice) {
          $scope.updateProduct(product, newPrice);
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      

    }; 

    $scope.updateProduct = function(product, newPrice){
      console.log(product);
      var data = {
        price: newPrice,
        date:  new Date(),
        oldPrice: product.price
      };
      console.log(data);
      adminResource.updateProduct(product._id, data).then(function(result){
        if(result.success){
          $route.reload();
          console.log(result);
        }else{
          angular.forEach(result.errors, function(err, index){
            $scope.contactAlerts.push({ type: 'danger', msg: err });
          });
        }
      }, function(x){
        console.log("error");
      });
    };

    $scope.title = "test";

    $scope.addProduct = function(){
      adminResource.addProduct($scope.title).then(function(data){
        $scope.title = '';
        if(data.success){
          $route.reload();
        }else if (data.errors && data.errors.length > 0){
          alert(data.errors[0]);
        }else {
          alert('unknown error.');
        }
      }, function(e){
        $scope.title = '';
        $log.error(e);
      });
    };

  var ModalInstanceCtrl = function ($scope, $modalInstance, data) {
      $scope.placehold = data.price;
      $scope.newPrice = "";

      $scope.updatePrice = function () {
          $modalInstance.close($scope.newPrice);
          //updateProduct();
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }


  }]);